let { mediafiredl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return conn.fakeReply(m.chat, 'Link nya?\n\nNote: link harus berakhiran dengan *"file"* agar media dapat diunduh', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://www.mediafire.com/file*`)
    m.react(rwait)
    try {
      let search = args[0].substring(0, args[0].indexOf('?'))
      if (search) {
      let res = await mediafiredl(search)
      let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
      let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}

\`\`\`Files are being sent...\`\`\`
`
      //if (filesizeH.split('MB')[0] >= 100) return m.reply(`Oops, ukuran file melebihi 100 MB!\nSilahkan download manual melalui link dibawah\n\n*Link:* ${url}`)
      m.reply(caption)
      await conn.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: ext }, { quoted: m })
      m.react(done)
      } else {
          let data = await mediafiredl(args[0])
          let { url, url2, filename, ext, aploud, filesize, filesizeH } = data
          let str = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}

\`\`\`Files are being sent...\`\`\`
`
          //if (filesizeH.split('MB')[0] >= 100) return m.reply(`Oops, ukuran file melebihi 100 MB!\nSilahkan download manual melalui link dibawah\n\n*Link:* ${url}`)
          m.reply(str)
          await conn.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: ext }, { quoted: m })
          m.react(done)
      }
    } catch (error) {
       console.error(error)
       conn.reply(owner[0] + '@s.whatsapp.net', 'Error : ' + error.message, m)
       m.reply('Terjadi error!\nMungkin link yang anda masukkan tidak sesuai format')
    }
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

module.exports = handler

/*
  * Dann Official
  * Instagram: @dannalwaysalone
*/