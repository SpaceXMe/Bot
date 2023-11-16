let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: *${usedPrefix + command} https://www.facebook.com/xxx*`
  m.react(rwait)
  try {
    await fetch(`https://vihangayt.me/download/fb?url=${text}`).then(async (res) => await res.json()).then((a) => {
      let { quality, url } = a.data.download[0]
      conn.sendFile(m.chat, url, 'fb', '*Quality:* ' + quality, m)
    })
  } catch (e) {
    console.log(e)
    m.reply(e?.message)
  }
}

handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^((fb|facebook)(dl|down(load(er)?)?)?)$/i

handler.limit = true

module.exports = handler