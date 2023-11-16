const { jadwalsholat } = require('@bochilteam/scraper')
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Contoh: *${usedPrefix}${command} Semarang*`
    const res = await jadwalsholat(text)
    m.reply(`Jadwal Shalat Kota ${text}\n\n╭───────
${Object.entries(res.today).map(([name, data]) => `│• *${name}:* ${data}`).join('\n').trim()}\n╰───────
`.trim())
}
handler.help = ['jadwalshalat <daerah>']
handler.tags = ['islami']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler