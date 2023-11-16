var fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `Masukkan URL!\n\nContoh: *${usedPrefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA*`;
 await conn.sendMessage(m.chat, { react: { text: '🎧', key: m.key }});
 var dann = await fetch(`https://api.nomisec07.site/api/spotify?url=${text}`);
 var res = await dann.json();
 var hasil = `• Judul: *${res.data.title}*
• Artis: *${res.data.artist.name}*
• Durasi: *${res.data.duration}*
• Terpopular: *${res.data.artist.uri}*

• ID: *${res.data.artist.id}*
_Audio sedang dikirim..._
`
 var title = res.data.title
 var thumbnail = res.data.thumbnail
 var preview = res.data.preview
 var link = res.data.url
conn.sendMessage(m.chat, {
text: hasil,
contextInfo: {
externalAdReply: {
title: title,
body: wm,
thumbnailUrl: thumbnail,
sourceUrl: preview,
mediaType: 1,
renderLargerThumbnail: true
}}})
let doc = { 
  audio: 
  { 
    url: link
}, 
mimetype: 'audio/mpeg', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: preview,
title: title,
body: wm,
sourceUrl: preview,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
      }
    }
  }
 conn.sendMessage(m.chat, doc, m)
}
handler.help = ['spotify']
handler.tags = ['downloader']
handler.command = /^(spotify|spotifydl|dlspotify)$/i
handler.limit = true

module.exports = handler