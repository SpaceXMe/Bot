let handler = async (m, { conn, text }) => {
  conn.sendFile(m.chat, global.API('lolhuman', '/api/meme/memeindo', {}, 'apikey'), 'meme.jpg', 'Krins bat', m)
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme|memeindo)$/i
handler.limit = true

module.exports = handler