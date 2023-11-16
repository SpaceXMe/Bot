let { numberFormat, currency, clockString } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, command }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastroket)
    let _timers = (10800000 - __timers)
    let order = global.db.data.users[m.sender].roket
    let timers = clockString(_timers) 
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    const editMsg = global.editMsg
    
     if (new Date - global.db.data.users[m.sender].lastroket > 10800000) {
     if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat*`)
let ngerok1 = `${Math.floor(Math.random() * 10)}`
let ngerok2 = `${Math.floor(Math.random() * 10)}`
let ngerok4 = `${Math.floor(Math.random() * 65)}`
let ngerok3 = `${Math.floor(Math.random() * 10)}`
let ngerok5 = `${Math.floor(Math.random() * 10)}`

.trim()

let ngrk1 = (ngerok1 * 2)
let ngrk2 = (ngerok2 * 10) 
let ngrk3 = (ngerok3 * 1)
let ngrk4 = (ngerok4 * 45)
let ngrk5 = (ngerok5 * 120)

var zero1 = `${ngrk1}`
var zero2 = `${ngrk2}`
var zero3 = `${ngrk3}`
var zero4 = `${ngrk4}`
var zero5 = `${ngrk5}`

var rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Memulai penerbangan....
`

var rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Dalam penerbangan....
`

var rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Sampai di tujuan....
`

var rokit4 = `🌕🚀

➕ Sukses Mendarat.... 👨‍🚀`

var hsl = `
*—[ Hasil Roket ${name} ]—*
 ➕ 💹 Uang = [ *${currency(zero4)}* ]
 ➕ ✨ Exp = [ *${numberFormat(zero5)}* ] 		 
 ➕ 😍 Mendarat Selesai = +1
 ➕ 📥Total Mendarat Sebelumnya : ${order}
`


global.db.data.users[m.sender].money += ngrk4
global.db.data.users[m.sender].exp += ngrk5
global.db.data.users[m.sender].roket += 1

const lll = await conn.sendMessage(m.chat, { text: `🔍 ${name} Mencari Lokasi.....` }, { quoted: m })

setTimeout(() => {

                     editMsg(lll, hsl)
                     }, 27000) 
               
                     setTimeout(() => {
                     editMsg(lll, rokit4)
                      }, 25000)
                
                     setTimeout(() => {
                     editMsg(lll, rokit3)
                     }, 20000) 
                        
                     setTimeout(() => {
                     editMsg(lll, rokit2)
                     }, 15000) 
                    
                     setTimeout(() => {
                     editMsg(lll, rokit)
                     }, 10000) 
                     
  user.lastroket = new Date * 1
    } else conn.reply(m.chat, `Sepertinya kamu sudah kelelahan silahkan istirahat dulu sekitar\n🕔 *${timers}*`, m )
}
handler.help = ['roket']
handler.tags = ['rpg']
handler.command = /^(roket|ngroket|groket|jadiroket)$/i
handler.register = true
handler.group = true
module.exports = handler