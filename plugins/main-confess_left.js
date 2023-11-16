let anon = require('../lib/menfess')

let handler = async(m, { conn, usedPrefix }) => {
  var room = Object.values(anon.anonymous).find(p => p.check(m.sender))
  if (!room) return m.reply(`Kamu sedang tidak berada didalam room confess\nKetik *${usedPrefix} confess* untuk memulai confess`)
  m.reply('Kamu telah mengakhiri confess')
  var other = room.other(m.sender)
  delete anon.anonymous[room.id]
  if (other != "") conn.sendMessage(other, {
  text: "Confess telah berakhir..."
  })
}
handler.help = ['left (confess)']
handler.tags = ['main']
handler.command = /^(left(confess?)?)$/i

module.exports = handler