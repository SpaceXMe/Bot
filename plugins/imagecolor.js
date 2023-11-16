let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `Masukkan Warna!\n\nContoh: ${usedPrefix + command} FFF000`
if (text.includes('#') || text.includes('#')) throw `Masukkan kode warna!\n\nContoh: ${usedPrefix + command} FFF000`
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .imagecolor'
await m.reply(wait)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/imagecolor?apikey=${global.lolhuman}&img=${url}&hex=${text}`)).buffer()
await conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['imagecolor']
handler.tags = ['maker']
handler.command = /^(imagecolor)$/i
handler.limit = true

module.exports = handler