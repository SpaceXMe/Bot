const { translate } = require('@vitalets/google-translate-api');
const defaultLang = 'id'
let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
📌 *Example:*
• *${usedPrefix + command}* <bahasa> [text]
• *${usedPrefix + command}* id Hello World

*Lihat daftar bahasa yang didukung:*
• https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    
    try {
      let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)     
      m.reply(result.text.toString())
    } catch (e) {
      console.log(e)
      throw err
    }
}
handler.help = ['translate <lang> <text|reply>']
handler.tags = ['tools']
handler.command = /^((tr(anslate)?)|terjemah(kan)?)$/i

module.exports = handler