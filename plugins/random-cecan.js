let { pinterest } = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.react(wmoji)
	await pinterest("cewe", "ullzhang girl", "cewe cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,wm,m))
   }
    
handler.help = ['cecan']
handler.tags = ['random']
handler.command = /^(cecan)$/i
handler.limit = true

module.exports = handler