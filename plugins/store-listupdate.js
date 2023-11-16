const fs = require('fs')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/addlist.js');
const { TelegraPh } = require('../lib/uploader');

let handler = async (m, { conn, text, usedPrefix, command }) => {
const db_respon_list = JSON.parse(fs.readFileSync('./database/store.json'));
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!text.includes("@")) return m.reply(`Gunakan dengan cara:\n*${usedPrefix + command} Nama Item@Item*\n\nContoh\n*${usedPrefix + command} List Diamon@1 Diamond 5k*`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
  media = await conn.downloadAndSaveMediaMessage(quoted)
  img = await TelegraPh(media)
  updateResponList(m.chat, args1, args2, true, `${img}`, db_respon_list)
  m.reply(`Sukses update list message dengan key : *${args1}*`)
  if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
  updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
  m.reply(`Sukses update respon list dengan key *${args1}*`)
  }
}
handler.help = ['updatelist']
handler.tags = ['store']
handler.command = /^(updatelist|listupdate)$/i

handler.admin = true
handler.group = true

module.exports = handler