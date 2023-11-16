var { isUrl } = require('../lib/others')

const baseurl = 'https://otakudesu.lol'

async function otakulatest() {
	return new Promise(async (resolve, reject) => {
		const { data } = await axios.request({
			method: 'GET',
			url: baseurl,
			headers: {
			cookie: '_ga=GA1.2.892220948.1691376515; _gid=GA1.2.64016645.1691376515; _gat=1',
			'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
			},
		}).catch((e) => { reject(e) })
		const $ = cheerio.load(data)
		const result = $('div.venz > ul > li > div.detpost').map((_, el) => {
			return {
			title: $(el).find('.thumb > a > .thumbz > h2').text().trim(),
			day: $(el).find('.epztipe').text().trim(),
			date: $(el).find('.newnime').text().trim(),
			thumbnail: $(el).find('.thumb > a > .thumbz > img').attr('src'),
			link: $(el).find('.thumb > a').attr('href')
			}
		}).get()
		resolve(result)
	})
}

async function otakusearch(query) {
	return new Promise(async (resolve, reject) => {
		const { data } = await axios.request({
			method: 'GET',
			baseURL: baseurl,
			url: '/?s=' + query + '&post_type=anime',
			headers: {
			cookie: '_ga=GA1.2.892220948.1691376515; _gid=GA1.2.64016645.1691376515; _gat=1',
			'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
			},
		}).catch((e) => { reject(e) })
		const $ = cheerio.load(data)
		const result = $('.chivsrc > li').map((_, el) => {
			return {
			title: $(el).find('h2').text().trim(),
			genres: $('div.set').eq(0).text().replace('Genres : ', '').trim(),
			status: $('div.set').eq(1).text().replace('Status : ', '').trim(),
			rating: $('div.set').eq(2).text().replace('Rating : ', '').trim(),
			thumbnail: $(el).find('img').attr('src'),
			link: $(el).find('h2 > a').attr('href'),
			}
		}).get()
		resolve(result)
	})
}

