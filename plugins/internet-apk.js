let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan query!\n\nContoh: *${usedPrefix + command} Telegram*`
  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m })
  try {
    var { data } = await axios.get(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
    var res = data.respon;
    let str = res.map(v => `• Title: ${v.title}\n• Link: ${v.link}\n•${v.update.split('\n').join(' ')}`).join('\n\n•====================•\n\n')
    conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: str
        }
      }
    }, { quoted: m })
  } catch (error) {
    console.error(error)
    m.reply('Error : Internal server down!')
  }
}

handler.help = ['apk <query>']
handler.tags = ['internet', 'tools']
handler.command = /^apk(s?earch)?$/i

module.exports = handler