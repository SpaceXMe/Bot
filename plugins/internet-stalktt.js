let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n*${usedPrefix + command} lisaamelia09_*`
m.react(wmoji)
try {
let f = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${global.lolhuman}`)
if (!f.ok || !f) throw 'Terjadi error!\nPastikan *username* yang anda masukkan sudah benar!'
let x = await f.json()
let cap = `
╭──${kki} *INFO DETAIL TIKTOK* ${kka}
▣ *Usename* : @${x.result.username}
▣ *Name* : ${x.result.nickname}
▣ *Followers* : ${x.result.followers}
▣ *Followings* : ${x.result.followings}
▣ *Likes* : ${x.result.likes}
▣ *Video* : ${x.result.video}
▣ *Bio* : ${x.result.bio}
▣ *Link* : https://tiktok.com/@${x.result.username}
╰─────────────────〇`
conn.sendFile(m.chat, x.result.user_picture, 'stalk.jpg', `${cap}`, m)
  } catch (e) {
    console.log(e)
    m.reply('An error occurred while processing the request')
  }
}
handler.help = ['stalktiktok'].map(v => v + ' <username>')
handler.tags = ['internet']
handler.command = /^(stalk(tt|tiktok)|(tt|tiktok)stalk)$/i

handler.limit = true

module.exports = handler