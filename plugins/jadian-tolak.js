const { areJidsSameUser } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag atau reply pesan orang yang mau ditembak`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `Hanya nomor!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Format salah!`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `Doi atau nomor tidak ditemukan, mungkin sudah keluar Atau bukan anggota grup Ini.`, m)
    if(user === m.sender) return conn.reply(m.chat, `Tidak bisa menolak dengan diri sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*Kamu itu gak diajak*`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat,`Maaf @${user.split('@')[0]} sedang tidak menembak kamu`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else{
      global.db.data.users[user].pasangan = ""
      conn.reply(m.chat,`Kamu baru saja menolak @${user.split('@')[0]}\n\nKasihan🗿`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tolak']
handler.tags = ['jadian']
handler.command = /^(tolak)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.limit = false
handler.fail = null
module.exports = handler
