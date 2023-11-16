module.exports = {
    async all(m) {
        if (!m.isGroup) return 
        let chats = global.db.data.chats[m.chat]
        if (!chats.expired) return !0
        if (+new Date() > chats.expired) {
        	const data = global.owner.filter(([id, isCreator]) => id && isCreator)
            await this.fakeReply(m.chat, `Maaf sudah waktunya *${this.user.name}* keluar group karena masa berlakunya udah habis`, '6282225201437@s.whatsapp.net', '🗿', 'status@broadcast')
            this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
            global.db.data.chats[m.chat].expired = 0
            await this.delay(5000)
            this.reply(m.chat, 'Byee...👋🥲', null)
            this.groupLeave(m.chat)
        }
    }
}