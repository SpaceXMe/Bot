let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn }) => { 
//let stiker = await sticker(null, 'https://telegra.ph/file/ffe1a120cd420504ff33b.png', global.packname, global.author)
    //if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    //throw stiker.toString()
  conn.sendFile(m.chat, './database/Sticker/emosi.webp', '', null, m)
}
handler.customPrefix = /@6285869153641$/i
handler.command = new RegExp

module.exports = handler
