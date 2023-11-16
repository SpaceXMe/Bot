var { currency, clockString, pickRandom } = require('../lib/myfunc')

let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 150))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 3600000) {
  if (10000 > users[who].money) throw 'Target tidak memiliki uang :(\nApakah kamu tidak kasihan?'
  users[who].money -= dapat * 1
  users[m.sender].money += dapat * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  conn.reply(m.chat, `Berhasil Merampok Money Target Sebesar\n*${currency(dapat)}*`, m)

} else conn.reply(m.chat, `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`, m)
}
handler.help = ['merampok <@tag>']
handler.tags = ['rpg']
handler.command = /^(merampok|rampok)$/i
handler.limit = true
handler.group = true
handler.register = true

module.exports = handler