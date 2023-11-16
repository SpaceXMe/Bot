let fs = require('fs')
let fetch = require('node-fetch')
let handler = async(m, { conn, text, participants }) => {
text = m.quoted && m.quoted.text ? m.quoted.text : text ? text : 'Anda telah dikeluarkan'
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
		  "displayName": `${await conn.getName(m.sender)}`,
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

    conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: fkontak })
  }
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => v + ' <teks>')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag|h)$/i

handler.group = true
handler.admin = true

module.exports = handler