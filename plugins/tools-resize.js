// Dann Official


let jimp = require("jimp")
let uploadImage = require("../lib/uploadImage.js")
let uploadFile = require("../lib/uploadFile.js")

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!(towidth && toheight)) throw `Reply atau caption media dengan format:\n*${usedPrefix}resize <width> <height>*\n\nContoh:\n*${usedPrefix}resize 500 300*`
	if (!towidth) throw 'Size width?'
	if (!toheight) throw 'Size height?'
	await m.reply(wait)

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "Where the media?"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Mime *${mime}* tidak didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `- *Compress Resize* -

*• BEFORE*
> Width : ${size.before.width}
> Height : ${size.before.height}

*• AFTER*
> Width : ${size.after.width}
> Hegiht : ${size.after.height}

*• LINK*
> Original : ${link}
> Compress : ${linkcompres}`, m)
}
handler.help = ['resize']
handler.tags = ['tools']
handler.command = /^(resize)$/i

module.exports = handler

async function resize(image, width, height) {
       let oyy = await jimp.read(image)
       let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }