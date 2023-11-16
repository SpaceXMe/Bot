var fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) {
 return m.reply(`Masukkan URL!\n\nContoh: *${usedPrefix + command} https://xxx*`);
 }
 try {
 var response = await fetch(text);
 var buffer = await response.buffer();
 await conn.sendFile(m.chat, buffer, '', wm, m)
 } catch (e) {
 console.log(e)
 conn.reply(nomorown + "@s.whatsapp.net", "Terjadi kesalahan:" + e, m)
 }
}

handler.command = handler.help = ['getmedia']
handler.tags = ['tools']
handler.limit = 5

module.exports = handler