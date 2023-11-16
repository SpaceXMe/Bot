let handler = async (m, { conn, text, participants, isAdmin }) => {
  if (isAdmin) return m.reply('Kamu admin loh bang 😐')
  let admin = getAdmin(participants)
  const ftext = {
    key: {
      fromMe: false,
      participant: m.sender, ...(m.chat ? { remoteJid: 'status@broadcast' } : {})
    },
    message: {
      "extendedTextMessage": {
        text: 'Gelut sini min',
        title: wm,
        jpegThumbnail: require('fs').readFileSync('./thumbnail.jpg')
      }
    }
  }
  ownernya = [m.sender]
  const mentionedJid = admin.concat(ownernya)
  conn.reply(m.chat, `Oi min\n@${m.sender.split('@')[0]} manggil kamu nih`, ftext, { contextInfo: { mentionedJid }})
}

handler.help = ['tagmin']
handler.tags = ['group']
handler.command = /^((tag)?(admin|min))$/i

handler.group = true

module.exports = handler

const getAdmin = (participants) => {
  let admin = []
  for (let min of participants) {
    min.admin === 'admin' ? admin.push(min.id) : ''
    min.admin === 'superadmin' ? admin.push(min.id) : ''
  }
  return admin
}