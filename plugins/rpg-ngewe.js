let { clockString, shortNumber, pickRandom, currency } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, command }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngentod)
    let _timers = (3600000 - __timers)
    let order = global.db.data.users[m.sender].ngentod
    let timers = clockString(_timers)
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    let editMsg = global.editMsg
    
     if (new Date - global.db.data.users[m.sender].lastngentod > 300000) {
     if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat*`)
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 39)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 35)
let rbrb5 = (randomaku5 * 200)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
✔️ Mendapatkan pelanggan....
`

var dimas2 = `
Mulai anu.....
`

var dimas3 = `     
Kamu keluar didalam ಠಿ_ಠ
`

var dimas4 = `
Selesai memuaskan pelanggan
`

var hsl = `
*—[ Hasil Anu ${name} ]—*
 ➕ 💹 Uang = [ *${currency(zero4)}* ]
 ➕ ✨ Exp = [ *${shortNumber(zero5)}* ] 
 ➕ 😍 Order Selesai = *+1*
 ➕ 📥 Total Order Sebelumnya : *${order}*
`


global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ngentod += 1

const lll = await conn.sendMessage(m.chat, { text: '🔍Mencari pelanggan.....' }, { quoted: m })

setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     editMsg(lll, `${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     editMsg(lll, `${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     editMsg(lll, `${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     editMsg(lll, `${dimas}`)
                     }, 10000) 
                     
  user.lastngentod = new Date * 1
    } else m.reply(`Kamu sudah ngewe dengan seseorang cewe\nHarap tunggu 🕗 *${timers}* untuk kembali ngewe`)
}
handler.help = ['ngewe']
handler.tags = ['rpg']
handler.command = /^(ngewe|anu)$/i
handler.register = true
handler.premium = false

module.exports = handler