const fetch = require("node-fetch");
const { generateWAMessageFromContent } = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");
const os = require("os");
const { platform } = require("node:process");
let { clockStringP, clockString, tanggal, shortNumber, pickRandom } = require('../lib/myfunc');

let handler = async (m, { conn, args, isPrems, isOwner, isROwner, usedPrefix }) => {

  let type = (args[0] || '').toLowerCase()
  let { limit, money, registered, balance, name, age } = global.db.data.users[m.sender]
  let nama = registered ? name : conn.getName(m.sender)
  let about = (await conn.fetchStatus(m.sender).catch(console.error) || {}).status || ''
  let totalreg = Object.values(global.db.data.users).length
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let prefi = pickRandom(preff)
  
  const fkonn = { key: { fromMe: false, participant: m.sender, ...(m.chat ? { remoteJid: '6282225201437@whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(m.sender)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  const sendMsg = async (txt) => {
    const arr = [
        { text: '○ ʟᴏᴀᴅɪɴɢ', timeout: 500 },
        { text: '◔ ʟᴏᴀᴅɪɴɢ.', timeout: 100 },
        { text: '◑ ʟᴏᴀᴅɪɴɢ..', timeout: 100 },
        { text: '◕ ʟᴏᴀᴅɪɴɢ...', timeout: 100 },
        { text: '● ʟᴏᴀᴅɪɴɢ....', timeout: 100 },
        { text: '*ᴅᴏɴᴇ!*', timeout: 100 }
      ];
      
      const lll = await conn.sendMessage(m.chat, { text: 'ᴘʟᴇᴀsᴇ ᴡᴀɪᴛ...' })
      
      for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout))
        await conn.relayMessage(m.chat, {
          protocolMessage: {
            type: 14,
            key: lll,
            editedMessage: {
              conversation: arr[i].text
            }
          }
        }, { quoted: null })
      }
      await conn.sendPresenceUpdate('composing', m.chat)
    
     let teks = `
*${pickRandom(kata)}.*

╔┄⊣「 *INFO BOT* 」
│╭────────────▣
╎│✘ *ᴘʀᴇғɪx:* [ *${usedPrefix}* ]
╎│✘ *ɴᴀᴍᴇ:* ${namebot}
╎│✘ *ʀᴜɴᴛɪᴍᴇ:* ${uptime}
╎│✘ *ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform() == 'linux' ? 'Linux' : os.platform()}
╎│✘ *ʟɪʙʀᴀʀʏ:* Baileys
│╰─────────────────✎
╚┄────────────〇
${readMore}
${txt}
`;
      return conn.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
      mentions: [m.sender],
      mentionedJid: conn.parseMention(teks),
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
      title: ucapan(),
      body: tanggal(new Date()),
      thumbnailUrl: images(),
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, { quoted: fkonn })
  }

let bagazz = `
• Hello! 👋 I am *Space AI*, a WhatsApp bot assistant ready to help you anytime and anywhere

• Ketik *space* untuk bertanya kepadaku
• Type *space* to ask me

${readMore}
╭⊣「 *SUB MENU* 」⊢▤
│${prefi} *ᴀʟʟᴍᴇɴᴜ*
│${prefi} *ᴍᴇɴᴜ ᴀɪ*
│${prefi} *ᴍᴇɴᴜ ᴀɴɪᴍᴇ*
│${prefi} *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
│${prefi} *ғʟᴀᴍɪɴɢᴛᴇxᴛ*
│${prefi} *ᴍᴀɪɴᴍᴇɴᴜ*
│${prefi} *ʀᴘɢᴍᴇɴᴜ*
│${prefi} *sᴛɪᴄᴋᴇʀᴍᴇɴᴜ*
│
┝ ᴇxᴀᴍᴘʟᴇ: *${usedPrefix}ᴀʟʟᴍᴇɴᴜ*
╰──────────────╼㋛
 
• *ᴊɪᴋᴀ ᴀᴅᴀ ғɪᴛᴜʀ ʏᴀɴɢ ᴇʀʀᴏʀ, sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ #𝚛𝚎𝚙𝚘𝚛𝚝*
• *ɪғ ᴛʜᴇʀᴇ ɪs ᴀɴ ᴇʀʀᴏʀ ғᴇᴀᴛᴜʀᴇs, ᴘʟᴇᴀsᴇ ᴛʏᴘᴇ #𝚛𝚎𝚙𝚘𝚛𝚝*

 ${wm}
`;
  await conn.sendPresenceUpdate('composing', m.chat)
  switch (type) {
    case 'ai':
        sendMsg(global.menuai(prefi))
      break;
    case 'anime':
        sendMsg(global.menuanime(prefi))
      break;
    case 'game':
        sendMsg(global.menugame(prefi))
      break;
    default:
        conn.sendMessage(m.chat, {
        text: bagazz, 
        contextInfo: { 
        mentionedJid: conn.parseMention(bagazz), 
        forwardingScore: 999, 
        isForwarded: true, 
        externalAdReply: { 
        title: ucapan(),
        body: 'Uptime ' + uptime,
        thumbnailUrl: images(),
        sourceUrl: sig,
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, { quoted: fkonn })
      return;
  }
}

handler.help = ['space', 'submenu']
handler.tags = ['main']
handler.command = /^(submenu|menu)$/i

handler.exp = 0

module.exports = handler

function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  let sapa = 'Halo Kak!'
  if (hour_now >= '03' && hour_now <= '10') {
    sapa = 'Selamat Pagi Kak!'
  } else if (hour_now >= '10' && hour_now <= '15') {
    sapa = 'Selamat Siang Kak!'
  } else if (hour_now >= '15' && hour_now <= '17') {
    sapa = 'Selamat Sore Kak!'
  } else if (hour_now >= '17' && hour_now <= '18') {
    sapa = 'Selamat Petang Kak!'
  } else if (hour_now >= '18' && hour_now <= '23') {
    sapa = 'Selamat Malam Kak!'
  } else {
    sapa = 'Jam Segini Kok Belum Tidur Kak 🥱'
  }
  return sapa
}

function images() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH')
  let imagej = 'Halo Kak!'
  if (hour_now >= '03' && hour_now <= '06') {
    imagej = 'https://telegra.ph/file/1173b5719ddc48231808c.jpg'
  } else if (hour_now >= '06' && hour_now <= '10') {
    imagej = 'https://telegra.ph/file/675f65408e2838b7513c9.jpg'
  } else if (hour_now >= '10' && hour_now <= '15') {
    imagej = 'https://telegra.ph/file/80cade49283d1a0b95c00.jpg'
  } else if (hour_now >= '15' && hour_now <= '17') {
    imagej = 'https://telegra.ph/file/dea10008724ee3fe3c70e.jpg'
  } else if (hour_now >= '17' && hour_now <= '18') {
    imagej = 'https://telegra.ph/file/509f8d2578093a746035e.jpg'
  } else if (hour_now >= '18' && hour_now <= '23') {
    imagej = 'https://telegra.ph/file/09a4274d7b1031af0c206.jpg'
  } else {
    imagej = 'https://telegra.ph/file/9f2e9d23e30c0504fba8f.jpg'
  }
  return imagej
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)