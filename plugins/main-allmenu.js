/*
 * DannTeam
 * Instagram: @dannalwaysalone
*/

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let { platform } = require('node:process')
let os = require('os')
let { currency, tanggal, clockString, shortNumber, numberFormat, pickRandom }= require('../lib/myfunc')

let tags = {
  'main': '*MAIN MENU*',
  'rpgabsen': '*RPG-ABSEN*',
  'rpg': '*RPG*',
  'ai': '*AI*',
  'game': '*GAME*',
  'xp': '*EXP & LIMIT*',
  'random': '*RANDOM*',
  'anime': '*ANIME*',
  'sticker': '*STIKER*',
  'kerang': '*KERANG AJAIB*',
  'animal': '*ANIMAL*',
  'quotes': '*QUOTES*',
  'admin': '*ADMIN*',
  'group': '*GROUP*',
  'premium': '*PREMIUM*',
  'internet': '*INTERNET*',
  'anonymous': '*ANONYMOUS*',
  'downloader': '*DOWNLOADER*',
  'store': '*STORE*',
  'berita': '*BERITA*',
  'tools': '*TOOLS*',
  'fun': '*FUN*',
  'nsfw': '*NSFW*',
  'database': '*DATABASE*',
  'vote': '*VOTING*',
  'absen': '*ABSEN*',
  'catatan': '*CATATAN*',
  'jadian': '*JADIAN*',
  'islami': '*ISLAMI*',
  'owner': '*OWNER*',
  'customtext': '*CUSTOMTEXT*',
  'advanced': '*ADVANCE*',
  'info': '*INFO*',
  'audio': '*AUDIO*',
  'maker': '*MAKER*',
}
const defaultMenu = {
  before: `
%ucapan
@%tag

*Space Ai* is PlayGround's Rpg bot made of Node.js and Python. *Space Ai* is designed to make stickers and make you have fun.


┍────━━━━━━───╍⊠
│❒ *SPACE AI MENU*
│▔▔▔▔▔▔▔▔▔▔▔▔▔
│╭⊣「 *ᴜsᴇʀ* ⌋
││◦ Limit: *%limit*
││◦ Level: *%level*
││◦ Money: *%money*
││◦ Credit: *%balance*
││◦ XP: *%totalexp*
│╰─────────────≎
│
│╭⊣「 *ᴛɪᴍᴇ* ⌋
││◦ Hari: *%week %weton*
││◦ Tanggal: *%tanggal*
││◦ Islamic Date: *%dateIslamic*
││◦ WIB: *%wib WIB*
││◦ WITA: *%wita WITA*
││◦ WIT: *%wit WIT*
││◦ Tahun Baru: *%dateCountdown*
│╰─────────────≎
│
│╭⊣「 *ʙᴏᴛ sᴛᴀᴛs* ⌋
││◦ Runtime: *%uptime*
││◦ Prefix: [ *%p* ]
││◦ Memory: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
││◦ Database: *%rtotalreg* dari *%totalreg*
│╰─────────────≎
│
│╭⊣「 *ɪɴғᴏ ᴄᴍᴅ* ⌋
││◦ Ⓛ : *Limit*
││◦ Ⓟ : *Premium*
││◦ Ⓐ : *Admin*
││◦ Ⓖ : *Group*
││◦ Ⓞ : *Owner*
│╰─────────────≎
┕────━━━━━━───╍⊠

%readmore`,
  header: '╭⊣「 %category ⌋',
  body: '│ %re %cmd %islimit %isPremium %isGroup %isAdmin %isOwner',
  footer: '╰─────────────≎',
  after: 'Space-MD masih dalam tahap pengembangan.\n',
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, balance, money } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = m.sender
    let tag = m.sender.split('@')[0]
    let names = await conn.getName(m.sender)
    let ucapans = ucapan()
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const dd = new Date('2023-01-01');
    let htki = `${global.htki}`
    let htka = `${global.htka}`
    const locales = 'en';
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    
    const platform = os.platform()

    const targetDate = new Date('January 1, 2024 00:00:00');
    const currentDate = new Date();
    const remainingTime = targetDate.getTime() - currentDate.getTime();
    const seconds = Math.floor(remainingTime / 1000) % 60;
    const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
    const hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
    const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    let dateCountdown = `${days} Hari, ${hours} Jam Lagi!`;
    
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        admin: plugin.admin,
        group: plugin.group,
        owner: plugin.owner,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .replace(/%isAdmin/g, menu.admin ? 'Ⓐ' : '')
                .replace(/%isGroup/g, menu.group ? 'Ⓖ' : '')
                .replace(/%isOwner/g, menu.owner ? 'Ⓞ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      re: pickRandom(preff),
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      tanggal: tanggal(new Date()),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: shortNumber(exp, "en-US"),
      limit: shortNumber(limit, "en-US"),
      money: currency(money),
      balance: shortNumber(balance, "en-US"), 
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, name, tag, names, weton, week, htki, htka, date, dateIslamic, dateCountdown, platform, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    var fkonn = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {})
      },
      message: {
        contactMessage: {
          displayName: `${await conn.getName(name)}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }
      }
    }
    await m.react('🚀')
    conn.sendMessage(m.chat, {
      text: text,
      contextInfo: {
        mentionedJid: conn.parseMention(text),
        externalAdReply: {
          title: '© Space Created With Node.Js',
          body: wm,
          thumbnailUrl: 'https://telegra.ph/file/5c5cd0bf7d633d4c3a6e1.jpg',
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, {
      quoted: fkonn
    })
  } catch (e) {
    console.log(e)
    conn.reply(owner[0] + '@s.whatsapp.net', e.message, m)
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(all(menu|help|cmd)?|(cmd|help|menu)all|listmenu)$/i

handler.register = true
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  var ucapanWaktu = 'Selamat Pagi Kak! 👋'
  if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Selamat Pagi Kak! 👋'
  } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Selamat Siang Kak! 👋'
  } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Selamat Sore Kak! 👋'
  } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Selamat Petang Kak! 👋'
  } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Selamat Malam Kak! 👋'
  } else {
    ucapanWaktu = 'Kok Belum Tidur Kak 🥱'
  }
  return ucapanWaktu
}