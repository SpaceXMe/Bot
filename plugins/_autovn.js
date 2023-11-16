let fetch = require('node-fetch')

let handler = m => m

handler.before = async function (m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.autoVn) {
    let sim = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${global.lolhuman}&text=
    ${encodeURIComponent(
    m.text
    )}&badword=true`)
    let res = await sim.json()
    let tts = `https://api.lolhuman.xyz/api/gtts/id?apikey=${global.lolhuman}&text=${res.result('sim', 'space').replace('simi', 'blitz')}`
    conn.sendMessage(m.chat, { audio: { url: tts }, mimetype: 'audio/mp4', ptt: true })
    }
    return !0
}

module.exports = handler