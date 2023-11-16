let { sticker } = require('../lib/sticker.js')
let axios = require('axios')
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Masukkan teks', m)
    //if (text.length > 30) return conn.reply(m.chat, 'Maksimal 30 Teks!', m)
    await conn.reply(m.chat, `${wait}`, m)
    
    try {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

    const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#FFFFFF",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": m.name,
          "photo": {
            "url": pp
          }
        },
        "text": text,
        "replyMessage": {}
      }]
    }

    const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const buffer = Buffer.from(json.data.result.image, 'base64')
    let stiker = await sticker(buffer, false, global.packname, global.author)

    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
  } catch (error) {
    console.error(error)
    conn.reply(m.chat, 'Maaf kak fitur ini sedang error...', m)
  }
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc|quoted|quotly)$/i

module.exports = handler

const getBuffer = async (url, options) => {
        try {
            options ? options : {}
            const res = await axios({
                method: "get",
                url,
                headers: {
                    'DNT': 1,
                    'Upgrade-Insecure-Request': 1
                },
                ...options,
                responseType: 'arraybuffer'
            })
            return res.data
        } catch (e) {
            console.log(`Error : ${e}`)
        }
}