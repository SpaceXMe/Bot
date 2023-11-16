const fs = require('fs')
const fetch = require('node-fetch')

let handler = async (m, { text, command }) => {
  let user = global.db.data.users[m.sender]
  //let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => global.thumbnail)
  let prefi = pickRandom(preff)
  let gambar = pickRandom(hwaifu)
  //let thumb = pickRandom([pp, gambar])
  user.afk = + new Date
  user.afkReason = text
  let bgzz = `\n${prefi} @${m.sender.split('@')[0]} telah ${command.toUpperCase()}\n${prefi} Alasan${text ? ': ' + text : ': Tidak ada alasan'}\n`
  const fkontol = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {})}, message: { 'contactMessage': { 'displayName': await conn.getName(m.sender), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${('@')[0]}\nitem1-X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'), sendEphemeral: true }}}
  conn.reply(m.chat, bgzz, fkontol, { contextInfo: { mentionedJid: conn.parseMention(bgzz), externalAdReply: { showAdAttribution: true, title:`${wm2}`, body: 'Simple Bot CJS', sourceUrl: fake, thumbnailUrl: gambar }}})
}
handler.help = ['afk <alasan>']
handler.tags = ['main']
handler.command = /^(afk|offline)$/i
handler.exp = 0

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let pict = [
'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg',
global.thumb,
global.thumbnail
]