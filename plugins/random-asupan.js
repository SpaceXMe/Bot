let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.dannteam.com/api/asupan/video/random?apikey=DannTeam', 'asupan.mp4', '✅ Random Asupan', m)
}
handler.help = ['asupan']
handler.tags = ['random']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler