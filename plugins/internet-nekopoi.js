let fetch = require('node-fetch');

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) return conn.fakeReply(m.chat, `Mau cari apa?`, '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} overflow*`, 'status@broadcast');
  await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key }});
  var anu = await fetch(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=dannkristi&query=${text}`);
  var res = await anu.json();
  let data = res.result;
  const links = [];
  const titles = [];
  data.forEach(item => {
    links.push(item.link);
    titles.push(item.title);
  });
  let cap = `Hasil pencarian dari *${text}*\n\n`;
  for (let i = 0; i < data.length; i++) {
    cap += `• *Title:* ${titles[i]}\n• *Link:* ${links[i]}\n\n`;
  }
  conn.reply(m.chat, cap.trim(), m, { contextInfo: { mentionedJid: conn.parseMention(cap), externalAdReply: { title: 'List Neko', body: namebot, sourceUrl: 'https://nekopoi.care', thumbnail: await (await fetch(res.result[0].thumbnail)).buffer() }}});
};

handler.help = ['nekopoisearch', 'nekosearch'];
handler.command = /^(nekopoisearch|nekosearch|searchnekopoi|nekosearch)$/i;
handler.tags = ['internet'];
handler.premium = true;

module.exports = handler;
