let canvacord = require('canvacord')
let levelling = require('../lib/levelling')
let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  let user = global.db.data.users[m.sender]
  let name = user.registered ? user.name : m.pushName
  let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
  
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersLevel = sortedLevel.map(enumGetKey)
  let lead = usersLevel.indexOf(m.sender) + 1;
  let rank = lead.toString().padStart(4, 0)
  
  let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/0a70ee52eb457fbcc2b92.jpg')
  let pp = await (await fetch(ppUrl)).buffer();
  let out = 'https://telegra.ph/file/6894577305375f8139e3a.jpg';
  let rankImg = 'https://i.ibb.co/Wn9cvnv/FABLED.png';
  let background= 'https://telegra.ph/file/3928fb36aa761c6a0716a.jpg';
  let curexp = user.exp - min
  let maxexp = max - user.exp
  let before = user.level * 1
  
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let txt = `Level *${user.level} (${curexp}/${xp})*\nKurang *${maxexp}* Lagi!`
    let img = await new canvacord.Rank()
              .setAvatar(pp)
              .setCurrentXP(curexp)
              .setLevel(user.level, "RANK", true)
              .setRank(user.level, "LEVEL", true)
              .setLevelColor("#2B2E35", "#2B2E35")
              .setRankColor("#FFFFFF", "#6636E5")
              .setRequiredXP(xp)
              .setStatus("streaming")
              .setBackground("IMAGE", background)
              .setProgressBar("#6636E5", "COLOR")
              .setProgressBarTrack("#FFFFFF")
              .setUsername(name)
              .setDiscriminator(`#${rank}`)
              .setFontSize(1.5)
          
          img.build()
              .then(data => {
      conn.sendMessage(m.chat, { image: data, caption: txt }, { quoted: m })
              })
  } else {
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let str = `Selamat ${name} Naik Level\n• Level Sebelumnya : ${before}\n• Level Baru : ${user.level}\n• Pada Waktu : ${new Date().toLocaleString('id-ID')}\n*_Semakin Sering Berinteraksi Dengan Space Semakin Tinggi Level Kamu_*`
      try {
        let image = await new canvacord.Rank()
                    .setAvatar(pp)
                    .setCurrentXP(curexp)
                    .setLevel(user.level, "RANK", true)
                    .setRank(user.level, "LEVEL", true)
                    .setLevelColor("#2B2E35", "#2B2E35")
                    .setRankColor("#FFFFFF", "#6636E5")
                    .setRequiredXP(xp)
                    .setStatus("streaming")
                    .setBackground("IMAGE", background)
                    .setProgressBar("#6636E5", "COLOR")
                    .setProgressBarTrack("#FFFFFF")
                    .setUsername(name)
                    .setDiscriminator(`#${rank}`)
                    .setFontSize(1.5)
        
          image.build()
              .then(data => {
                  conn.sendMessage(m.chat, { image: data, caption: str }, { quoted: m })
                })
      } catch {
        m.reply(str)
      }
    }
  }
}
handler.help = ['levelup']
handler.tags = ['rpg']
handler.command = /^((level|lvl|levl)(up)?)$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}