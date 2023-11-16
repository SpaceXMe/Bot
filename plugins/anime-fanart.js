var fetch = require("node-fetch");

let handler = async (m, { conn }) => {
  await m.react('🖌️');
  var data = await (await fetch(`https://api.lolhuman.xyz/api/random/art?apikey=${global.lolhuman}`)).buffer()
  .then(res => {
    conn.sendFile(m.chat, res, '', wm, m)
  })
};
handler.help = ['fanart'];
handler.tags = ['anime', 'premium'];
handler.command = /^(fanart)$/i;
handler.premium = true

module.exports = handler;