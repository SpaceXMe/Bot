const { clockString, msToDate, tanggal } = require('../lib/myfunc')

let handler = async (m, { conn, command }) => {
    let _uptime = process.uptime() * 1000
    let uptime = msToDate(_uptime)
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = msToDate(_muptime)

conn.sendMessage(m.chat, {
text: `┌─〔 *${command.toUpperCase().split('').join(' ')}* 〕
├ *ʙᴏᴛ ᴀᴋᴛɪғ sᴇʟᴀᴍᴀ:*
├ ${uptime}
│
├ *sᴇʀᴠᴇʀ ᴀᴋᴛɪғ sᴇʟᴀᴍᴀ:*
├ ${muptime}
└────`,
contextInfo: {
mentions: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: tanggal(new Date()),
body: wm,
thumbnailUrl: thumb,
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler