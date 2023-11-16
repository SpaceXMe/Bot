var fetch = require('node-fetch')

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Character!\n\nContoh: ${usedPrefix + command} azur_lane`
  var dann = await fetch(`https://api.lolhuman.xyz/api/konachan?apikey=${global.lolhuman}&query=${text}`)
  conn.sendFile(m.chat, dann, '', wm, m)
}

handler.command = handler.help = ['konachan']
handler.tags = ['internet']

module.exports = handler