const timeout = 36000000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastgajian + 36000000
  if (new Date - global.db.data.users[m.sender].lastgajian < 36000000) throw `Kamu sudah ambil gaji..\n\nCooldown *🕔${msToTime(time - new Date())}*`
  
let _free = `${Math.floor(Math.random() * 1500)}`
let _prem = `${Math.floor(Math.random() * 2500)}`
let _moneyfree = `${Math.floor(Math.random() * 50)}`
let _moneyprem = `${Math.floor(Math.random() * 100)}`

let free = (_free * 1)
let prem = (_prem * 1)
let moneyfree = (_moneyfree * 1)
let moneyprem = (_moneyprem * 1)

        global.db.data.users[m.sender].exp += isPrems ? prem : free * 1
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree * 1

        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+ ${(isPrems ? prem : free)} Exp\n+ $${(isPrems ? moneyprem : moneyfree)} Money`, m)
        global.db.data.users[m.sender].lastgajian = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Gaji sudah bisa di dapatkan kembali`, m)
					}, timeout)
    }
handler.help = ['gajian']
handler.tags = ['rpgabsen']
handler.command = /^(gaji|gajian)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
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

  return hours + "H " + minutes + "M " + seconds + "S"
}