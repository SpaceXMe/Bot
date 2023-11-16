const api = require('api-dylux');
async function handler(m, {
 text, 
 usedPrefix, 
 command
 }) {
  if (!text) throw `Masukan URL Instagram!\n\n*Example:* ${ usedPrefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
  m.reply(wait)
  await (await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolhuman}&url=${text}`)).json()
  .then(data => {
    for (let url of data.result) {
      conn.sendFile(m.chat, url, '', '', m)
    }
  })
}        
handler.help = ['ig3']
handler.tags = ['downloader']
handler.command = /^((ig|instagram)(dl|down(load)?)?3)$/i

module.exports = handler