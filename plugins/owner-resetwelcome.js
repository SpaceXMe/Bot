let handler = async (m, { text, conn }) => {
  let chat = global.db.data.chats
  let teks = text ? text : ""
  conn.welcome = global.welcome
  for (let jid in chat) {
  global.db.data.chats[jid].sWelcome = teks
  }
  m.reply(`Welcome telah dikembalikan seperti semula`)
}
handler.help = ['oresetwelcome']
handler.tags = ['group', 'owner']
handler.command = /^(oresetwelcome|owelcomereset|(or|oreset)(w|welcome))$/i

handler.rowner = true

module.exports = handler