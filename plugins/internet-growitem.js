var { promisify } = require("util");
var _gis = require("g-i-s");
var gis = promisify(_gis);
var api = require("growtopia-api");

async function handler(m, {
conn,
text,
usedPrefix,
command
}) {
 try {
  if (!text) {
  return m.reply(`Masukkan Item!\n\nContoh: *${usedPrefix + command} angel*`);
  }
  var gimg = `Growtopia item ${text}`;
  var danz = await gis(gimg) || [];
  var { url, width, height } = pickRandom(danz) || {};
  if (!danz) {
  return m.reply('Tidak ditemukan!');
  }
  var dann = await api.searchItem(text);
  var result = dann.map(res => `• Item: *${res.itemName}*\n\n• URL: *${res.url}*\n`).join('\n');
  await conn.sendFile(m.chat, url, 'itemgt.jpg', result, m);
  if (!dann) {
  return m.reply('Item tidak ditemukan!');
  }
 } catch (e) {
  console.log(e);
  return conn.sendMessage(nomorown + "@s.whatsapp.net", e, m)
 };
}

handler.help = ['growitem'];
handler.tags = ['internet'];
handler.command = /^((grow|item)(gt|item))$/i;
handler.limit = true

module.exports = handler;

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}