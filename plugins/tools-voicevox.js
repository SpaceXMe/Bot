let { fetchJson } = require('../lib/myfunc')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let str = m.quoted && m.quoted.text ? m.quoted.text : text
  if (!str) throw 'Masukkan teks!'
  try {
    conn.sendPresenceUpdate('recording', m.chat)
    let voice = await fetchJson(`https://xzn.wtf/api/tts-anime?text=${encodeURIComponent(str)}&lang=&voice=hu_tao&speed=0.6&symbol=~&apikey=bgzz`)
    conn.sendFile(m.chat, voice.data.url, 'voicevox.mp3', null, m, true)
  } catch (e) {
    console.log(e)
    m.reply(e?.message)
  }
}

handler.help = ['voicevox']
handler.tags = ['audio', 'tools']
handler.command = /^(voicevox|animetts|ttsanime|speak)$/i

handler.limit = 5

module.exports = handler