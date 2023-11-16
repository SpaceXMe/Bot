var fetch = require("node-fetch");

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`Masukkan Query!\n\nContoh: *${usedPrefix + command} throne of seal*`);
  }
  try {
    var dann = await fetch(`https://api.betabotz.org/api/webzone/donghua?query=${encodeURIComponent(text)}&apikey=DannKristi`);
    var res = await dann.json();
    if (res.result.data && res.result.data.length >= 4) {
    var hasil = `• Title: *${res.result.data[0].title}*
• Status: *${res.result.data[0].status}*
• Tipe: *${res.result.data[0].type}*
• URL: *${res.result.data[0].url}*`;

   await m.reply(hasil);
   }
  } catch (e) {
    console.error(e);
  }
};

handler.command = handler.help = ['donghua'];
handler.tags = ['internet'];
handler.limit = 2;

module.exports = handler;