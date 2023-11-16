const fs = require('fs')

let handler = async (m, { conn }) => {
  const doa = JSON.parse(fs.readFileSync('./database/doa.json'))
  let json = doa[Math.floor(Math.random() * doa.length)]
  let str = `
*${json.title}*

${json.arabic}
     
${json.latin}

*${json.translation}*
`;
  m.reply(str)
}

handler.help = ['doa']
handler.tags = ['internet']
handler.command = /^(doa(harian)?)$/i

module.exports = handler