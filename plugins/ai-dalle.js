let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply(`Masukkan teks!\n\nExample\n*${usedPrefix+ command} snow house*`)
	await conn.sendPresenceUpdate('recording', m.chat)
	m.react(wmoji)
	let data = await (await fetch(`https://api.nomisec07.site/api/sdf?q=${text}`)).buffer()
	conn.sendMessage(m.chat, { image: data, caption: 'Nih kak, maaf agak burik 😅' }, { quoted: m })
}
handler.help = ['aidraw']
handler.tags = ['ai']
handler.command = /^(aidraw|dalle)$/i

handler.limit = true 

module.exports = handler