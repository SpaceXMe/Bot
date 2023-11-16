const { sticker } = require('../lib/sticker')
const moment = require('moment-timezone')
let fetch = require('node-fetch')
let fs = require('fs')

let handler = async (m, { conn, isPrems, isAdmin, isOwner, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat]
  if (global.db.data.users[m.sender].age < 18) return m.reply('Umur kamu belum cukup untuk menggunakan fitur ini!')
  if (isPrems && m.isGroup) throw 'Private only!'
  if (chat.nsfw) {
  if (global.opts) {
  await conn.sendMessage(m.chat, { react: { text: wmoji, key: m.key }})
  let type = command.toLowerCase()
  switch (type) {
    case 'nsfw': case 'nsfwmenu': case 'menunsfw':    case 'nsfwhelp': case 'helpnsfw':
        const fcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': await conn.getName(m.sender), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let prefi = pickRandom(preff)
let str = `
╭╾┈┈┈┅✘『 *NSFW* 』
┊${prefi} *ᴀʜᴇɢᴀᴏ*
┊${prefi} *ᴀss*
┊${prefi} *ʙᴅsᴍ*
┊${prefi} *ʙʟᴏᴡᴊᴏʙ*
┊${prefi} *ɢᴀɴɢʙᴀɴɢ*
┊${prefi} *ʜᴇɴᴛᴀɪɢɪғ*
┊${prefi} *ᴍᴀsᴛᴜʀʙᴀᴛɪᴏɴ*
┊${prefi} *ᴍɪʟғ*
┊${prefi} *ɴsғᴡɴᴇᴋᴏ*
┊${prefi} *ɴsғᴡʀᴀɴᴅᴏᴍ*
╰╾┈┈┈┈┈┈┈┈┈┉┉┉╼━❍

 © 𝑺𝒑𝒂𝒄𝒆𝑩𝒐𝒕𝒛-𝑷𝒓𝒆𝒎𝒊𝒖𝒎
`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
forwadingScore: 999,
isForwarded: true,
externalAdReply: {
title: wm2,
body: moment.tz('Asia/Jakarta').format('HH:mm:ss') + ' WIB',
thumbnailUrl: 'https://telegra.ph/file/5b4c565107f2b94964040.jpg',
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fcon })
      break
    case 'randomnsfw':
    case 'nsfwrandom':
        let data = await fetch('https://api.waifu.pics/nsfw/waifu')
        if (!data.ok) throw await data.text()
        let res = await data.json()
        if (!res.url) throw 'Maaf anda belum beruntung'
        conn.sendFile(m.chat, res.url, 'nsfw.jpg', '', m)
      break
    case 'nekonsfw':
    case 'nsfwneko':
        let neko = await fetch('https://api.waifu.pics/nsfw/neko')
        if (!neko.ok) await neko.text()
        let nekodata = await neko.json()
        if (!nekodata.url) throw 'Maaf anda belum beruntung'
        conn.sendFile(m.chat, nekodata.url, 'neko.jpg', '', m)
      break
    case 'blowjob':
    let siapa = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let namanya = conn.getName(siapa)
        let blow = await fetch('https://api.waifu.pics/nsfw/blowjob')
        if (!blow.ok) await blow.text()
        let blowdata = await blow.json()
        if (!blowdata.url) throw 'Maaf anda belum beruntung'
        let stiker = await sticker(null, blowdata.url, 'Bahan coli', `${namanya} :v`)
        conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
      break
    case 'masturbation':
    case 'masturbasi':
      let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
      let name = conn.getName(who)
      let mast = fs.readFileSync(`./nsfw/masturbation.json`)
      let masturbation = JSON.parse(mast)
  conn.sendFile(m.chat, pickRandom(masturbation), 'nsfw.jpg', `Nih *${name}*\nJangan buat coli ya :v`, m)
      break
  case 'ass':
  case 'gangbang':
  case 'ahegao':
  case 'bdsm':
    let nsfw = fs.readFileSync(`./nsfw/${command.toLowerCase()}.json`)
    let nsfws = JSON.parse(nsfw)
    conn.sendFile(m.chat, pickRandom(nsfws), 'nsfw.jpg', '', m)
      break
  case 'hentaigif':
  case 'hntgif':
    let hntgif = JSON.parse(fs.readFileSync(`./nsfw/hentaigif.json`))
    conn.sendFile(m.chat, pickRandom(hntgif), 'nsfw.mp4', '', m, true, { gifPlayback: true, gifAttribution: 2 })
      break
  case 'milf':
    let hmilf = JSON.parse(fs.readFileSync(`./nsfw/milf.json`))
    conn.sendFile(m.chat, pickRandom(hmilf), 'nsfw.jpg', 'Hmm 😐', m)
      break
    default:
      }
    }
  } else m.reply(`*Nsfw* belum diaktifkan di *chat* ini!\n\nKetik *#enable nsfw* untuk mengaktifkan fitur nsfw`)
}
handler.help = ['ahegao', 'ass', 'bdsm', 'blowjob', 'gangbang', 'hentaigif', 'masturbation', 'milf', 'nsfwneko', 'nsfwrandom']
handler.tags = ['nsfw', 'premium']
handler.command = /^(ahegao|ass|bdsm|blowjob|gangbang|(hnt|hentai)gif|mastur(bation|basi)|nsfwneko|nekonsfw|nsfwrandom|randomnsfw|nsfw(help|menu)?|(menu|help)nsfw|milf)$/i

handler.premium = true
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}