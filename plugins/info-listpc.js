const fs = require("fs")
let moment = require('moment-timezone')

let handler = async(m, { conn }) => {
const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let fcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': await conn.getName(m.sender), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${'@' + jid.replace(/@.+/, '')}\n\n`

conn.sendMessage(m.chat, {
text: `${htki} *CHAT PRIVATE* ${htka}\n\n*Total Chat:* ${niorg.length}\n\n${txt}`,
contextInfo: {
mentionedJid: conn.parseMention(txt),
externalAdReply: {
title: 'Runtime ' + uptime,
body: wib + ' WIB',
thumbnailUrl: "https://telegra.ph/file/d5a1cc2ab8af9bf5acf83.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fcon })
}

handler.help = ['listpc']
handler.tags = ['info']
handler.command = /^(listpc|pclist|daftarpc|pc)$/i
handler.owner = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}