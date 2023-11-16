let { capitalizeFirstLetter } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isPrems, isBotAdmin }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let set = global.db.data.settings[conn.user.jid]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'welcome':
      if (m.isGroup) {
        if (!(isOwner || isAdmin)) {
          global.dfail('admin', m, conn)
          throw false
        }
      } else {
        global.dfail('group', m, conn)
        throw false
      }
        chat.welcome = isEnable
      break
    case 'antifoto':
    case 'antiphoto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      } else {
        global.dfail('group', m, conn)
        throw false
      }
      chat.antiFoto = isEnable
      break
    case 'antivideo':
    case 'antivid':
    case 'antividio':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      } else {
        global.dfail('group', m, conn)
        throw false
      }
      chat.antiVideo = isEnable
      break
    case 'detect':
      if (!m.isGroup) {
        global.dfail('group', m, conn)
        throw false
      } else {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.detect = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antibadword':
      if (!m.isGroup) {
        if (!isOwner) {
          dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        dfail('admin', m, conn)
        throw false
      }
      chat.badword = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = isEnable
      break
    case 'backup':
    case 'autobackupdb':
    case 'autobackup':
      isAll = true
      if (!(isROwner)) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['backup'] = isEnable
      break
    case 'autobio':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      set.autobio = isEnable
      break
    case 'antispam':
      if (m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiSpam = isEnable
      break
    case 'simi':
    case 'simih':
    case 'chatbot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.simi = isEnable
      break
    case 'autoai':
      if (!(isAdmin || isOwner || isPremium)) {
        global.dfail('premium', m, conn)
        throw false
      }
      user.autoAI = isEnable
      chat.autoAI = isEnable
      break
    case 'antisatir':
    case 'satir':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSatir = isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break 
      case 'antilinkbitly':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkBitly = isEnable
      break
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihatetepe':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
      case 'nsfw':
      if (m.isGroup) {
        global.dfail('private', m, conn)
        throw false
      } else {
        if (!isPrems) {
          global.dfail('premium', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
      case 'antinsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiNsfw = isEnable
      break
    case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
      break
    case 'antibot':
      if (m.isGroup) {
        if (!isBotAdmin) {
          global.dfail('botAdmin', m, conn)
          throw false
        }
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      } else {
        global.dfail('group', m, conn)
      }
      chat.antiBot = isEnable
      break
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
      case 'autovn':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoVn = isEnable
      break
      case 'autopresence':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.autoPesence = isEnable
      break
      case 'freply':
        if (!isROwner) {
          global.dfail('rowner', m, conn)
          throw false
        }
      chat.freply = isEnable
      break
    case 'toxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = !isEnable
      break
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      } else {
        global.dfail('group', m, conn)
        throw false
      }
      chat.antiToxic = isEnable
    case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
      break
    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break
    case 'mycontact':
    case 'mycontacts':
    case 'whitelistcontact':
    case 'whitelistcontacts':
    case 'whitelistmycontact':
    case 'whitelistmycontacts':
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      conn.callWhitelistMode = isEnable
      break
    case 'restrict':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      set.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    case 'viewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
${htki} List Option ${htka}

┌─━━━━━━━━━━─╍⊠
│╭⊣「 *GROUP* 」
││» welcome
││» delete
││» antibadword
││» antibot
││» antivirtex
││» antilink
││» antilinkbitly 
││» antilinkwa 
││» antilinktik 
││» antilinktel
││» antilinkhttp
││» antilinkig
││» antilinkyt
││» antifoto
││» antivideo
││» antidelete
││» antitoxic
││» antisatir
││» antisticker
││» autosticker
││» autovn
││» autoprecense
││» detect
││» freply
││» nyimak
│╰─────────≎
│
│╭⊣「 *CHAT* 」
││» antinsfw
││» autoai
││» chatbot
││» nsfw
││» document  
│╰─────────≎
│
│╭⊣「 *USER* 」
││» autolevelup
│╰─────────≎
│
│╭⊣「 *OWNER* 」
││» autobio
││» whitelistmycontacts
││» restrict
││» autoread
││» pconly
││» gconly
││» public
││» swonly
│╰─────────≎
└─━━━━━━━━━━─╍⊠

Contoh:
*${usedPrefix}enable welcome*
*${usedPrefix}disable welcome*
`.trim())
      throw false
  }
  let dann = `
*${capitalizeFirstLetter(type)}* berhasil di *${isEnable ? 'nyala' : 'mati'}kan* ${isAll ? 'untuk bot ini' : isUser ? '' : 'untuk chat ini'}
`
// Pengiriman
m.reply(dann)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler