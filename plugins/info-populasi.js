let handler = async (m, { conn }) => {
  try {
    let population = await fetch('https://vihangayt.me/details/population')
    let str = await population.json()
    let data = str.data
    let capt = `
• Total Populasi Saat Ini
*Total:* ${data.current.total}
*Laki-laki:* ${data.current.male}
*Perempuan:* ${data.current.female}

• Tahun Ini
*Lahir:* ${data.this_year.births}
*Meninggal:* ${data.this_year.deaths}

• Hari Ini
*Lahir:* ${data.today.births}
*Meninggal:* ${data.today.deaths}
`.trim()
    m.mediaReply(capt)
  } catch (error) {
    console.error(error)
    m.reply(error?.message)
  }
}

handler.help = ['population']
handler.tags = ['info']
handler.command = /^popu(lasi|lation)$/i

module.exports = handler