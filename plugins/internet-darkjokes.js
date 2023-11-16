let api = require('dhn-api')

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, api.Darkjokes(), 'dragjoke.jpg', 'Gelap kek hidupmu', m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjok(e|es|s)?)$/i

handler.limit = true

module.exports = handler