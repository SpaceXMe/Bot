const { sticker } = require("../lib/sticker")
const { webp2png } = require("../lib/webp2mp4")
let uploadImage = require('../lib/uploadImage')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukkan teks!\n\nContoh:\nTeks Atas: *${usedPrefix + command} teks1|n*\nTeks Bawah: *${usedPrefix + command} n|teks2*\nAtas Bawah: *${usedPrefix + command} teks1|teks2*\n\nNote: Gunakan *n* jika ingin mengosongkan teks atas atau teks bawah`)
  
  text = text.replace(/\?/g, "~q");
  text = text.replace(/&/g, "~a");
  text = text.replace(/%/g, "~p");
  text = text.replace(/#/g, "~h");
  text = text.replace(/\//g, "~s");
  text = text.replace(/\\/g, "~b");
  text = text.replace(/</g, "~l");
  text = text.replace(/>/g, "~g");
  text = text.replace(/\"/g, "''");

  var [teks1, teks2] = text.split(/[|,.&+]/)
  if (!teks2) {
    teks2 = teks1
    teks1 = ' '
  }
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  m.react(rwait)
  try {
    if (/image|webp/g.test(mime)) {
      let media = await q.download()
      if (!/image|webp/g.test(mime)) throw `Hanya support image!`
      if (/webp/g.test(mime)) {
        let out = await webp2png(media)
        let meme = `https://api.memegen.link/images/custom/${(teks1 === 'n') ? ' ' : teks1}/${teks2 === 'n' ? ' ' : teks2}.png?background=${out}&font=impact`
        conn.sendStimg(m.chat, meme, m, { packname: global.packname, author: global.author })
      } else if (/image\/(jpe?g|png)/g.test(mime)) {
        let keluar = await uploadImage(media)
        let mim = `https://api.memegen.link/images/custom/${(teks1 === 'n') ? ' ' : teks1}/${teks2 === 'n' ? ' ' : teks2}.png?background=${keluar}&font=impact`
        conn.sendStimg(m.chat, mim, m, { paackname: global.packname, author: global.author })
      } else return m.reply('Hanya support image!')
    } else return m.reply('Hanya support image!')
  } catch (e) {
    console.log(e)
    m.reply('Error : Internal server down!')
  }
}

handler.help = ["smeme"]
handler.tags = ["sticker"]
handler.command = /^(s(tic?ker)?meme)$/i

handler.limit = false

module.exports = handler