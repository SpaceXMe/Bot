let ytdl = require('ytdl-core');
let fs = require('fs');
let os = require('os');

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Contoh:\n*${usedPrefix + command} https://youtu.be/Xb1-Oh1_msQ*`;
  if (!args[0].match(/youtu/gi)) throw "Masukkan link yt!";

  let chat = global.db.data.chats[m.chat];
  m.react(wmoji);
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('No valid formats found');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`≡ *YOUTUBE DOWNLOADER*\n\n▢ *⚖️Size*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n▢ *🎞️Quality*: ${format.qualityLabel}\n\n▢ The File Exceeds The Download Limit *+${limit} MB*`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;
    const caption = `
乂 *Y O U T U B E*

• *ᴛɪᴛʟᴇ:* ${info.videoDetails.title}
• *ᴅᴜʀᴀᴛɪᴏɴ:* ${info.videoDetails.lengthSeconds}
• *ᴠɪᴇᴡs:* ${info.videoDetails.viewCount}
• *ᴜᴘʟᴏᴀᴅ:* ${info.videoDetails.publishDate}
• *ᴜʀʟ:* ${args[0]}
`.trimEnd();

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('finish', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        `${caption}`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
      m.react(done);
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('*Terjadi error saat convert video.*');
    });
  } catch (error) {
    console.error(error);
    m.reply('Terjadi error saat mendownload video');
  }
};

handler.command = handler.help = ['ytmp4', 'ytv'];
handler.tags = ['downloader'];

module.exports = handler;