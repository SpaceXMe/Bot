let handler = async function (m, { conn, command }) {

m.react('😁')
let heyy = await fetchJson(`https://raw.githubusercontent.com/KirBotz/nyenyee/master/${command.toLowerCase().replace(/kaneki/g, 'keneki').replace(/kakashi/g, 'kakasih')}.json`)
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
conn.sendMessage(m.chat, { image: { url: yeha }}, { quoted: m })
}

handler.command = handler.help = ['ahegao', 'akira', 'akiyama', 'ana', 'asuna', 'ayuzawa', 'boruto', 'chiho', 'chitoge', 'cosplayloli', 'cosplaysagiri', 'doraemon', 'eba', 'emilia', 'ero', 'erza', 'gremory', 'hestia', 'hinata', 'husbu', 'inori', 'isuzu', 'itachi', 'itori', 'justina', 'kaga', 'kagura', 'kakashi', 'kaori', 'kaneki', 'kotori', 'kurumi', 'madara', 'mikasa', 'mikey', 'minato', 'naruto', 'nekonime', 'nezuko', 'onepiece', 'pokemon', 'sakura', 'sasuke', 'shina', 'shinka', 'shinomiya', 'shizuka', 'shota', 'tejina', 'toukachan', 'tsunade', 'yotsuba', 'yuki', 'yumeko']
handler.tags = ['anime']

handler.limit = true

module.exports = handler

const fetchJson = async (url, options) => {
  options ? options : {}
  try {
    const res = await axios({
      method: "GET",
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.39 Safari/537.36'
      },
      ...options
    })
    return res.data
  } catch (error) {
    console.error(error?.message)
  }
}