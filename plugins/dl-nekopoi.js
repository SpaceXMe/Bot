const axios = require('axios')

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukkan link!\n\nContoh: *${usedPrefix + command} https://nekopoi.care/xxxx*`)
  m.react('⬇️')
  try {
    const me = await axios.get(`https://api.lolhuman.xyz/api/nekopoi?apikey=${global.lolhuman}&url=${encodeURIComponent(text)}`)
    let res = me.data.result
    const { thumbnail, sinopsis, genre, title, producers, duration, link } = res
    let url = '*Link:*\n'
    for (let quality in link) {
      const qualityLinks = link[quality];
      for (let source in qualityLinks) {
        url += `${source}: ${qualityLinks[source]}`
      }
    }
    let str = `
*Judul:* ${title}
*Produser:* ${producers}
*Durasi:* ${duration}
*Genre:* ${genre && genre.length > 1 ? genre.join(', ') : genre ? genre : '-'}

*Sinopsis:*
${sinopsis}

${url}
`;
    conn.reply(m.chat, str, m, { contextInfo: { mentionedJid: conn.parseMention(str), externalAdReply: { title: 'Neko Download', body: wm2, sourceUrl: 'https://nekopoi.care', thumbnailUrl: thumbnail }}})
  } catch (e) {
    console.log(e)
    m.reply(danied)
  }
}
handler.help = ['nekodownload']
handler.tags = ['downloader', 'premium']
handler.command = /^((neko(poi)?)(dl|down(load))?|(dl|down(load)?)(neko(poi)?))$/i
handler.premium = true

module.exports = handler