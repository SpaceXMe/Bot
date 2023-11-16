var api = require('../lib/myfunc')

var handler = async (m, { conn, text, usedPrefix, command }) => {
 
  if (!text) throw ` Gunakan link Facebook!\n\n📌 Example:\n*${usedPrefix + command}* https://fb.watch/7B5KBCgdO3`
  var response = await api.fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${global.lolhuman}&url=${text}`)
  
  for (let media of response.result) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    conn.sendFile(m.chat, media, '', wm, m)
  }
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook2|fb2)(downloder|dl)?)$/i
module.exports = handler