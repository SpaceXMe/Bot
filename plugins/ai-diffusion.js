const axios = require("axios");

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw ('Masukkan teks!')
m.react(rwait)
const params = {
  apikey: global.rose,
  prompt: text,
	negative_prompt: "(worst quality:1.3, low quality:1.3), extra fingers, extra hands, extra limbs, artist name, bad hands, bad legs",
	ratio: "9:16",
	cfg: 7,
	model_id: "anythingv3",
	seed: null,
	json: true,
};

const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/stable/diffusion",
		method: "GET",
		params,
	})
	.catch((e) => e?.response);

const { status, message, result, models } = data;

if (!status) {
	m.reply(message);
	return console.error(data);
}

const { base64Image, is_nsfw, mimetype } = result;

const image_buffer = Buffer.from(base64Image, "base64");

if (is_nsfw && !global.db.data.chats[m.chat].antiNsfw) {
	m.reply("The result is contains NSFW");
} else {
	conn.sendMessage(m.chat, { image: image_buffer, caption: `Prompt: *${text}*`}, { quoted: m });
}
};
handler.help = ['diffusion'];
handler.tags = ['ai'];
handler.command = /^(diff?(usion)?|animediff?)$/i;

handler.premium = true;

module.exports = handler;