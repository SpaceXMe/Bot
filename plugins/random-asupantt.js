var fetch = require("node-fetch");
var limit = 5

async function handler(m, {
conn,
text,
usedPrefix,
command
}) {
 if (!text) {
 throw `Masukkan Username!\n\nContoh: *${usedPrefix + command} vicidior9051*`
 }
 var dann = await fetch(`https://api.nomisec07.site/api/asupan?username=${text}`)
 var res = await dann.json()
 var hasil = `• *INFORMATION*
◦ Username: *${res.data.author.username}*
◦ Nickname: *${res.data.author.nickname}*
◦ Unique: *${res.data.author.unique_id}*

◦ Caption: *${res.data.caption}*

• *STATS*
◦ Play Count: *${res.data.stats.play_count}*
◦ Digg Count: *${res.data.stats.digg_count}*
◦ Share Count: *${res.data.stats.share_count}*
◦ Comment Count: *${res.data.stats.comment_count}*

_Video dan Audio sedang dikirim..._
`

var title = res.data.caption
var originals = res.data.music.title
var preview = res.data.music.play
var thumbs = res.data.music.cover
var thumbnail = res.data.author.avatar

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
  await conn.sendFile(m.chat, res.data.video, '', wm, m)
let doc = { 
  audio: 
  { 
    url: preview
}, 
mimetype: 'audio/mp4', fileName: `${originals}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: preview,
title: originals,
body: wm,
sourceUrl: preview,
thumbnail: await(await conn.getFile(thumbs)).data                                                                     
      }
    }
  }
 await conn.sendMessage(m.chat, doc, m)
}

handler.help = ['asupantt']
handler.tags = ['random']
handler.command = /^(asupan(tt|tiktok))$/i
handler.premium = true
handler.limit = true
handler.private = false

module.exports = handler