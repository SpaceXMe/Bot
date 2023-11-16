let handler = async(m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.chat)
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/3ff06801a60c23890b4e7.jpg')
let { data } = await conn.getFile(await(await require('node-fetch')(pp)).buffer())

let krtu = `
*「 INTRO CARD 」* 

*NAMA :* 
*GENDER :* 
*UMUR :* 
*HOBBY :* 
*KELAS :* 
*ASAL :* 
*STATUS :* 
`;
conn.reply(m.chat, krtu, null, { contextInfo: { externalAdReply: { title: name, body: wm, tumbnailUrl: pp, sourceUrl: sgc, thumbnail: data }}})
}
handler.help = ['introcard']
handler.tags = ['group']
handler.command = /^(intro|introcard)$/i

handler.group = true

module.exports = handler