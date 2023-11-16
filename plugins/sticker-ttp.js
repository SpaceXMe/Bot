let api = require('api-dylux')
let { sticker } = require('../lib/sticker')
const defaultColor = 'ADD8E6'

let handler = async (m, { conn, text, arg, usedPrefix, command }) => {
  let [teks, color] = text.split('|')
  if (!text) throw `Masukkan kode warna dan text!\n\nContoh: *${usedPrefix + command} ${defaultColor} SpaceTeam*`
  m.react(wmoji)
  let warna
  if (!color) { warna = defaultColor
  } else warna = color
    let me = await api.ttp(teks, warna)
    let stiker = await sticker(null, me.result, global.packname, global.author)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.command = handler.help = ['ttp']
handler.tags = ['sticker']
module.exports = handler