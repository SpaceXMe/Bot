let fetch = require('node-fetch')
let fs = require('fs')
const os = require('os')

let handler = async (m, { conn, generateWAMessageFromContent, usedPrefix }) => {
    let { self, autoread, restrict, autorestart, anticall, freply, autobio } = global.db.data.settings[conn.user.jid]
    m.react('🤖')
    let { nsfw, isBanned, antiSpam } = global.db.data.chats[m.chat]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const totalreg = Object.values(global.db.data.users).length
    const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    const totalf = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    const block = await conn.fetchBlocklist()
    const fgclink = {
       "key": {
           "fromMe": false,
           "participant": "0@s.whatsapp.net",
           "remoteJid": "0@s.whatsapp.net"
       },
       "message": {
           "groupInviteMessage": {
               "groupJid": "6285869153641-120363129552128358@g.us",
               "inviteCode": "null",
               "groupName": "Halo", 
               "caption": wm, 
               'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
           }
       }
   }
   let tag = `@${m.sender.replace(/@.+/, '')}`
   //let thumb = 'https://telegra.ph/file/70e90bac73e10c372a8e7.png'
   let mentionedJid = [m.sender]
   let _uptime = process.uptime() * 1000
   let uptime = clockString(_uptime)
   let sts = `
┏┄⊣「 *INFO BOT* 」
│╭────────────▣
╎│⌭ *ᴘʀᴇғɪx:* [ *${usedPrefix}* ]
╎│⌭ *ɴᴀᴍᴇ:* ${namebot}
╎│⌭ *ʀᴜɴᴛɪᴍᴇ:* ${uptime}
╎│⌭ *ʀᴜɴᴛɪᴍᴇ:* ${totalf}
╎│⌭ *ᴏᴡɴᴇʀ:* wa.me/${owner[0]}
╎│⌭ *ᴍᴇᴍᴏʀʏ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(Math.round(require('os').totalmem) / 1024 / 1024).toFixed(2)}MB
╎│⌭ *ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform() == 'linux' ? 'Linux' : os.platform()}
╎│⌭ *ʟɪʙʀᴀʀʏ:* Baileys-MD
╎╰─────────────────✎
╎
╎┏┄⊣「 *DATABASE BOT* 」
╎│⌭ *${groups.length} ɢʀᴏᴜᴘ*
╎│⌭ *${chats.length - groups.length} ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ*
╎│⌭ *${rtotalreg} ᴜsᴇʀ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅᴀʀɪ ${totalreg}*
╎│⌭ ${block == undefined ? '*ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴜsᴇʀ ʏᴀɴɢ ᴅɪ ʙʟᴏᴋɪʀ*' : '*' + block.length + ' ᴜsᴇʀ ᴅɪʙʟᴏᴋɪʀ*'}
╎│⌭ *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} ᴄʜᴀᴛ ᴛᴇʀʙᴀɴɴᴇᴅ*
╎│⌭ *${Object.entries(global.db.data.users).filter(user => user[1].banned).length} ᴜsᴇʀ ᴛᴇʀʙᴀɴɴᴇᴅ*
╎╰─────────────────✎
╎
╎┏┄⊣「 *PENGATURAN CHAT* 」
╎│⌭ ${nsfw ? '✓' : '✗'} *ᴍᴏᴅᴇ NSFW*
╎│⌭ ${isBanned ? '✓' : '✗'} *ʙᴀɴɴᴇᴅ*
╎│⌭ ${antiSpam ? '✓' : '✗'} *ᴀɴᴛɪ sᴘᴀᴍ*
╎╰─────────────────✎
╎
╎┏┄⊣「 *PENGATURAN BOT* 」
╎│⌭ ${self ? '✗' : '✓'} *ᴘᴜʙʟɪᴄ*
╎│⌭ ${opts["restrict"] ? '✓' : '✗'} *ʀᴇsᴛʀɪᴄᴛ*
╎│⌭ ${anticall ? '✓' : '✗'} *ᴀɴᴛɪ ᴄᴀʟʟ*
╎│⌭ ${opts["backup"] ? '✓' : '✗'} *ᴀᴜᴛᴏ ʙᴀᴄᴋᴜᴘ DB*
╎│⌭ ${opts["gconly"] ? '✓' : '✗'} *ᴍᴏᴅᴇ ɢʀᴏᴜᴘ*
│╰─────────────────✎
┗┄┄──┄┄──┄┄──┄┄──┄┄──❏`;

// Pengiriman
conn.sendMessage(m.chat, {
text: sts,
contextInfo: {
externalAdReply: {
title: namebot,
body: wm,
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fgclink })
}

handler.help = ['statusbot']
handler.tags = ['info']
handler.command = /^((info|stat(s|us)?)bot|bot(info|stat(s|us)?))$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}