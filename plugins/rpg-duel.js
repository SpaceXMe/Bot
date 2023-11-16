const { getRandom, numberFormat, currency } = require("../lib/myfunc");

async function handler(m, { conn, args, usedPrefix, command }) {
  conn.duel = conn.duel ? conn.duel : {};
  
  let id = m.chat;
  let user = m.sender;
  let musuh = 'undefined';
  
  if (id in conn.duel) {
    m.reply('Masih ada yang berduel di grup ini.\nSilahkan tunggu sampai mereka selesai gelut');
    return;
  } else {

    try {
      if (m.quoted) {
        musuh = m.quoted.sender;
      } else if (m.mentionedJid[0]) {
        musuh = m.mentionedJid[0];
      } else if (args[0] && (/([0-9])/.test(args[0]))) {
        musuh = args[0] + '@s.whatsapp.net';
      } else {
        return m.reply('Tag atau reply orang yang ingin kamu ajak duel!');
      };
      
      var dataMusuh = global.db.data.users[musuh];
      var dataUser = global.db.data.users[m.sender];
      var tagUser = `@${m.sender.split('@')[0]}`;
      var tagMusuh = `@${musuh.split('@')[0]}`;
      
      let bet = parseInt(args[0]);
      if (isNaN(bet) || bet <= 0) {
        return m.reply(`Masukkan taruhan money!\nContoh: *${usedPrefix + command} 1000 @${m.sender.split('@')[0]}*`);
      };
      if (dataUser.money < bet) {
        return m.reply('Uang kamu tidak cukup untuk taruhan');
      };
      
      if (typeof dataMusuh == 'undefined') throw 'Orang yang kamu tantang tidak terdaftar di database! silahkan tantang player lain';
      m.reply(`${tagUser} menantang ${tagMusuh} untuk berduel!\nKetik *terima* atau *tolak*`)
      
      let timer = getRandom(1, 15);
      
      let txt = '*• D U E L*\n\n';
      txt += '╭── •\n';
      txt += `│ ◦ ${tagUser}\n`;
      txt += '│           *VS*\n';
      txt += `│ ◦ ${tagMusuh}\n`;
      txt += '╰── •\n\n';
      txt += `Waktu *${timer} menit*`;
      
      conn.duel[id] = {
        id: id,
        user: user,
        musuh: musuh,
        dataMusuh: dataMusuh,
        dataUser: dataUser,
        tagMusuh: tagMusuh,
        tagUser: tagUser,
        timer: timer,
        bet: bet,
        txt: txt,
        timeout: setTimeout(() => {
          m.reply('Waktu habis!');
          delete conn.duel[id];
        }, 60000)
      };
      
      
    } catch (e) {
      console.log(e);
      m.reply('Terjadi error saat menjalankan game Duel');
      
      if (id in conn.duel) {
        let { timeout } = conn.duel[id];
        clearTimeout(timeout);
        delete conn.duel[id];
        return true;
      }
    }
  }
}

handler.before = async m => {
  conn.duel = conn.duel ? conn.duel : {};
  
  if (!(m.chat in conn.duel)) return;
  if (m.isBaileys) return;
  
  let { id, user, musuh, dataUser, dataMusuh, tagUser, tagMusuh, bet, txt, timeout, timer } = conn.duel[m.chat];
  
  try {
    if (/gas+|ayo|terima|y(es+)?/i.test(m.text)) {
      if (m.sender == user) return;
      if (m.sender !== musuh) return m.reply('Kamu ga diajak');
      if (dataMusuh.money < bet) return m.reply(`Siapkan uang senilai *${currency(bet)}*`)
      conn.sendMessage(m.chat, { text: txt, contextInfo:  { mentionedJid: conn.parseMention(txt) }}, { quoted: m });
    
      let poinUser = Math.floor(Math.random() * 100);
      let poinEnemy = Math.floor(Math.random() * 100);
      let isWinner = (poinUser > poinEnemy) ? true : false;
      
      if (isWinner) {
        
        clearTimeout(timeout);
        await conn.delay(timer * 60 * 1000);
        
        let win = '*• D U E L*\n\n';
        win += '╭── •\n';
        win += `│ ◦ ${tagUser} *WIN*\n`;
        win += '│            *VS*\n';
        win += `│ ◦ ${tagMusuh} *LOSE*\n`;
        win += '╰── •\n\n';
        win += `${tagUser} Money + ${currency(bet * 2)}\n`;
        win += `${tagMusuh} Money - ${currency(bet)}`;
        conn.sendMessage(m.chat, { text: win, contextInfo: { mentionedJid: conn.parseMention(win) }}, { quoted: m });
        
        dataUser.money = bet * 2;
        dataMusuh.money -= bet;
        
        delete conn.duel[id];
        return true;
      } else {
        
        clearTimeout(timeout);
        await conn.delay(timer * 60 * 1000);
        
        let lose = '*• D U E L*\n\n';
        lose += '╭── •\n';
        lose += `│ ◦ ${tagUser} *WIN*\n`;
        lose += '│           *VS*\n';
        lose += `│ ◦ ${tagMusuh} *LOSE*\n`;
        lose += '╰── •\n\n';
        lose += `${tagUser} Money - ${currency(bet)}\n`;
        lose += `${tagMusuh} Money + ${currency(bet * 2)}`;
        conn.sendMessage(id, { text: lose, contextInfo: { mentionedJid: conn.parseMention(lose) }}, { quoted: m });
        
        dataUser.money -= bet;
        dataMusuh.money += bet * 2;
        
        delete conn.duel[id];
      }
    } else if (/no|tolak|g(ak|k)mau|n/i.test(m.text)) {
      if (m.sender == user) return;
      if (m.sender !== musuh) return m.reply('Kamu ga diajak');
      m.reply(`${tagMusuh} menolak untuk berduel`);
      delete conn.duel[id];
    } else if (/batal/i.test(m.text)) {
      if (m.sender !== user) return m.reply('Kamu ga diajak');
      m.reply('Kamu telah membatalkan duel');
      clearTimeout(timeout);
      delete conn.duel[id];
    }
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, 'Terjadi error saat menjalankan game Duel');
    clearTimeout(timeout);
    delete conn.duel[id];
    return true;
  }
};

handler.help = ["duel"];
handler.tags = ["game", "rpg"];
handler.command = /^duel$/i;

handler.register = true;
handler.group = true;

module.exports = handler;