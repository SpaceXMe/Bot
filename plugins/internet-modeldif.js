let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
text,
    args
}) => {
if (!Number(text)) return m.reply("Masukan nomornya")
        await m.reply(wait)
        try {
        let res = await fetch('https://civitai.com/api/v1/models')
        let jso = await res.json()
        let resu = jso.items[text].modelVersions[0].images[0].meta.prompt
        await m.reply(resu)
        } catch (e) {
  m.reply(`Tidak dapat menemukan model yang kamu cari`)
  }
}
handler.help = ["modeldif"]
handler.tags = ["internet"]
handler.command = /^(modeldif)$/i

handler.limit = true

module.exports = handler