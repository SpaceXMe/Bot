const axios = require("axios");
var func = require('../lib/myfunc');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Teksnya?';
  await conn.sendPresenceUpdate('recording', m.chat);
  try {
    var { success: teksnya } = await simi(text);
    var { data } = await voice(teksnya);
    const buffer = Buffer.from(data, "base64");
    conn.sendFile(m.chat, buffer, 'buffer.mp3', null, m);
  } catch(error) {
    console.error(error);
    conn.reply(m.chat, error?.message, m);
  }
};

handler.help = ["simivoice"];
handler.tags = ["fun", "tools"];
handler.command = /^simivoice$/i;
handler.premium = true;

module.exports = handler;

function voice(text, id = 'id_001') {
  return new Promise((resolve, reject) => {
    axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
      text: text,
      voice: id
    }).then(({ data }) => {
      resolve(data)
    }).catch(reject)
  })
}

function simi(text) {
  return new Promise((resolve, reject) => {
    axios.get("https://api.simsimi.net/v2/?text=" + text + "&lc=id")
    .then(({ data }) => {
      resolve(data)
    })
    .catch(reject)
  })
}