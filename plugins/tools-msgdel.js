let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Uhm.. Where's the text?\n\nExample:\n*${usedPrefix + command} test*`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `*"${text}"* Not listed!`
    delete msgs[text]
    m.reply(`Successfully delete message by name\n*"${text}"*`)
}
handler.help = ['delmsg']
handler.tags = ['tools']
handler.command = /^(-|del)(all|msg|video|audio|img|stic?ker|gif)$/i
handler.premium = true

module.exports = handler