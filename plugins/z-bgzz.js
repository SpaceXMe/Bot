let handler = async (m, { conn }) => { 
  if (m.sender == '6282225201437@s.whatsapp.net') throw false
  await conn.sendFile(m.chat, './database/Sticker/bagaz.webp', 'sticker.webp', '', m)
}
handler.customPrefix = /@6282225201437/i
handler.command = new RegExp

module.exports = handler