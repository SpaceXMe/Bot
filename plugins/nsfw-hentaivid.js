var fetch = require('node-fetch')
var axios = require('axios')
var cheerio = require('cheerio')

var handler = async (m, { text, usedPrefix, command }) => {
 if (global.db.data.users[m.sender].age < 18) throw 'Maaf, kamu masih dibawah umur untuk bisa menggunakan fitur ini'
 if (!text) return m.reply(`Masukkan Page!\n\nContoh: ${usedPrefix + command} 1153`)
 m.react(rwait)
 var tek = await xhentai(text)
 var mappedResults = tek.map((result, index) => {
     return `${index + 1}. Title: ${result.title}\n   Link: ${result.link}\n   Category: ${result.category}\n   Share Count: ${result.share_count}\n   Views Count: ${result.views_count}`
 })

 m.reply(mappedResults.join('\n\n'))
}
handler.help = ['vidhentai']
handler.tags = ['nsfw']
handler.command = /^(vidhentai|hentaivid)$/i
handler.premium = true

module.exports = handler

async function xhentai(page) {
    return new Promise((resolve, reject) => {
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}