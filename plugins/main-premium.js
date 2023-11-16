let { msToDate } = require('../lib/myfunc')

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  if (user.premium == false) {
    const lll = await conn.sendMessage(m.chat, { text: 'Ingin upgrade ke *PREMIUM*?'}, { quoted: m })
    const bagaz = `Silahkan hubungi owner\nwa.me/${global.owner[0]}`
    await conn.delay(3000)
    conn.relayMessage(m.chat, {
      protocolMessage: {
        type: 14,
        key: lll,
        editedMessage: {
          conversation: bagaz
        }
      }
    }, { quoted: m })
  } else {
    m.reply(`Sisa waktu premium kamu\n\n${user.premiumDate == -1 ? 'Unlimited' : msToDate(user.premiumDate - Date.now())}`)
  }
}

handler.help = ['premium']
handler.tags = ['main', 'xp']
handler.command = /^premium(chec?k)?$/i

handler.exp = 0
handler.limit = false
handler.premium = false

module.exports = handler