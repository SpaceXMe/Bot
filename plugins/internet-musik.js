let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Url!\n\nContoh: ${usedPrefix + command} https://files.catbox.moe/eo67sc`
	let dann = await fetch(`https://api.lolhuman.xyz/api/musicsearch?apikey=${global.lolhuman}&file=${text}`)
	let res = await dann.json()
	let hasil = `Judul: ${res.result.title}\nAlbum: ${res.result.album}\nArtis: ${res.result.artists}\nDurasi: ${res.result.duration}\nRilis: ${res.result.release}\nGenre: ${res.result.genres}`
	await conn.reply(m.chat, hasil, m)
}
handler.help = ['musik']
handler.tags = ['audio', 'internet']
handler.command = /^(musik|music)$/i

module.exports = handler