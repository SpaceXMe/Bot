/* Mengubah Gambar
  * Bagzz
  * @itzmebagz
*/

var axios = require('axios')
var uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply(`Masukkan style!

*ʟɪsᴛ sᴛʏʟᴇ*:
• anime
• pixar
• jojo
• retro
• spirited
• cyberpunk
• synthwave
• horror
• zombie
• rdr
• pixel
• thunder
• onepiece
• firebender
• gtav
• aether
• impasto
• barbie
• airbender
• block
• heroes
• chocolate
• avatar
• tatoo
• rickmorty
• gothic
• hell
• pastel
• papercut
• pokemon
• luminous`)
	m.react(rwait)
	let prompt = text.toLowerCase();
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (!mime) return m.reply(`Reply atau caption image dengan command *${usedPrefix + command} ${text}*`)
	try {
		if (!/image/g.test(mime)) throw 'Hanya support mime image!'
		let img = await q.download()
		let bgas = await uploadImage(img)
		
		const payloads = {
		  "init_image": bgas,
		  "style": prompt,
		  "image_num": 1,
		  "width": 648,
		  "height": 864
		};
		
		const { data } = await axios.request({
			baseURL: "https://api.itsrose.life",
			url: "/image/turnMe",
			method: "POST",
			params: {
				apikey: `${global.rose}`,
			},
			data: payloads,
		}).catch((e) => e?.response);
		
		const { status, message, result } = data;
		
		if (!status) {
			m.reply(`${data.message}\n\n*ʟɪsᴛ sᴛʏʟᴇ*:\n${data.styles.map(v => '• ' + v).join('\n')}`)
		} else {
			const { images, metadata } = result;
			conn.sendMessage(m.chat, { image: { url: images }, caption: `Style: *${prompt.charAt(0).toUpperCase() + prompt.slice(1)}*` }, { quoted: m })
		}
	} catch (error) {
		console.error(error)
		m.reply('Terjadi error saat memproses request')
	}
};
handler.help = ['turnme'];
handler.tags = ['ai'];
handler.command = /^turnme$/i;

handler.limit = 10;

module.exports = handler;

/*
  * Follow Akun Instagram @itzmebagz
*/