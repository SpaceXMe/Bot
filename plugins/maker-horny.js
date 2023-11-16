const canvas = require("knights-canvas");
const fetch = require("node-fetch");
const { sticker } = require("../lib/sticker");

let handler = async (m, { conn, usedPrefix, command }) => {
  m.react(xmoji)
  await conn.sendPresenceUpdate('composing', m.chat)
  let image = await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/3ca03a0954d5a7e383d53.jpg')
  let img = await (await fetch(image)).buffer()
  
  const card = await new canvas.Horny()
       .setAvatar(img)
       .toBuild();
     data = card.toBuffer()
     let stiker = await sticker(data, false, 'Apcoba', 'Horny License')
     conn.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
};
handler.help = ['horny'];
handler.tags = ['maker'];
handler.command = /^(horny(card)?)$/i;

handler.limit = true;

module.exports = handler;