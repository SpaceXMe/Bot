var fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Linknya mana?'
  m.react('🔗')
  try {
    var link = await (await fetch(`https://mfarels.my.id/api/bitly?url=${text}`)).json()
    m.reply(`📆 Created : ${link.result.created_at}\n🔗 Link : ${link.result.link}`)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi error saat memproses request!')
  }
}

handler.help = ['bitly']
handler.tags = ['tools']
handler.command = /^(bitly(url)?)$/i

handler.limit = true

module.exports = handler