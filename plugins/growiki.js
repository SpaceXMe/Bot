let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan item growtopia\n\nContoh: ${usedPrefix + command} magplant`
	let dann = await fetch(`https://api.lolhuman.xyz/api/growiki?apikey=${global.lolhuman}&query=${text}`)
	let res = await dann.json()
	let hasil = `Name: ${res.result.name}\nDeskripsi: ${res.result.desc}\nRarity: ${res.result.rarity}\nRecipe: ${res.result.recipe}\nSplice: ${res.result.splice}\n\nInfo: ${res.result.info}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=${global.lolhuman}&query=growtopia%20${text}`
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

handler.help = ['growiki']
handler.tags = ['internet']
handler.command = /^(growiki)$/i

module.exports = handler