const canvacord = require("canvacord");
const fetch = require("node-fetch");
let uploadImage = require("../lib/uploadImage");

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let response = args.join(' ').split('|')
  let str = `Reply gambar dengan format\n*${usedPrefix+command} judul|author|album|durasi1|durasi2*\n\nContoh penggunaan\n*${usedPrefix+command} Party Favor|Billie Eilish|Album|10000|180727*`
  if (!args[0]) return m.reply(str)
  //if ((!response[0] || !response[1] || !response[2] || !response[3] || !response[4] || !response[5] || !response[6])) return m.reply(str)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Reply/camption gambar!`
    if (!/image/g.test(mime)) throw 'Hanya support mime image!'
  
  try {
    let bagzz = await q.download()
    let img = await uploadImage(bagzz)
    
    const card = await new canvacord.Spotify()
                  .setAuthor(response[1])
                  .setAlbum(response[2])
                  .setStartTimestamp(Date.now() - response[3])
                  .setEndTimestamp(Date.now() + response[4])
                  .setImage(img)
                  .setTitle(response[0]);
                  
              card.build()
              .then(data => {
                conn.sendMessage(m.chat, { image: data, caption: 'Result' }, { quoted: m })
              })
  } catch (e) {
    m.reply(str)
  }
}
handler.help = ['cardmusic (spotify)']
handler.tags = ['maker']
handler.command = /^((spotify)?card(m|musi(c|k))?)$/i

handler.limit = true

module.exports = handler