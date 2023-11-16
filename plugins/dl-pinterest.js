var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan URL!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://pin.it/31Tw9Th*`);
  m.react(rwait);
  try {
    const { data } = await axios.get(global.API('neoxr', '/api/pin', { url: text }, 'apikey'));
    const { type, size, url } = data.data;
    (type == 'mp4' ? conn.sendMessage(m.chat, { video: { url: url }, caption: `• *Type*: ${type}\n• *Size*: ${size}` }) : conn.sendMessage(m.chat, { image: { url: url }, caption: `• *Type*: ${type}\n• *Size*: ${size}` }))
  } catch (e) {
    console.log(e);
    m.reply('Error : Internal server down!');
  }
};

handler.help = ['pindl'];
handler.tags = ['downloader'];
handler.command = /^(pin(terest)?(dl|down(load)?)|(dl|down(load)?)pin(terest)?)$/i;

handler.limit = true;

module.exports = handler;

async function pinterestdl(url) {
  res = await axios(
    "https://www.expertsphp.com/facebook-video-downloader.php",
    {
      method: "POST",
      data: new URLSearchParams(Object.entries({ url })),
      headers: {
        "user-agent":
          "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
      },
    }
  );

  result = res.data.split(`src="https://v1.pinimg`)[1].split(`"`)[0];

  return "https://v1.pinimg" + result;
}