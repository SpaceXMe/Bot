let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukkan teks!\nContoh: *${usedPrefix + command} anjay*`)
  if (text.length < 3) return m.reply('Minimal 3 huruf!')
  let scroll = await (await require('node-fetch')(`https://mfarels.my.id/api/scrolling-text?text=${text}`)).json()
  m.reply(scroll.result)
}

handler.help = ['scroling']
handler.tags = ['fun']

handler.command = /^scroll?ing(text)?$/i
handler.limit = true

handler.fail = null

module.exports = handler
