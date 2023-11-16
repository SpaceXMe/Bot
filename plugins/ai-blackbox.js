const { blackbox } = require('../lib/scraper-ai')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Input query!\n\nContoh: *${usedPrefix + command} Selamat Pagi!*`
  await conn.sendPresenceUpdate('composing', m.chat)
  blackbox(text)
  .then((a) => {
    let msg = []
    for (const i of a.response) {
      const pushmsg = i[0]
      msg.push(pushmsg)
    }
    for (let i of msg) {
      m.reply(i.slice(1))
    }
  })
}

handler.help = ['blackbox']
handler.tags = ['ai']
handler.command = /^(bb|blackbox)$/i

handler.limit = 5

module.exports = handler