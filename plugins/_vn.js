let handler = m => m;

const ohayo = /^((s(wls|wsl|ela)mat)?((\s)?(pagii?i?i?i?|oagi))|ohai?yo)$/i;
const oy = /^(oy|oi|oyy|oii)$/i;
const thx = /^(terima(\s)?kasih|makasih|(thx|thanks?)(\s)?(you)?)/i;
const test = /^(o+m+a+g+a+)$/i;
const bot = /^(bots?)$/i;
const hi = /^(h(e+(y+|i+)|i+|a+i+|a+y+)(l+)?(i+)?(o+)?(w+)?)$/i;


handler.before = async function (m) {
  if (m.isBaileys && m.fromMe) return;
  if ((m.chat || m.key.remoteJid).endsWith('status@broadcast')) return;
  const isOhayo = ohayo.exec(m.text);
  const isOy = oy.exec(m.text);
  const isThx = thx.exec(m.text);
  const isTest = test.exec(m.text);
  const isBot = bot.exec(m.text);
  const isSapa = hi.exec(m.text);
  
  const reply = async (text) => {
    await this.sendPresenceUpdate('composing', m.chat)
    m.reply(text)
  }
  const sendVn = async (path) => {
    await this.sendPresenceUpdate('recording', m.chat)
    this.sendFile(m.chat, path, '', null, m, true, { type: "audioMessage", ptt: true, fileLength: fsizedoc })
  }
  
  if (isOhayo) sendVn(pickRandom(['./mp3/ohayo.mp3', './mp3/ohayo2.mp3']))
  if (isOy) sendVn('./mp3/oy.mp3')
  if (isThx) {
    if (m.isGroup) {
      if (m.quoted.fromMe) {
        reply('Sama-sama kk')
      }
    } else {
      reply('Sama-sama kk')
    }
  }
  if (isTest) {
    m.react('😱')
    sendVn('./mp3/omaga.mp3')
  }
  if (isBot) {
    let bgzz = {
      scheduledCallCreationMessage: {
        callType: 2,
        scheduledTimestampMs: 999999999999999,
        title: `Ada yang bisa ${conn.user.name} bantu?`
      }
    }
    this.relayMessage(m.chat, bgzz, {})
  }
  if (isSapa) reply('What happened?')
  return !0
}

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}