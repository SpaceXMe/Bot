let { numberFormat, msToDate, currency } = require('../lib/myfunc')

const free = 5000
const prem = 10000
const moneyfree = 25
const moneyprem = 50
const timeout = 3600000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 3600000
  if (new Date - global.db.data.users[m.sender].lastclaim < 3600000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToDate(time - new Date())} lagi`
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += 10
        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? numberFormat(prem) : numberFormat(free)} Exp\n+$${isPrems ? numberFormat(moneyprem) : numberFormat(moneyfree)} Money\n+10 Limit`, m)
        global.db.data.users[m.sender].lastclaim = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Hourly sudah bisa di dapatkan kembali`, m)
					}, timeout)
    } 
handler.help = ['hourly']
handler.tags = ['rpgabsen']
handler.command = /^(hourly|claim|klaim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0
handler.exp = 0
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}