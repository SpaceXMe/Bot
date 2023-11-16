const { WAMessageStubType } = require('@adiwajshing/baileys')

module.exports = {
  async before(m) {
    let name = await conn.getName(m.sender)
    let chat = global.db.data.chats[m.chat]
    if (chat.detect && !chat.isBanned) {
      const fkontak = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(m.sender)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    	if (!m.messageStubType || !m.isGroup) return;
    	let edtr = `@${m.sender.split`@`[0]}`
    	if (m.messageStubType == 21) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} mengubah Subject Grup menjadi :\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 22) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} telah mengubah icon grup.`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} *mereset* link grup!\n\n`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 24) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} mengubah deskripsi grup.\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 25) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} telah mengatur agar *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 26) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} telah *${m.messageStubParameters[0] == 'on' ? 'menutup' : 'membuka'}* grup!\nSekarang ${m.messageStubParameters[0] == 'on' ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 29) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} telah menjadikan @${m.messageStubParameters[0].split`@`[0]} sebagai admin.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
    	} else if (m.messageStubType == 30) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} telah memberhentikan @${m.messageStubParameters[0].split`@`[0]} dari admin.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
    	} else if (m.messageStubType == 72) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
    	} else if (m.messageStubType == 123) {
    		await this.sendMessage(m.chat, { text: `Terdektesi ${edtr} *menonaktifkan* pesan sementara.`, mentions: [m.sender] }, { quoted: fkontak })
    	} else {
    		console.log({
    			messageStubType: m.messageStubType,
    			messageStubParameters: m.messageStubParameters,
    			type: WAMessageStubType[m.messageStubType],
    		});
    	}
    }
    return !0
  }
}