let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan judul anime!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} demon slayer*`)
  let thumb = 'https://telegra.ph/file/50cc19b454f22d2cdbd14.jpg'
  let res = await (await fetch(`https://api.nomisec07.site/api/animesearch?query=${text}`)).json();
  let str = '\n*List Anime*\n\n'
  for (let item of res.data) {
    let { title, score, type, url } = item
    str += `❑ *Title:* ${title}\n`
    str += `❑ *Score:* ${score}\n`
    str += `❑ *Type:* ${type}\n`
    str += `❑ *Link:* ${url}\n\n`
  }
  conn.reply(m.chat, str.trim(), m, { contextInfo: { externalAdReply: { title: `${text.replace(/^\w/, (c) => c.toUpperCase())}`, body: wm2, sourceUrl: sgc, thumbnailUrl: thumb, mediaType: 2 }}})
}
handler.help = ['animesearch']
handler.tags = ['anime']
handler.command = /^((s|search)anime|anime(s|search))$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}