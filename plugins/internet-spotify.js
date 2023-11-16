var fetch = require("node-fetch")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Judul!\n\nContoh: ${usedPrefix + command} melukis senja`
  var dann = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolhuman}&query=${text}`)
  var res = await dann.json()
  var hasil = res.result.map(item => `• Title: *${item.title}*
• Artis: *${item.artists}*
• Duration: *${item.duration}*
• Popularity: *${item.popularity}*
• ID: *${item.id}*
• Link: *${item.link}*
  `).join("\n");
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}};
  await conn.reply(m.chat, wait, fkonn);
  await conn.reply(m.chat, hasil, fkonn);
}

handler.command = handler.help = ['spotifysearch']
handler.tags = ['internet']

module.exports = handler