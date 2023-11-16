let handler = m => m
const sus = /^(([â€ŽxzXZ/i!#\$%\+Â£Â¢â‚¬Â¥\^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â®:;\?&\.\\\-])?(bokep|bkp|bokp|bkep))/i

handler.before  = async function (m) {
  if (m.isBaileys && m.fromMe) return
    !0
  if ((m.chat || m.key.remoteJid).endsWith('status@broadcast')) return;
  const isSus = sus.exec(m.text);
  if (isSus) {
    let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => hwaifu)
  	this.sendFile(m.chat, './database/Sticker/sus.webp', '', null, m, false, {
  	contextInfo: {
  	externalAdReply: {
  	showAdAttribution: true,
    mediaUrl: sig,
    description: wm,
    title: 'Ngapain Om?',
    body: wm,
    thumbnailUrl: pp,
    sourceUrl: sgc,
  	}}})
  }
  return !0
}

module.exports = handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}