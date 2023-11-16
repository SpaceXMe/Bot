let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let dann = '6283137550315@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  if (m.isGroup) {
    let str = `
Mau sewa bot? silahkan chat owner\n*${conn.user.name}*

╭╼━╍┄┄┄•『 *List Price* 』
┊⸙ *sᴇᴡᴀʙᴏᴛ 5 ʜᴀʀɪ (IDR 2k)*
┊⸙ *sᴇᴡᴀʙᴏᴛ 10 ʜᴀʀɪ (IDR 5k)*
┊⸙ *sᴇᴡᴀʙᴏᴛ 15 ʜᴀʀɪ (IDR 7k)*
┊⸙ *sᴇᴡᴀʙᴏᴛ 1 ʙᴜʟᴀɴ (IDR 10k)*
╰╍╌┄┄┄┉━┄┄┄┄┄──╼✗

Jika ada pertanyaan silahkan hubungi owner dibawah ini 👇

Owner: https://wa.me/+${owner[0]}
`;
    conn.sendMessage(m.chat, {
    text: str,
    contextInfo: {
    externalAdReply: {
    showAdAttribution: true,
    title: 'SPACE BLITZ 🚀',
    body: tanggal(new Date()),
    sourceUrl: sig,
    thumbnailUrl: thumb,
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, { quoted: m })
    conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  } else {
    let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
    title: `${wm}`,
    description: `Mau sewa bot? silahkan chat owner\n*${conn.user.name}*

╭╼━╍┄┄┄•『 *List Price* 』
┊⸙ *sᴇᴡᴀʙᴏᴛ 5 ʜᴀʀɪ (IDR 2k)*
┊⸙ *sᴇᴡᴀʙᴏᴛ 10 ʜᴀʀɪ (IDR 5k)*
┊⸙ *sᴇᴡᴀʙᴏᴛ 15 ʜᴀʀɪ (IDR 7k)*
┊⸙ *sᴇᴡᴀʙᴏᴛ 1 ʙᴜʟᴀɴ (IDR 10k)*
╰╍╌┄┄┄┉━┄┄┄┄┄──╼✗

Jika ada pertanyaan silahkan hubungi owner dibawah ini 👇

Owner: https://wa.me/+${owner[0]}
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Click to Order',
  products:[{productId:'5700955953337795'}]}],
  headerImage: { productId: '5700955953337795',
  jpegThumbnail: baper },
  businessOwnerJid: `6282225201437@s.whatsapp.net`
  },
  footerText: '© Space-MD',
  }}, {})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  }
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa(bot)?)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const tanggal = (numer, locale = 'id') => {
  return numer.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}