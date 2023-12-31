let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'link githubnya mana? contoh: https://github.com/DannOfficial/DannV3 '

    if (!regex.test(args[0])) throw 'link salah!'

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Kangsad01/bot-mdv1.21.4.2022-g836cccd.zip'
    m.reply(`Tunggu Sebentar...`)
    conn.sendFile(m.chat, url, filename, null, m, false, { fileName: filename })

}
handler.help = ['gitclone <url>']
handler.tags = ['tools', 'downloader']
handler.command = /gitclone/i

handler.limit = true

module.exports = handler