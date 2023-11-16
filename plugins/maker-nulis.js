let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Masukkan teks!'
  await m.reply(wait)
  let data = await (await fetch(`https://api.lolhuman.xyz/api/nulis?apikey=${global.lolhuman}&text=${encodeURIComponent(text)}`)).buffer()
  conn.sendFile(m.chat, data, 'hasil.jpg', wm, m)
}
handler.help = ['nulis']
handler.tags = ['maker', 'ai']
handler.command = /^(nulis)$/i
handler.limit = true

module.exports = handler