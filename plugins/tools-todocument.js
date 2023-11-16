const { fromBuffer } = require("file-type")
let { capitalizeFirstLetter } = require('../lib/myfunc')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply/caption media dengan command *${usedPrefix + command}*`
  await q.download().then(async (buffer) => {
    let me = await fromBuffer(buffer)
    let name = text ? text : 'document'
    conn.sendMessage(m.chat, { document: buffer, mimetype: mime, fileName: name + `.${me.ext}` }, { quoted: m })
  })
}

handler.help = ['document']
handler.tags = ['tools']
handler.command = /^((to)?do((k|c)(ument?)?))$/i

module.exports = handler