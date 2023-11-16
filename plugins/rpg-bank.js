let fs = require('fs')
let fetch = require('node-fetch')
let { currency, shortNumber, numberFormat } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix }) => {

  let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'

  let name = await conn.getName(m.sender)
  let user = global.db.data.users[who]
let pp = 'https://telegra.ph/file/c7cd3c7bd4e1a30167f14.jpg'
  const caption = `
*SPACE BANK*

• *Name:* ${user.registered ? user.name : name}
• *Bank:* ${currency(user.bank)}
• *Money*: ${currency(user.money)}
• *Credit*: ${numberFormat(user.balance)}
`
  conn.reply(m.chat, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = true

module.exports = handler