let handler = async (m, { conn, text, usedPrefix, command }) => {
  let teks = m.quoted && m.quoted.text ? m.quoted.text : text
  if (!teks) throw `Tulis/reply teks!\n\nContoh: *${usedPrefix + command} Apa kabar*`
  await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": teks,
    "voice": "id_001"
  }).then(({ data }) => {
    conn.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4", ptt: true }, { quoted: m })
  })
}

handler.help = ['tts']
handler.tags = ['tools']
handler.command = /^g?tts$/i

handler.limit = true

module.exports = handler