let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukkan Daerah!\n\nContoh: *${usedPrefix + command} kalimantan*`
    let dann = await fetch(global.API('lolhuman', '/api/kodepos', { query: text }, 'apikey'))
    let data = await dann.json()
    let res = data.result
    const province = [];
    const city = [];
    const subdistrict = [];
    const urban = [];
    const postalcode = [];
    res.forEach(v => {
      province.push(v.province);
      city.push(v.city);
      subdistrict.push(v.subdistrict);
      urban.push(v.urban);
      postalcode.push(v.postalcode);
    });
    let bgzz = ''
    for (let i = 0; i < res.length; i++) {
        bgzz += `
Provinsi: *${province[i]}*
Kota: *${city[i]}*
Subdistrict: *${subdistrict[i]}*
Urban: *${urban[i]}*
Kodepos: *${postalcode[i]}*

`
    }
    m.reply(bgzz.trim())
}

handler.help = ['kodepos']
handler.tags = ['internet']
handler.command = /^kodepos$/i

module.exports = handler