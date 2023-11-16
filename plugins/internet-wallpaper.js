let fs = require('fs')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`*ᴍᴀsᴜᴋᴋᴀɴ ɴᴀᴍᴀ ᴡᴀʟʟᴘᴀᴘᴇʀ!*\n*ᴇxᴀᴍᴘʟᴇ: ${usedPrefix}ᴡᴀʟʟᴘᴀᴘᴇʀ ᴘɪxᴇʟ*`)
  m.react(rwait)
  let bgzz = await fetch(`https://api.lolhuman.xyz/api/wallpaper?apikey=${global.lolhuman}&query=${text}`)
  if (!bgzz.ok) throw `Wallpaper dengan key *${text}* tidak ditemukan!`
  conn.sendMessage(m.chat, { image: bgzz, caption: `Pencarian dari: *${text}*` }, { quoted: m })
}
handler.help = ['wallpaper']
handler.tags = ['internet']
handler.command = /^(wallq|wallpaper)$/i

module.exports = handler