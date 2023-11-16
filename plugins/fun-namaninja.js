function handler(m, { conn, text }) {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '*ʙᴀᴋᴀᴀ >//<*'
    let ninja = teks.replace(/[a-z]/gi, v => {
        return {
            'a': 'ka',
            'b': 'zu',
            'c': 'mi',
            'd': 'te',
            'e': 'ku',
            'f': 'lu',
            'g': 'ji',
            'h': 'ri',
            'i': 'ki',
            'j': 'zu',
            'k': 'me',
            'l': 'ta',
            'm': 'rin',
            'n': 'to',
            'o': 'mo',
            'p': 'no',
            'q': 'ke',
            'r': 'shi',
            's': 'ari',
            't': 'ci',
            'u': 'do',
            'v': 'ru',
            'w': 'mei',
            'x': 'na',
            'y': 'fu',
            'z': 'zi'
        }[v.toLowerCase()] || v
    })
    let capit = capital(ninja)
    m.reply(`${capit}`)
}
handler.help = ['namaninja']
handler.tags = ['fun']
handler.command = /^(namaninja|namae)$/i

module.exports = handler

function capital(str) {
   var words = str.split(' ')
   var capitalizedWords = words.map(function(word) {
     return word.charAt(0).toUpperCase() + word.slice(1)
   })
   var capitalizedString = capitalizedWords.join(' ')
   return capitalizedString
}