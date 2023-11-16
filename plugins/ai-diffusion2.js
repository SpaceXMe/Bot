var AI = require("stable-diffusion-cjs");

async function handler(m, {
    conn,
    text,
    usedPrefix,
    command
}) {
    if (!text) {
        return conn.reply(m.chat, `Masukkan Prompt!\n\nContoh: *${usedPrefix + command} cat and dog*`, m);
    }
    m.reply('_Generating Image..._');
    try {
        const patterns = text.split(',');
        for (const pattern of patterns) {
            AI.generate(pattern.trim(), async (result) => {
                if (result.error) {
                    conn.reply(nomorown + '@s.whatsapp.net', result.error, m);
                    return;
                }
                for (let i = 0; i < result.results.length; i++) {
                    await new Promise((resolve) => {
                      setTimeout(async() => {
                        var data = result.results[i].split(",")[1];
                        var buffer = Buffer.from(data, "base64");
                        conn.sendFile(m.chat, buffer, 'diffusion.png', 'Media: ' + (i + 1), m);
                        resolve();
                      }, 1000)
                    });
                }
            });
        }
    } catch (e) {
        console.log(e);
    }
}

handler.help = ['diffusion2'];
handler.tags = ['maker'];
handler.command = /^(diff(usion)?2)$/i;

handler.premium = true;

module.exports = handler;