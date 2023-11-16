let { pinterest } = require('../lib/scraper_pinterest')
let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn }) => {
  m.react(xmoji)
  await conn.sendPresenceUpdate("recording", m.chat)
  await pinterest(pickRandom(gojo))
  .then(a => pickRandom(a))
  .then(async b => {
    let stiker = await sticker(false, b, global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  })
}
handler.help = ['gojo']
handler.tags = ['anime', 'sticker']
handler.command = /^(gojo)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let gojo = [
  "Gojo Satoru",
  "gojo",
  "satoru gojo"
]