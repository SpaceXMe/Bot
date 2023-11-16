let handler = async (m, { conn, args, participants, isOwner, isAdmin }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
  var own = nomorown + '@s.whatsapp.net'
  const fvn = {
    key: {
      fromMe: false,
      participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: m.chat } : {})
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
    let gp = args[0] ? args[0] : m.chat
    if (global.db.data.chats[gp] == 'undefined') return m.reply('Gada di database banh')
    global.db.data.chats[gp].isBanned = true
    conn.reply(gp, `*${conn.user.name}* telah memasuki mode silent`, fvn)
    let namagc = await conn.getName(gp)
    conn.reply(own, `Sukses membanned chat di grup *${namagc}*`, m)
  // } else m.reply('Ada nomor host disini...')
  } else return m.reply('Kamu siapa -_-||')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(banchat|bnc)$/i
handler.fail = null

module.exports = handler