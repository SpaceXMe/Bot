var fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukkan judul Anime!\nContoh: *${usedPrefix + command} Naruto*`)
  m.react(wmoji)
  try {
    var animek = await (await fetch(`https://mfarels.my.id/api/anime?q=${text}`)).json()
    const { gambar, judul, deskripsi, nama_anime, rating_umur, nsfw, avg_rating, rank_by_rating, rank_by_popularitas, jumlah_episode } = animek
    let caption = `
• *Title:* ${judul}
• *Anime Title:* ${nama_anime}
• *Age Ratings:* ${rating_umur}
• *Nsfw:* ${nsfw}
• *Avg Ratings:* ${avg_rating}%
• *Rank Popularity:* ${rank_by_rating}
• *Popularity:* ${rank_by_popularitas}
• *Episode:* ${jumlah_episode}
`.trim()

    conn.sendFile(m.chat, gambar, 'gambar.png', caption, m)
  } catch (e) {
    m.reply('Terjadi error')
  }
}

handler.help = ['infoanime']
handler.tags = ['anime']
handler.command = /^(infoanime|animeinfo)$/i
handler.limit = true

module.exports = handler