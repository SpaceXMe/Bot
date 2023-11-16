let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0] && !args[1]) return conn.fakeReply(m.chat, 'Masukkan karakter dan teks!', '0@s.whatsapp.net', `Contoh:\n*${usedPrefix + command} <karakter> <teks>*\n*${usedPrefix + command} dimas apa kabar*`)
  await conn.sendPresenceUpdate('recording', m.chat)
  try {
    const url = global.API('skizo', '/api/tts-ai', { text: args.slice(1).join(' '), voice: args[0] }, 'apikey')
    const { data } = await axios.get(url)
    const { voice_list, base64 } = data
    if (!voice_list) {
      const buffer = Buffer.from(base64, "base64")
      if (buffer) conn.sendFile(m.chat, buffer, 'vn.mp3', null, m, true)
    } else {
      let str = voice_list.map((v, index) => `${index + 1}. ${v.voice.toLowerCase()}`).join('\n')
      m.reply(`List Karakter\n\n${str}`)
    }
  } catch (error) {
    console.error(error)
    m.reply('Terjadi error')
  }
}

handler.help = ['speech']
handler.tags = ['tools', 'fun']
handler.command = /^speech$/i
handler.limit = true

module.exports = handler