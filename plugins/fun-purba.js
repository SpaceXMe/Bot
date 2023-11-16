function handler(m, { text }) {
    let purba
    if (m.quoted && m.quoted.text) {
      purba = m.quoted.text
    } else if (text) {
      purba = text
    } else if (!text || !(m.quoted && m.quoted.text)) {
      return m.reply('Tobangado?')
    }
    m.reply(purba.replace(/[aiueo]/gi, '$&ve'))
}
handler.help = ['purba']
handler.tags = ['fun']
handler.command =  /^(purba)$/i

module.exports = handler