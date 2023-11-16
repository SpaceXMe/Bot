/*
  * Dann Official
  * Janngan dihapus, berterimakasihlah kepada pengembang
  * Instagram: @dannalwaysalone
*/

let handler = async (m, { conn }) => {
  let wa = '0'
  let dan = '6283137550315'
	let thumb = 'https://telegra.ph/file/0c54f6ca81f677893d007.jpg'
	let tqto = `${htki} Thanks To ${htka}

Terimakasih terutama kepada:
➸ @${wa}

Terimakasih kepada pengembang:
➸ @${dan}

Terimakasih juga kepada kang recode:
➸ @${global.owner[0]}

─────────────────────
• God
• My ortu
• DannTeam
• Nurutomo
• Adiwajshing
• Ariffb
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• RodotzBot
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• Mursid
• Jarot
• Tio
• Aca Mirabel
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────
`
await m.reply(tqto)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|thanks?to|tqto|ttq)$/i

module.exports = handler