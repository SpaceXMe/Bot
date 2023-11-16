let { pickRandom } = require('../lib/myfunc')

let handler  = async (m, { conn }) => {
  const taugasih = JSON.parse(fs.readFileSync('./database/fakta.json'))
  m.mediaReply(`\n*Fun Fact :*\n\n${pickRandom(taugasih)}`)
}
handler.help = ['faktaunik']
handler.tags = ['fun']
handler.command = /^(taugasih|fakta(unik)?)$/i

module.exports = handler