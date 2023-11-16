const capcut = require('../lib/capcut');
let url = 'https://ssscap.net';

var handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) return conn.fakeReply(m.chat, 'Linknya mana?', '0@s.whatsapp.net', `*Contoh:* ${usedPrefix+command} https://www.capcut.com/xxx`, '0@s.whatsapp.net');
 m.react(rwait);
 try {
   try {
     var me = await fetch(global.API('neoxr', '/api/capcut', { url: text }, 'apikey'));
     var res = await me.json();
     var hasil = `\n${res.caption}\n`;
     conn.sendFile(m.chat, res.data.url, '', hasil, m);
   } catch {
      let cc = await capcut(text);
      const { title, description, usage, originalVideoUrl, coverUrl, authorUrl } = cc;
      let str = `
• *Title*: ${title}
• *Penggunaan*: ${usage}

${description}
`;
      conn.sendFile(m.chat, url + originalVideoUrl, 'capcut.mp4', str, m)
   }
 } catch (e) {
  console.log(e);
  m.reply(`Error : Internal server down!`);
 }
}
handler.help = ['capcut'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^((cc|capcut)(dl|download(er)?)?)$/i;
handler.limit = true
module.exports = handler;

module.exports = handler