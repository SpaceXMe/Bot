const { color } = require('../lib/color')
const moment = require("moment-timezone")
let levelling = require('../lib/levelling')
const canvacord = require("canvacord")
let fetch = require("node-fetch");

module.exports = {
	async before(m) {
	  if (m.key.remoteJid.endsWith('status@broadcast')) return;
		let user = global.db.data.users[m.sender]
		let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
		let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/0a70ee52eb457fbcc2b92.jpg");
        let pp = await (await fetch(ppUrl)).buffer();
        let background= 'https://telegra.ph/file/3928fb36aa761c6a0716a.jpg';
        let curr = user.exp - min
        let minxp = max - user.exp
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
		if (before !== user.level) {
			let name = user.name
			let chating = `*Congratulantions ${user.name}* You have leveled up!
Progress: [ *${before}* ] ➠ [ *${user.level}* ]
Unlocked: *${user.rank}*

Use *#profile* to check`.trim()

			const rank = new canvacord.Rank()
            .setAvatar(pp)
            .setCurrentXP(curr)
            .setLevel(user.level, "RANK", true)
            .setRank(user.level, "LEVEL", true)
            .setLevelColor("#2B2E35", "#2B2E35")
            .setRankColor("#FFFFFF", "#6636E5")
            .setRequiredXP(xp)
            .setStatus("streaming")
            .setBackground("IMAGE", background)
            .setProgressBar("#6636E5", "COLOR")
            .setProgressBarTrack("#FFFFFF")
            .setUsername(user.name)
            .setDiscriminator(`#0001`)
            .setFontSize(1.5)
        
        rank.build()
            .then(data => {
                conn.sendFile(m.chat, data, "RankCad.png", chating, m)
              })
           }
		}
	}