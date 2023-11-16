const { currency } = require('../lib/myfunc')

const moneymins = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^pull/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / moneymins) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bank >= moneymins * count) {
    global.db.data.users[m.sender].bank -= moneymins * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `-${currency(moneymins * count)} *Space Bank*\n+${currency(count)} *Money*`, m)
  } else conn.reply(m.chat, `*Space Bank* kamu tersisa ${currency(global.db.data.users[m.sender].bank)} !!`, m)
}

handler.help = ['pull <jumlah>', 'pullall']
handler.tags = ['rpg']
handler.command = /^(pull([0-9]+)|pull|pullall|tarik)$/i
handler.owner = false
handler.register = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = false
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.level = 5

module.exports = handler