const moment = require('moment-timezone')

let handler = async (m, { conn }) => {
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let _utc = moment.tz('Etc/UTC').format('HH')
let utc = moment.tz('Etc/UTC').format('HH:mm')
let bgzz = `
*${tanggal(new Date(), 'id')}*

*LOCALE TIME*
*WIB*: ${wib}
*WIT*: ${wit}
*WITA*: ${wita}

*INTERNATIONAL TIME*
⏰ *${(_utc >= 0) ? utc + ' A.M.' : (_utc >= 12) ? utc + ' P.M.' : ''}*

© 𝑺𝒑𝒂𝒄𝒆𝑻𝒆𝒂𝒎
`

conn.sendMessage(m.chat, {
text: bgzz,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: wm,
body: namebot,
thumbnailUrl: thumb,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['waktu']
handler.tags = ['info']
handler.command = /^(time|waktu)$/i

module.exports = handler

const tanggal = (numer, locale = 'en-US') => {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  return numer.toLocaleDateString(locale, options)
}