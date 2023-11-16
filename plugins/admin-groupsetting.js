let handler = async (m, { conn, args, usedPrefix, command, isAdmin, isOwner, isBotAdmnisBotAdmn, isBotAdmin }) => {
    if (!m.isGroup) {
      global.dfail('group', m, conn)
      throw false
    } else if (m.isGroup && !(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    } else if (!isBotAdmin) {
      global.dfail('botAdmin', m, conn)
      throw false
    } else {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
    }
}
handler.help = ['group <open/close>']
handler.tags = ['admin']
handler.command = /^(group)$/i

module.exports = handler