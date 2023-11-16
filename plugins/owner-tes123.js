let handler = async (m, { conn, participants, isOwner, isAdmin }) => {
  if (isOwner || isAdmin) {
    let me = participants.map(a => a.id)
    conn.sendFile(m.chat, './database/Sticker/emosi.webp', 'emosi.webp', '', null, null, { contextInfo: { mentionedJid: me }})
  } else return
}

handler.customPrefix = /^tes(123)?$/i
handler.command = new RegExp()

handler.fail = null

module.exports = handler