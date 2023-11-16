const fs = require("fs")
const moment = require("moment-timezone")
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/addlist.js');

let handler = async (m, { conn, text }) => {
const db_respon_list = JSON.parse(fs.readFileSync('./database/store.json'));
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => 'https://i.ibb.co/m53WF9N/avatar-contact.png')
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list store yang terdaftar di group ini`)
for (let x of db_respon_list) {
    if (x.id === m.chat) {
      const items = db_respon_list.filter(x => x.id === m.chat)
      const keys = items.map(item => item.key)
      let str = '┌──⭓「 *List Store* 」\n│\n'
        for (let i of keys) {
           str += `│⭔ ${i}\n`
            }
            str += `│\n└────────────⭓\n\n*Total List : ${keys.length}*\n`
      const ftext = {
        key: {
          fromMe: false,
          participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: "" } : {})
        },
        message: {
          "extendedTextMessage": {
            "text": `*List Store Group ${await conn.getName(m.chat)}*`,
            "title": wm,
            "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
          }
        }
      }
conn.sendMessage(m.chat, {
text: `\n${str}\n`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: moment.tz('Asia/Jakarta').format('HH.mm.ss') + ' WIB',
body: 'By ' + namebot,
thumbnailUrl: pp,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: ftext })
    }
  }
}
handler.help = ['list', 'store']
handler.tags = ['store']
handler.command = /^(list(store)?|store(list)?)$/i

handler.group = true

module.exports = handler