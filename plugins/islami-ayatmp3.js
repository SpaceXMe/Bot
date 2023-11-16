var { alquran } = require('@bochilteam/scraper')

let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `Contoh: *${usedPrefix + command} 1 2*\n\nMaka hasilnya adalah Surah Al-Fatihah Ayat 2 beserta audionya`
    if (isNaN(args[0]) || isNaN(args[1])) throw `Contoh: *${usedPrefix + command} 1 2*\n\nMaka hasilnya adalah Surah Al-Fatihah Ayat 2 beserta audionya`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, 'ayat.mp3', '', m)
}

handler.help = ['ayat']
handler.tags = ['islami']
handler.command = /^(ayat(mp3|audio)|surah)$/i

module.exports = handler