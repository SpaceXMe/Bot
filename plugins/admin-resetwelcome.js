let handler = async (m, { text, conn, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat]
  chat.sWelcome = ""
  m.reply('Welcome telah dikembalikan seperti semula')
}
handler.help = ['resetwelcome']
handler.tags = ['admin']
handler.command = /^(resetwelcome|welcomereset|(r|reset)(w|welcome))$/i

handler.group = true
handler.admin = true

module.exports = handler