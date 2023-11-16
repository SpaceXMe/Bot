var fetch = require('node-fetch')

async function handler (m) {
var dann = await fetch(`https://api.lolhuman.xyz/api/random/puisi?apikey=${global.lolhuman}`)
var res = await dann.json()
await m.reply(res.result)
}

handler.command = handler.help = ['puisi']
handler.tags = ['tools']

module.exports = handler