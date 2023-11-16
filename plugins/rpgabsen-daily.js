const free = 2500
const prem = 5000
const moneyfree = 50
const moneyprem = 100
const timeout = 86400000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastdaily + 86400000
  if (new Date - global.db.data.users[m.sender].lastdaily < 86400000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
       // global.db.data.users[m.sender].potion += 5
        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n*+ ${numberFormat(isPrems ? prem : free)} Exp*\n*+ $${numberFormat(isPrems ? moneyprem : moneyfree)} Money*`, m)
        global.db.data.users[m.sender].lastdaily = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Daily sudah bisa di dapatkan kembali`, m)
					}, timeout)
    } 
handler.help = ['daily']
handler.tags = ['rpgabsen']
handler.command = /^(daily)$/i
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

function numberFormat(number) {
  return new Intl.NumberFormat('id-ID').format(number)
}