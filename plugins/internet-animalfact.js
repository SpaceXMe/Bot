var fetch = require("node-fetch")

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    return m.reply(`
*${usedPrefix}${command} <nama hewan>*
contoh:
*${usedPrefix}${command} dog*\n
┌〔 Opsi 〕
├ dog
├ cat
├ panda
├ fox
├ red_panda
├ koala
├ birb
├ raccoon
├ kangaroo
├ 
└────
`)
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.image) await conn.sendFile(m.chat, json.image, "", `${json.fact}`, m);
  else throw json;
};
handler.help = ["animal"].map(v => v + ' <no>')
handler.tags = ["internet"]
handler.command = /^(animalfact)$/i

module.exports = handler;