const { komikuId } = require("@xct007/frieren-scraper")
const fetch = require("node-fetch")
const axios = require("axios")
const PDFDocument = require("pdfkit")
const { extractImageThumb } = require("@adiwajshing/baileys")

let handler = async(m, { conn, usedPrefix, command, text }) => {
    if (!text) return m.reply(`Masukan link atau title komiku\n\nContoh :\n*${usedPrefix + command} Oshi No Ko*\n*${usedPrefix + command} https://komiku.id/manga/oshi-no-ko/*`)
    if (/komiku.id\/manga/i.test(text)) {
        let { title, metadata, description, chapters } = await komikuId.detail(text)
        let image = await komikuId.search(title)
        let caption = `
❃ Title : ${title}
❃ Chapter : ${metadata.awal} - ${metadata.terbaru}
❃ Status : ${metadata.status}
❃ Jenis : ${metadata.jenis_komik}
❃ Cerita : ${metadata.konsep_cerita}
❃ Komikus : ${metadata.komikus}
❃ Pembaca : ${metadata.umur_pembaca}

❃ Description : ${description}
`.trim()
        let chapterlist = chapters.map((v) => {
            return `
❏ Chapter : ${v.chapter}
▧ URL : ${v.url}
`.trim()
        }).join('\n\n')
        let msg = await conn.sendFile(m.chat, image[0].thumbnail, 'komiku.jpeg', caption, m)
        await delay(2000)
        conn.reply(m.chat, chapterlist, msg)
    } else if (/komiku.id\/ch/i.test(text)) {
        m.reply(wait)
        let result = await komikuId.detail(text)
        let buffer = await (await fetch(result.images[0])).buffer()
        let jpegThumbnail = await extractImageThumb(buffer)
        let imagepdf = await toPDF(result.images)
        await conn.sendMessage(m.chat, { document: imagepdf, jpegThumbnail, fileName: result.title + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
    } else {
        let data = await komikuId.search(text)
        let caption = data.map((v, i) => {
            return `
_*${i + 1}. ${v.title}*_
❃ Chapter : ${v.terbaru.split(' ')[1]}
❃ Update : ${v.description.split('lalu')[0]}lalu.
❃ URL : ${v.url}
`.trim()
        }).join('\n\n')
        conn.reply(m.chat, caption, m)
    }
}
handler.help = ['komiku']
handler.tags = ['anime']
handler.command = /^komiku$/i
handler.limit = true

module.exports = handler

function toPDF(images, opt = {}) {
   return new Promise(async (resolve, reject) => {
        if (!Array.isArray(images)) images = [images]
        let buffs = [], doc = new PDFDocument({
            margin: 0, size: 'A4'
        })
        for (let x = 0; x < images.length; x++) {
            if (/.webp|.gif/.test(images[x])) continue
            let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
            doc.image(data, 0, 0, {
                fit: [595.28, 841.89], align: 'center', valign: 'center'
            })
            if (images.length != x + 1) doc.addPage()
        }
        doc.on('data', (chunk) => buffs.push(chunk))
        doc.on('end', () => resolve(Buffer.concat(buffs)))
        doc.on('error', (err) => reject(err))
        doc.end()
    })
}

const delay = time => new Promise(res => setTimeout(res, time))