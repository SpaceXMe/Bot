let handler = async (m, { conn }) => {
  let users = global.db.data.users
  const now = new Date()
  const weekAgo = (now - 7 * 24 * 60 * 60 * 1000)
  let total = 0
  for (let jid in users) {
    if (users[jid].lastseen < weekAgo) {
      delete global.db.data.users[jid]
      total += 1
    }
  }
  m.reply(`Removing *${total} user from database*`)
}

handler.help = ['deluser']
handler.tags = ['owner']
handler.command = /^deluser$/i

handler.owner = true

module.exports = handler