async function otakudetail (url) {
	return new Promise(async (resolve, reject) => {
		/*const { data } = await axios.request({
			method: 'GET',
			url: url,
			headers: {
			cookie: '_ga=GA1.2.892220948.1691376515; _gid=GA1.2.64016645.1691376515; _gat=1',
			'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
			},
		}).catch(reject)
		const $ = cheerio.load(data)*/
		const result = {}
		//const batchURL =  $('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
		const rest = await await axios.request({
			method: 'GET',
			url: url,
			headers: {
			cookie: '_ga=GA1.2.892220948.1691376515; _gid=GA1.2.64016645.1691376515; _gat=1',
			'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
			},
		}).catch((e) => { reject(e) })
		const $ = cheerio.load(rest.data)
		const resultArray = new Array()
		const resultObject = {};
		const downloadDiv = $('div.download');
		const h4Elements = downloadDiv.find('h4');
		h4Elements.each((index, element) => {
			const title = $(element).text();
			const ulElement = $(element).next('ul');
			const liElements = ulElement.find('li');

			liElements.each((liIndex, liElement) => {
			const quality = $(liElement).find('strong').text();
			const fileLinks = [];
			const aElements = $(liElement).find('a');

			aElements.each((aIndex, aElement) => {
				const link = $(aElement).attr('href');
				const text = $(aElement).text();
				fileLinks.push({ text, link });
			});
			if (!resultObject[quality]) resultObject[quality] = [];
			resultObject[quality].push({ title, fileLinks });
			});
		});
			result.img = $('#venkonten > div.venser > div.fotoanime').find('img').attr('src')
				$('#venkonten > div.venser > div.fotoanime > div.infozin > div').each(function(a, b) {
				result.judul = $(b).find('p:nth-child(1)').text().replace('Judul: ','')
						result.jepang = $(b).find('p:nth-child(2)').text().replace('Japanese: ','')
						result.rate = $(b).find('p:nth-child(3)').text().replace('Skor: ','')
						result.produser = $(b).find('p:nth-child(4)').text().replace('Produser: ','')
						result.tipe = $(b).find('p:nth-child(5)').text().replace('Tipe: ','')
						result.status = $(b).find('p:nth-child(6)').text().replace('Status: ','')
						result.episode = $(b).find('p:nth-child(7)').text().replace('Total Episode: ','')
						result.durasi = $(b).find('p:nth-child(8)').text().replace('Durasi: ','')
						result.rilis = $(b).find('p:nth-child(9)').text().replace('Tanggal Rilis: ','')
						result.studio = $(b).find('p:nth-child(10)').text().replace('Studio: ','')
						result.genre = $(b).find('p:nth-child(11)').text().replace('Genre: ','')
						result.desc = $('#venkonten > div.venser > div.fotoanime > div.sinopc').text().replace('.','\n') + $(b).find('div.sinopc > p:nth-child(2)').text()
						result.batch = $('#venkonten > div.venser > div:nth-child(10) > ul > li > span:nth-child(1) > a').attr('href')
				})
				result.eps = $('div.episodelist > ul > li').map((_, el) => {
			return $(el).find('span > a').attr('href')
		}).get()
		result.download = resultObject
		resolve(result)
	})
}

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!text) throw `For searching anime / batch :\nUsage : *${usedPrefix + command} query*\n\nFor show info / download link :\nUsage : *${usedPrefix + command} otakudesu_url*`
	text = text.toLowerCase()
	try {
		if (isUrl(text)) {
			let anu = await otakudetail(text)
			if (!anu.judul) throw Error()
			let txt = `*${anu.judul}*\n\n`
			+ `*status :* ${anu.status}\n`
			+ `*episode :* ${anu.episode}\n`
			+ `*genre :* ${anu.genre}\n`
			+ `*studio :* ${anu.studio}\n`
			+ `*batch :* ${anu.batch}\n`
			+ `*desc :*\n${anu.desc}`
			for (let x of Object.keys(anu.download)) {
				let link = anu.download[x]
				txt += `\n\n*[ ${x} ]*`
				for (let y of link) {
					txt += `\n*${y.title}*`
					for (let z of y.fileLinks) {
						txt += `\n*${z.text} :* ${z.link}`
					}
				}
			}
			await conn.sendMessage(m.chat, { image: { url: anu.img }, caption: txt }, { quoted: m }).catch(_ => m.reply(txt))
		} else if(text == 'latest') {
			let anu = await otakulatest()
			if (anu.length == 0) throw Error()
			let txt = `*Found ${anu.length} result*`
			for (let x of anu) {
				txt += `\n\n*judul :* ${x.title}\n`
				+ `*rilis :* ${x.date} ${x.day}\n`
				+ `*link :* _${x.link}_\n`
				+ `───────────────────`
			}
			await conn.sendMessage(m.chat, { image: { url: anu[0].thumbnail }, caption: txt }, { quoted: m }).catch(_ => m.reply(txt))
		} else {
			let anu = await otakusearch(text)
			if (anu.length == 0) return m.reply('Judul tidak ditemukan')
			let txt = `*Found ${anu.length} result*`
			for (let x of anu) {
				txt += `\n\n*judul :* ${x.title}\n`
				+ `*genre :* ${x.genres}\n`
				+ `*status :* ${x.status}\n`
				+ `*rating :* _${x.rating}_\n`
				+ `*url :* _${x.link}_\n`
				+ `───────────────────`
			}
			await conn.sendMessage(m.chat, { image: { url: anu[0].thumbnail }, caption: txt }, { quoted: m }).catch(_ => m.reply(txt))
		}
	} catch (e) {
		console.log(e)
		throw 'Internal server error.'
	}
}

handler.menuanime = ['otakudesu']
handler.tagsanime = ['anime', 'internet']
handler.command = /^(otakudesu?)$/i

handler.premium = true
handler.limit = true

module.exports = handler