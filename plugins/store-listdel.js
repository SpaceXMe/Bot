const fs = require('fs')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/addlist.js');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, `Gunakan dengan cara *${usedPrefix+command} Nama Item*\n\nContoh:\n\n*${usedPrefix+command} namalist*`, '6281578150000@s.whatsapp.net', `Ketik *#list* untuk melihat list`)
  const db_respon_list = JSON.parse(fs.readFileSync('./database/store.json'));
  if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponList(m.chat, text, db_respon_list)) return m.reply(`List Item dengan Nama *${text}* tidak ada di database!`)
            await delResponList(m.chat, text, db_respon_list)
            m.reply(`Sukses delete list message dengan key *${text}*`)
}
handler.help = ['dellist']
handler.tags = ['store']
handler.command = /^(dellist|listdel)$/i

handler.admin = true
handler.group = true

module.exports = handler