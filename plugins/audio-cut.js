let { promises } = require('fs')
let path = require('path')
let { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, command }) => {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        m.reply(wait)
        if (!/audio/.test(mime)) throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
        let audio = await q.download?.()
        if (!audio) throw 'Can\'t download audio!'
        if (!args[0] || !args[1]) throw `example: *${usedPrefix + command} 00:00:30 00:00:30*`
            let ran = (new Date * 1) + '.mp3'
            let media = path.join(__dirname, '../tmp/' + ran)
            let filename = media + '.mp3'
            await promises.writeFile(media, audio)
            exec(`ffmpeg -ss ${args[0]} -i ${media} -t ${args[1]} -c copy ${filename}`, async (err) => {
                await promises.unlink(media)
                if (err) return Promise.reject('Error!')
                let buff = await promises.readFile(filename)
                let ptt = (q.ptt == true) ? true : false
                conn.sendFile(m.chat, buff, filename, null, m, ptt, { quoted: m, mimetype: 'audio/mp4' })
                await promises.unlink(filename)
            })
}
handler.help = ['cut'].map(v => v + ' <text>')
handler.tags = ['audio']
handler.command = /^(potong(audio|mp3)?|cut(audio|mp3)?)$/i

module.exports = handler