const axios = require('axios');
const cheerio = require('cheerio');

async function handler(m, { conn }) {
    m.react(wmoji)
    const result = await livecharttba();
    const formattedResult = result.map(item => {
        return `
▣ *Title:* ${item.judul}
▣ *Tags:* ${item.tags.join(', ')}
▣ *Image:* ${item.image}
▣ *Studio:* ${item.studio ? item.studio : '-'}
▣ *Adaptation:* ${item.adaptasi}
▣ *Release Date:* ${item.rilisDate ? item.rilisDate : '-'}
`;
    }).join('\n');

    conn.reply(m.chat, formattedResult, m, { contextInfo: { externalAdReply: {
      title: 'ON GOING',
      body: wm,
      thumbnailUrl: result[0].image,
      sourceUrl: 'https://www.livechart.me/tba/tv'
    }}});
}

handler.command = handler.help = ['ongoing'];
handler.tags = ['anime'];

module.exports = handler;

async function livecharttba() {
    let { data } = await axios.get('https://www.livechart.me/tba/tv');
    const $ = cheerio.load(data);
    const Result = [];
    $('#content > main > article:nth-child(n)').each((i, e) => {
        const judul = $(e).find('div > h3 > a').text();
        const image = $(e).find('div > div.poster-container > img').attr('src');
        const studio = $(e).find('div > div.anime-info > ul > li > a').text();
        const adaptasi = 'Di adaptasi dari ' + $(e).find('div > div.anime-info > div.anime-metadata > div.anime-source').text();
        const rilisDate = $(e).find('div > div.poster-container > time').text();
        const tags = [];
        $(e).find('div > ol > li:nth-child(n)').each((i, b) => {
            const a = $(b).find('a').text();
            tags.push(a);
        });
        const linkInfo = $(e).find('div > ul > li:nth-child(2) > a').attr('href');
        Result.push({
            judul,
            tags,
            image,
            studio,
            adaptasi,
            rilisDate,
        });
    });
    return Result;
}