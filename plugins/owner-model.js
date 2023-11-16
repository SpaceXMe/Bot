const delay = [1000, 2000, 3000, 4000, 5000];

async function handler(m, { conn }) {
  const model = JSON.parse(fs.readFileSync('./database/Model/txt2img.json', 'utf-8'));
  const lll = await conn.reply(m.chat, 'Please wait...', m);
  let str = '';
  
  for (let obj of model) {
    for (let key in obj) {
      str += `*${key}*: ${obj[key]}\n`;
    }
    str.trim();
  }
  await new Promise((resolve) => {
    setTimeout(async() => {
      await conn.relayMessage(m.chat, {
        protocolMessage: {
          type: 14,
          key: lll,
          editedMessage: {
            conversation: str
          }
        }
      }, { quoted: m });
      resolve();
    }, delay[Math.floor(Math.random() * delay.length)]);
  });
}

handler.help = ['model']
handler.tags = ['owner']
handler.command = /^model$/i

handler.rowner = true

module.exports = handler