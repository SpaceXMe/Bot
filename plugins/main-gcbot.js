let handler = async (m, { conn }) => {
m.mediaReply(sgc)
}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i

module.exports = handler
