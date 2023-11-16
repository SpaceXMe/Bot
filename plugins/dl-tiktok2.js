var api = require("api-dylux");

async function handler(m, {
conn,
text,
usedPrefix,
command
}) {
 if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} https://vt.tiktok.com/ZSL5Jh3ed/`
 await m.reply(wait)
 api.tiktok(text)
 .then(res => {
 var hasil = `Nickname: *${res.nickname}*\nUnique: *${res.unique_id}*\nDownload: *${res.download_count}*\nDuration: *${res.duration}*\n\n*Description*: ${res.description}`
 conn.sendFile(m.chat, res.hdplay, '', hasil, m)
 })
}

handler.help = ['tiktok2']
handler.tags = ['downloader']
handler.command = /^((tt|tiktok)(dl|down(load)?)?2)$/i

module.exports = handler