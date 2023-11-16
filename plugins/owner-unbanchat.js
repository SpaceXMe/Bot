let handler = async (m, { conn, args, isOwner, isAdmin }) => {
  let chat = args[0] ? args[0] : m.chat
  let namegc = await conn.getName(chat)
  var own = nomorown + '@s.whatsapp.net';
  const fvn = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
      audioMessage: {
        mimetype: "audio/ogg; codecs=opus",
        seconds: "99992837293",
        ptt: true
      }
    }
  }
  if (isOwner || isAdmin) {
    global.db.data.chats[chat].isBanned = false
    conn.reply(chat, `*${conn.user.name}* telah diaktifkan kembali`, fvn)
    conn.reply(own, `Sukses mengaktifkan Bot di grup *${namegc}*`, m)
  } else return m.reply('Ngapain -_-||')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^(unbanchat|unbannd)$/i
handler.fail = null

module.exports = handler