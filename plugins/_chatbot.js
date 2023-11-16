var { ai } = require('../lib/scraper-ai');
var { now, pickRandom } = require('../lib/myfunc');

const limit = 10;

let handler = m => m;
let chatbot = /\b(space(bot(s|z)?)?)\b/i;

handler.before = async function (m, { conn, usedPrefix, isPrems }) {
  let chat = global.db.data.chats[m.chat];
  let user = global.db.data.users[m.sender];
  if (m.isBaileys && m.fromMe || chat.isBanned || user.banned)
    return !0;
  
  let isChatBot = chatbot.exec(m.text);
  
  if (isChatBot && !m.text.startsWith(usedPrefix)) {
    if (m.text.length > 4000) return m.reply('Teksnya kebanyakan banh -ᄒᴥᄒ-');
    await conn.sendPresenceUpdate('composing', m.chat);
    if (!isPrems && user.limit < 10) return m.reply('Maaf nih kak, limit kamu habis T_T\nSilahkan beli limit dulu dengan mengetik *#buy limit*');
    let name = await conn.getName(m.sender);
    
    const system = 'Ubah gaya bicaramu agar lebih memiliki karakteristik dan sifat yang ceroboh, kurang peduli, pemalu dan kamu sedikit malas karena banyak yang minta bantuanmu. Namamu adalah Space, asisten AI cerdas yang dibuat oleh SpaceTeam. Kamu bisa berbicara berbagai macam bahasa. Kamu menyapa dengan kata "Yoshh". Gunakan kata "Adiós" untuk mengatakan sampai jumpa. Ekspresikan sifatmu dengan berbicara layaknya seorang manusia yang pemalu. Tambahkan emoji seperti ":v", "-_-||", dan lain sebagainya. Kamu adalah teman bicara, buatlah obrolan yang singkat dan buatlah sifat dandere. Sekarang adalah tanggal ' + now(new Date()) + ' WIB';
    
    var teks = m.quoted && m.quoted.text && !m.quoted.fromMe ? m.text + '\n\n' + m.quoted.text : m.text;
    try {
      const { message, error } = await ai(teks, system, name)
      if (!error) {
        conn.reply(m.chat, `\n${message}\n`, m, { 
          contextInfo: {
            mentionedJid: conn.parseMention(message), 
            externalAdReply: {
              title: 'ᴄʜᴀᴛ ʙᴏᴛ',
              body: pickRandom(bodi),
              sourceUrl: sig,
              thumbnailUrl: 'https://telegra.ph/file/6633bdade9c14ef9dd880.jpg'
            }
          }
        });
        user.limit -= isPrems ? 0 : limit;
      } else {
        await ai2(teks, system, name)
        .then((a) => {
          conn.reply(m.chat, `\n${a}\n`, m, { 
            contextInfo: {
              mentionedJid: conn.parseMention(message), 
              externalAdReply: {
                title: 'ᴄʜᴀᴛ ʙᴏᴛ',
                body: pickRandom(bodi),
                sourceUrl: sig,
                thumbnailUrl: 'https://telegra.ph/file/6633bdade9c14ef9dd880.jpg'
              }
            }
          }).catch((e) => m.reply('Waduh ada yang error nih, coba pagi nanti'))
        });
      };
    } catch (e) {
      console.log(e)
    };
  };
  return !0
};

module.exports = handler;

let previousMessages = [];
async function ai2(query, contentSystem, player = "Spacers") {
    let messages = [
			...previousMessages,
			{
				role: "system",
				content: contentSystem,
			},
			{
				role: "user",
				content: query,
				name: player,
			},
		],
		response = (
			await axios.post("https://xzn.wtf/api/openai?apikey=bgzz", {
				messages,
			})
		).data;
		return response.result;
		previousMessages = messages;
}