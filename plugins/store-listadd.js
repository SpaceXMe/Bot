const fs = require("fs");
const uploadImage = require('../lib/uploadImage');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/addlist.js');

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  const db_respon_list = JSON.parse(fs.readFileSync('./database/store.json'));
  var teks1 = text.split("@")[0]
  var teks2 = text.split("@")[1]
  if (!text.includes("@")) return m.reply(`Gunakan dengan cara ${usedPrefix+command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
  if (isAlreadyResponList(m.chat, teks1, db_respon_list)) return m.reply(`List respon dengan key : *${teks1}* sudah ada di group ini.`)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) {
  await addResponList(m.chat, teks1, teks2, false, '-', db_respon_list)
  m.reply(`Berhasil menambah List menu : *${teks1}*`)
    } else if (/image/g.test(mime)) {
        let img = await q.download()
        let out = await uploadImage(img)
        await addResponList(m.chat, teks1, teks2, true, out, db_respon_list)
        m.reply(`Berhasil menambah List menu : *${teks1}*`)
    } else {
        await addResponList(m.chat, teks1, teks2, false, '-', db_respon_list)
        m.reply(`Berhasil menambah List menu : *${teks1}*`)
  }
}
handler.help = ['addlist']
handler.tags = ['store']
handler.command = ['addlist']

handler.admin = true
handler.group = true

module.exports = handler