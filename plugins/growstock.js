let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Query!\n\nContoh: ${usedPrefix + command} magplant`
	let dann = await fetch(`https://api.lolhuman.xyz/api/growstocks?apikey=${lolhuman}&query=${text}`)
	let res = await dann.json()
	let hasil = `Nama: ${res.result.name}\nDeskripsi: ${res.result.desc}\nPrice: ${res.result.price_status}\nDemand = ${res.result.demand_status}\nEdited: ${res.result.edited}\n\nSource: ${res.result.source}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=growtopia%20${text}`
	conn.sendMessage(m.chat, {
		text: hasil,
		contextInfo: {
		externalAdReply: {
		title: namebot,
		body: wm,
		thumbnailUrl: thumb,
		sourceUrl: sig,
		mediaType: 1,
		renderLargerThumbnail: true
		}}})
}

handler.help = ['growstock']
handler.tags = ['internet']
handler.command = /^(growstock)$/i

module.exports = handler