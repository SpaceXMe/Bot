var { xnxxdl } = require('../lib/scrape')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return conn.fakeReply(m.chat, 'Uhm.. link nya??', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://xnxx.com*`, m.sender)
	m.react(wmoji)
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		var res = await xnxxdl(text)
		const { title, URL, files, duration, image, info } = res.result;
		let str = `
*Title*: ${title}
*Duration*: ${clockString(duration)}
*Info*: ${info}
`.trim()
    conn.sendFile(m.chat, files.high, 'xnxx.mp4', str, m)
	} catch (e) {
		console.log(e)
		m.reply(danied)
	}
}
handler.help = ["xnxxdl <url>"]
handler.tags = ['downloader']
handler.command = /^(xnxxdl|dlxnxx)$/i
handler.register = true
handler.premium = true
handler.private = true

module.exports = handler

function clockString(ms) {
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60)
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1) % 60
  return m + ':' + (s < 10 ? "0" : "") + s
}