let yts = require('yt-search')
let handler = async (m, { text }) => {
  if (!text) throw 'Cari apa?'
  m.react('🔍')
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  conn.sendMessage(m.chat, {
  text: teks,
  contextInfo: {
  externalAdReply: {
  title: 'YT SEARCH',
  body: '© Space',
  thumbnailUrl: results.all[0].thumbnail,
  sourceUrl: 'https://youtube.com',
  mediaType: 1,
  renderLargerThumbnail: true
  }}}, { quoted: m })
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools', 'internet']
handler.command = /^yts(earch)?$/i
handler.limit = true

module.exports = handler