let handler = async (m, { conn, text, usedPrefix, command }) => {
  let args = text.split(/[,|\n]/).filter(argus => argus.trim() !== '')
  let name = args[0]
  let values = args.slice(1)

  if (!name) {
    return m.reply(`Tutorial: *${usedPrefix + command} Nama*\n*Value*\n\nContoh: *${usedPrefix + command} Pilih*\n*Bakso*\n*Mie Ayam*`)
  }

  if (values.length < 2) {
    return m.reply('Harap berikan setidaknya dua nilai untuk jajak pendapat')
  }

  let poll = {
    name: name,
    values: values,
    selectableCount: true
  }

  conn.sendMessage(m.chat, {
    poll: poll
  })

  m.reply(`Poll *${name}* telah dibuat, dengan opsi:\n\n*${values.join('*\n*')}*`)
}

handler.command = /^(poll|polling)$/i
handler.help = ['poll name, value,', 'polling name, value1']
handler.tags = ['tools']

handler.limit = 15

module.exports = handler