const { addExif, sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, args }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Caption/reply media!'
  let img = await q.download()
  if (!img) throw 'Conversion Failed'
  let stiker = false
       let stick = args.join(" ").split("|");
       let pack = stick[0] !== "" ? stick[0] : packname;
       let auth = typeof stick[1] !== "undefined" ? stick[1] : author;
  try {
    if (/image|video|webp/.test(mime)) {
      stiker = await addExif(img, pack, auth)
      //if (/video|image/.test(mime)) stiker = await sticker(img, false, pack, auth)
    } else return m.reply(`Mime *${mime}* tidak support!`)
  } catch (e) {
    console.error(e)
    if (Buffer.isBuffer(e)) stiker = e
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m)
    else throw 'Conversion Failed'
  }
}
handler.help = ['take <packname>|<autor>']
handler.tags = ['sticker']
handler.command = ['take', 'wm'] 

module.exports = handler