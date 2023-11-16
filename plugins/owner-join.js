let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!text) throw 'Masukkan link!'
    if (!code) throw 'Link Salah'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Berhasil Join Grup ${res}`)
}
handler.help = ['join [no expired]']
handler.tags = ['owner']

handler.command = /^join$/i
handler.rowner = true

module.exports = handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
