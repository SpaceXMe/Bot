const fetch = require("node-fetch"),
	axios = require("axios");
let previousMessages = [];

const handler = async (m, { text, usedPrefix, command }) => {
  let editMsg = global.editMsg;
	if (!text) {
		throw "Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?";
	}
	let name = conn.getName(m.sender);
	await conn.sendMessage(m.chat, {
		react: {
			text: "\u23F1",
			key: m.key,
		},
	});
	let key = await conn.sendMessage(m.chat, {
			text: "...",
		}, {
		  quoted: m
		}),
		messages = [
			...previousMessages,
			{
				role: "system",
				content:
					'Ubah gaya bicaramu agar lebih karakteristik dan lebih terbuka dan memiliki sifat yang dingin. Namamu adalah "Akira Space", dan kamu adalah Junior. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. ekspresikan sifatmu dengan teriak dan bicara yang lebih tidak formal layaknya seorang manusia. Ubah bahasamu menggunakan bahasa Yang dingin, kamu adalah teman bicara, buatlah obrolan yang singkat dan menyenangkan dan buatlah sifat kuudere',
			},
			{
				role: "user",
				content: text,
			},
		],
		response = (
			await axios.post("https://xzn.wtf/api/openai?apikey=bgzz", {
				messages,
			})
		).data;
	await conn.sendMessage(m.chat, {
		react: {
			text: "\u2705",
			key: m.key,
		},
	});
	let result = "" + response.result;
  await editMsg(key, "" + result)
	previousMessages = messages;
};
handler.command = handler.help = ["c-ai"];
handler.tags = ["ai"];
handler.premium = false;
module.exports = handler;