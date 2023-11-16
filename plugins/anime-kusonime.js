var { kusoNime } = require("../lib/scrape")

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan nama anime!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Tonikaku Kawai*`)
  m.react(wmoji)
  var bagaz = await kusoNime(text)
  if (!bagaz.result) { 
    m.reply(`404 Not Found : Anime *${text}* tifak ditemukan!`)
  } else {
  
    const { title, thumb, views, genre, seasons, producers, type, status, rating, duration, release, desc, url } = bagaz.result;
    
    var str = `
▣ *Title:* ${title}
▣ *Views:* ${views}
▣ *Genre:* ${genre}
▣ *Season:* ${seasons}
▣ *Producer:* ${producers}
▣ *Type:* ${type}
▣ *Status:* ${status}
▣ *Rating:* ${rating}
▣ *Duration:* ${duration}
▣ *Release:* ${release}
▣ *Desc:* ${desc}

▣ *Url:* ${url}
`.trim()

    conn.sendMessage(m.chat, {
    text: str,
    contextInfo: {
    externalAdReply: {
    title: title,
    body: wm,
    thumbnailUrl: thumb,
    sourceUrl: url,
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, { quoted: m })
  }
}

handler.help = ['kusonime']
handler.tags = ['anime', 'internet']
handler.command = /^kusonime$/i

handler.limit = true

module.exports = handler