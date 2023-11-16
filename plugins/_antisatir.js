const isSatir = /(([Kk]enao|[Bb]ims|[Aa]v)a|tumlul|Tumlul|[Gg]wejh|[Oo]kgey|[Ss]iava|[Kk]avan|tenan|[Aa](msu|f[ah])|[Mm]gak|lmao|[Pp]edo|([Bb]an|hoo)h|[Kk]nf|ancrit)/i // tambahin sendiri

let handler = m => m

handler.before = function (m, { conn, args, text, usedPrefix, command, isAdmin, isBotAdmin, isPrems }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
      if (isAdmin || isOwner || isPrems) {
      } else {
      conn.sendMessage(m.chat, {
      text: `*Kata Penyatir Terdeteksi!*\n\n$Kamu mendapatkan *${user.warn}/${global.warn}* karena nyatir!`,
      contextInfo: {
      externalAdReply: {
      title: 'TUKANG SATIR',
      body: conn.user.name,
      sourceUrl: sgc,
      thumbnailUrl: "https://telegra.ph/file/4a1a139adcc575c2524af.jpg",
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: m })
      global.db.data.users[m.sender].warn += 1
      }
      return !0
    }
}

module.exports = handler

/*
  * DannTeam
  * ig: @dannalwaysalone
*/