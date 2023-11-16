var { quotesAnime } = require('../lib/others')
var { pickRandom } = require('../lib/myfunc')

let handler = async (m, { conn }) => {
  await quotesAnime().then((data) => {
    let str = pickRandom(data)
    let me = `
${str.quotes}

~${str.karakter}

*${str.up_at.slice(1)}*
`
    conn.reply(m.chat, `${me}`, m, {
      contextInfo: {
        externalAdReply: {
          title: str.anime,
          body: str.episode,
          thumbnailUrl: "https://i.pinimg.com/originals/d7/ec/6b/d7ec6ba3a154f35b5da8d4e5e489e040.jpg",
          sourceUrl: str.link,
          mediaType: 2
        }
      }
    })
  })
}

handler.help = ['quotesanime']
handler.tags = ['anime', 'quotes']
handler.command = /^(quotes?a?nime|a?nimequotes?)/i

module.exports = handler