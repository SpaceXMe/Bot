const { tiktok } = require('api-dylux');
var { tiktokdl } = require('../lib/scrape');

let fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: *${usedPrefix + command} https://tiktok.com/xxx*`;
  m.react(rwait);
  try {
    let thumb = (await tiktokdl(text)).cover
    let json = await tiktok(text)
    m.react(rwait)
    await conn.sendFile(m.chat, json.music, 'tiktok.mp3', '', m, false, {
  mimetype: 'audio/mp4',
  contextInfo: {
  forwardingScore: fsizedoc,
  isForwarded: true,
  externalAdReply: {
  body: `${json.description}`,
  containsAutoReply: true,
  mediaType: 1,
  renderLargerThumbnail: true,
  sourceUrl: text,
  thumbnail: await (await fetch(thumb)).buffer(),
  title: `${json.nickname}` }}})
  } catch (e) {
    console.log(e);
    m.reply(e?.message);
  }
}

handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
module.exports = handler

/*
  * Space Team
  * ig: @itzmebgz
*/