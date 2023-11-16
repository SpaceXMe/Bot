const { currency } = require('../lib/myfunc')

const moneyplus = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^atm/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / moneyplus) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= moneyplus * count) {
    global.db.data.users[m.sender].money -= moneyplus * count
    global.db.data.users[m.sender].bank += count
    conn.reply(m.chat, `-${currency(moneyplus * count)} *Money*\n+${currency(count)} *Space Bank*`, m)
  } else conn.reply(m.chat, `*Money* tidak mencukupi untuk menabung ${isNaN(count) ? 'di space bank' : `${currency(count)} *Space Bank*`}`, m)
}
handler.help = ['atm <jumlah>', 'atmall']
handler.tags = ['rpg']
handler.command = /^(atm([0-9]+)|atm|atmall|nabung)$/i
handler.owner = false
handler.register = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.level = 5

module.exports = handler