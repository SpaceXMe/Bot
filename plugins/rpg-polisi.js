let { clockString, numberFormat, currency } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, command }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastpolisi)
    let _timers = (3600000 - __timers)
    let order = global.db.data.users[m.sender].polisi
    let timers = clockString(_timers) 
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    const editMsg = global.editMsg
    
     if (new Date - global.db.data.users[m.sender].lastpolisi > 3600000) {
     if (user.stamina < 20) return m.reply(`Stamina kamu rendah! Silahkan isi dulu dengan mengetik *${usedPrefix}eat*`)
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 65)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 45)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
👮Mengejar Pencuri....
`

var dimas2 = `
👮Menangkap pencuri....
`

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`

var dimas4 = `
➕ 💹Menerima gaji....
`

var hsl = `
*—[ Hasil Polisi ${name} ]—*
 ➕ 💹 Uang = [ ${currency(zero4)} ]
 ➕ ✨ Exp = [ ${numberFormat(zero5)} ] 		 
 ➕ 😍 Order Selesai = +1
 ➕ 📥 Total Order Sebelumnya : ${order}
`

var dimas5 = `
*👋HALLO, Waktunya misi Polisi lagi kak....*
`

global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].polisi += 1

const lll = await conn.sendMessage(m.chat, { text: 'Mencari Pencuri...' }, { quoted: m })

setTimeout(() => {
                     setTimeout(() => {
                     m.reply(`${dimas5}`)
                      }, 3600000)

                     editMsg(lll, `${hsl}`)
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
                     
  user.lastpolisi = new Date * 1
    } else conn.reply(m.chat, `Sepertinya Anda Sudah Kelelahan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, m )
}
handler.help = ['polisi']
handler.tags = ['rpg']
handler.command = /^(polisi)$/i
handler.register = true

module.exports = handler