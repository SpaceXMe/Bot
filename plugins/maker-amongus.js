var fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, `ᴇɴᴛᴇʀ ᴛᴇxᴛ!`, '0@s.whatsapp.net', `ᴇxᴀᴍᴘʟᴇ: *${usedPrefix}ᴀᴍᴏɴɢᴜs ʙʟᴜᴇ*`);
  m.react(wmoji)
  let image = global.API('lolhuman', '/api/amongus', { text: text }, 'apikey')
  conn.sendFile(m.chat, image, 'amongus.jpg', 'Nih kak', m, false)
};
handler.help = ['amongus'];
handler.tags = ['maker'];
handler.command = ['amongus'];

module.exports = handler;