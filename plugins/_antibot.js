module.exports = {
  async before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return;
    let chat = global.db.data.chats[m.chat]
    let sender = global.db.data.chats[m.sender]
    let hapus = m.key.participant
    let bang = m.key.id
    if (chat.antiBot) {
      if (m.isBaileys && m.fromMe == false){
          if (isAdmin || !isBotAdmin){		  
          } else {
            m.reply(`*Bot lain terdeteksi*\n\nMaaf harus *Space* kick, karna admin mengaktifkan anti bot`)
      return await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
          } return true
      }
    }
    return true
  }
}