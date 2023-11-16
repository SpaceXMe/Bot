let { wattpad } = require('../lib/scrape')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, `Masukkan judul!`, '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Thanos*`, 'status@broadcast')
  m.react(rwait)
  let me = await wattpad(text)
  let thumb = pickRandom(me).thumb;
  let str = me.map(v => `*JUDUL*: ${v.judul}\n*DIBACA*: ${v.dibaca}\n*DIVOTE*: ${v.divote}\n*LINK*: ${v.link}`).join('\n\n•-------============-------•\n\n')
  conn.reply(m.chat, str, m, { contextInfo: { externalAdReply: { title: `WATTPAD`, body: '© Space', sourceUrl: 'http://wattpad.com', thumbnailUrl: thumb }}})
}
handler.help = ['wattpad']
handler.tags = ['internet']
handler.command = /^wattpad$/i

handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}