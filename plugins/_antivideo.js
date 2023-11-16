let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return;
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isVideo = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiVideo && isVideo) {
    if(isVideo === "videoMessage") {
        if (isAdmin || !isBotAdmin) {
        } else {
          m.reply(`*Video terdeteksi!*\n\nMaaf, video tersebut harus *Space* hapus karena Admin/Owner mengaktifkan anti video untuk chat ini`)
    return this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } return !0
    }
  }
  return !0
}

module.exports = handler