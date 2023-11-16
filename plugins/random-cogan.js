let { pinterest } = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.react(wmoji)
	await pinterest("ulzhang boy","cowok keren","cowok ganteng","cogan","cowok korea").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,wm,m))
   }
    
handler.help = ['cogan']
handler.tags = ['random']
handler.command = /^(cogan)$/i
handler.limit = true

module.exports = handler