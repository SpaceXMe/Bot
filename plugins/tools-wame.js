let handler = async (m, { text, args }) => {
  let num = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  m.reply(`https://wa.me/${num.split("@")[0]}${text ? '?text=' + encodeURIComponent(text = text.replace(/@\d+/g, '')) : ''}`)
}

handler.tags = ['tools']
handler.help = ['wame']
handler.command = /^wame$/i

handler.limit = true

module.exports = handler