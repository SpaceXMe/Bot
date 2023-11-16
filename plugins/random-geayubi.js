let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/geayubi.json')
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  conn.sendFile(m.chat, json.url, 'anu.jpg', 'Nih Kak', m)
}
handler.help = ['geayubi']
handler.tags = ['random']
handler.limit = true
handler.command = /^(gh?eayo?ubi|ghea)$/i

module.exports = handler
