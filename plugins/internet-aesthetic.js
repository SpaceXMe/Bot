var fetch = require('node-fetch');

let handler = async function (m, { conn }) {
  m.react(wmoji)
  var img = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json')).json()
  conn.sendFile(m.chat, img[Math.floor(Math.random() * img.length)], '', null, m);
};

handler.help = ['aesthetic'];
handler.tags = ['internet'];
handler.command = /^(estetik|aesthetic)$/i;

handler.limit = true;

module.exports = handler;