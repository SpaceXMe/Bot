let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/kayes?apikey=e6acac24b9', 'asupan.mp4', 'Nih kak\n2023 © Dann-MD', m)
}
handler.help = ['kayes']
handler.tags = ['random']

handler.command = /^(kayes)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler