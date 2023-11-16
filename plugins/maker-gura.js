let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text!'
  m.react('🦈')
  let res = `https://oni-chan.my.id/api/canvas/gura?text=${response[0]}&apikey=NztD-yiac-HhyC`
  conn.sendMessage(m.chat, { image: { url: res }, caption: wm }, { quoted: m })
}
handler.help = ['gura']
handler.tags = ['maker']
handler.command = /^(gura)$/i
handler.register = false

handler.limit = true

module.exports = handler