var genshindb = require('genshin-db')

String.prototype.includesOneOf = function(arrayOfStrings) {
	if(!Array.isArray(arrayOfStrings)) {
	throw new Error('includesOneOf only accepts an array')
	}
	return arrayOfStrings.some(str => this.includes(str))
}

var handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) return m.reply(`Masukkan Namecard!\n\nContoh: *${usedPrefix + command} klee*`)
	try {
		let anu = await genshindb.namecards(`${text}`)
		let ini_txt = `*${anu.name}*\n\n`
		ini_txt += `*[ ${anu.description.replace('\n',' ]*\n_"')}"_\n\n`
		ini_txt += `${anu.source ? `*Source :* ${anu.source.toString().replaceAll(',',', ')}` : ''}`
		m.reply(ini_txt)
	} catch (e) {
		console.log(e)
		let anu2 = await genshindb.namecards(`names`, { matchCategories: true })
		m.reply(`*Not Found*\n\n*Available namecards is :*\n${anu2.join(", ")}`)
	}
}

handler.help = ['ginamecard']
handler.tags = ['anime']
handler.command = /^((genshin|gi?)namecard)$/i

handler.limit = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)