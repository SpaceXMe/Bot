const { currency, clockString } = require('../lib/myfunc')

let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastgrab)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].grab
    let timers = clockString(_timers)
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    let editMsg = global.editMsg
    
     if (new Date - global.db.data.users[m.sender].lastgrab > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 40)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Mendapatkan orderan....
`

var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳  🌳 🏘️  🏘️🏡     


🚖 Mengantar Ke tujuan.....
`

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


🚖 Selesai Mengantar Pelanggan....
`

var dimas4 = `
➕ 💹Menerima gaji....
`

var hsl = `
*—[ Hasil Taxy ${name} ]—*
 ➕ 💹 Uang = [ ${currency(zero4)} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1
 ➕ 📥Total Order Sebelumnya : ${isNaN(order) ? 0 : order }

${wm}
`.trim()

var dimas5 = `
*👋HALLO, Waktunya misi taxy lagi kak.....*
`

global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].grab += 1

const lll = await conn.sendMessage(m.chat, { text: '🔍Mencari pelanggan.....' }, { quoted: m })

setTimeout(() => {

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

  user.lastgrab = new Date * 1
    } else conn.reply(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, m)
}
handler.help = ['taxy']
handler.tags = ['rpg']
handler.command = /^(grab|taxy)$/i

module.exports = handler