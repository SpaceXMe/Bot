let handler = async (m, { conn, text }) => {
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/attp?apikey=${global.lolhuman}&text=${text}`
  conn.sendFile(m.chat, res, 'dann.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^(attp)$/i
handler.limit = true
handler.premium = false

module.exports = handler