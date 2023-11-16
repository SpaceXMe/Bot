let fs = require('fs')
let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, args, command }) => {
  let setting = db.data.settings[conn.user.jid]
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 m.mediaReply(`*ᴛᴏᴛᴀʟ ғɪᴛᴜʀ sᴀᴀᴛ ɪɴɪ: ${totalf}*`)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(totalf(iture?)?|fiture?)$/i

handler.exp = 0

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return[d, ' Hari ', h, ' Jam ', m, ' Menit ', d, ' Detik'].map(v => v.toString().padStart(2, 0)).join('')
}