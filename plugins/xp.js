const { numberFormat, currency } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, command }) => {
  let nama = await conn.getName(m.sender);
  let user = global.db.data.users[m.sender]
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/42b6d34e066764e190023.jpg')
  const reply = (teks) => {
    return conn.reply(m.chat,
    teks,
    m, {
    contextInfo: {
    externalAdReply: {
    title: 'YOUR ' + command.toUpperCase(),
    body: '© Space Rpg',
    sourceUrl: sgc,
    thumbnailUrl: pp,
    mediaType: 2
    }}})
  }
  let str = `
• *Nama*: ${user.name || nama}
• *Credit*: ${numberFormat(user.balance)}
• *Money*: ${currency(user.money)}
• *Tiketcoin*: ${numberFormat(user.tiketcoin)}
• *Exp*: ${numberFormat(user.exp)}
• *Limit*: ${numberFormat(user.limit)}
• *Warn*: ${user.warn}/${global.warn}
• *Skill*: ${user.skill ? user.skill : '-'}
• *Title*: ${user.title ? user.title : '-'}
`.trim()

  switch (command) {
    case 'credit':
    case 'kredit':
    case 'balance':
      reply(`Credit kamu : *${numberFormat(user.balance)}*`)
      break
    case 'dompet':
    case 'uang':
    case 'money':
    case 'duit':
      reply(`Money kamu : *${numberFormat(user.money)}*`)
      break
    case 'exp':
      reply(`Exp kamu : *${numberFormat(user.exp)}*`)
      break
    case 'limit':
      reply(`Limit kamu : *${numberFormat(user.limit)}*`)
      break
    case 'warn':
    case 'warning':
      reply(`Warn kamu : *${numberFormat(user.warn)}/${global.warn}*`)
      break
    case 'tiketcoin':
      reply(`Tiketcoin kamu : *${numberFormat(user.tiketcoin)}*`)
      break
    case 'skill':
    case 'myskill':
      m.reply(`${user.skill ? `*Skill*: ${user.skill}` + (user.title ? `\n*Title*: ${user.title}` : '') : `Kamu belum mempunyai skill\n\nKetik *${usedPrefix}selectskill* untuk memilih skill`}`)
      break
    default:
      return reply(str)
  }
}

handler.help = ['balance', 'dompet', 'exp', 'limit', 'tiketcoin', 'warn']
handler.tags = ['xp']
handler.command = /^(((k|c)redit|balance)|(dompet|uang|money|duit)|exp|limit|warn(ing)?|xp|skill)$/i

handler.register = true
handler.limit = false
handler.premium = false
handler.exp = 0

module.exports = handler