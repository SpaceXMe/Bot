let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/19f968d68c89c645f5191.jpg'
let dann =
`
Donasi untuk membeli panel agar bot tetap on 🤗

┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 082225201437
┃Pulsa: 082225201437 ( TSEL )
┃Pulsa: 085869153641 ( INDOSAT )
┃Ovo: 082225201437
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/ItzBgz
┃Trakteer: -
┃Socialbuzz: -
┃Thanks for Donation's!
┗━━━ꕥ
`
 m.reply(`${dann}`)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler