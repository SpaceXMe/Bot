let moment = require('moment-timezone')
let { clockString, tanggal, msToDate, pickRandom } = require('../lib/myfunc')

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let prefi = pickRandom(preff)
    if (user.afk > -1) {
      conn.reply(m.chat, `
${prefi} Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
${prefi} AFK Selama *${clockString(new Date - user.afk)}*
`, m, { contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: { title: tanggal(new Date()), body: conn.msToDate(new Date - user.afk), sourceUrl: '', thumbnailUrl: pickRandom(hwaifu) }}})
      user.afk = -1
      user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afk
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      conn.reply(m.chat, `
${prefi} Jangan tag dia!
${prefi} Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama *${clockString(new Date - afkTime)}*
`, m, { contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: { title: tanggal(new Date()), body: msToDate(new Date - afkTime), sourceUrl: '', thumbnailUrl: pickRandom(hwaifu) }}})
    }
    return true
  }
}