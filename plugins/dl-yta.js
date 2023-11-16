const ytdl = require("ytdl-core");
const yts = require("yt-search");
const fs = require("fs");
const { pipeline } = require("stream");
const { promisify } = require("util");
const os = require("os");

const streamPipeline = promisify(pipeline);
let { shortNumber } = require('../lib/myfunc');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan URL atau judul lagu!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Psycho*`);
  m.react('🎧');
  try {
    let search;
    if (/https:\/\/youtu/i.test(text)) {
      search = "https://youtube.com/watch?v=" + await ytdl.getURLVideoID(text);
    } else {
      search = text;
    };
    let vid = await yts(search);
    vid = vid.videos[0];
    if (!vid) throw 'No audio found';
    
    const { videoId, url, title, description, thumbnail, seconds, duration, ago, views, author } = vid;
    
    let pesan = {
        key: {
          fromMe: false,
          participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {})
        },
        message: {
          extendedTextMessage: {
            text: title,
            title: wm2
          }
        }
      }
    let captionVid = `
▣ *Author:* ${author.name}
▣ *Title:* ${title}
▣ *Durasi:* ${duration}
▣ *Upload:* ${ago}
▣ *Views:* ${shortNumber(views, 'en-US')} views
▣ *Link:* ${url}
    
*ᴀᴜᴅɪᴏ sᴇᴅᴀɴɢ ᴅɪᴋʀɪᴍ...*
`;
    await conn.sendMessage(m.chat, {
        text: captionVid,
        contextInfo: {
          mentions: [m.sender],
          externalAdReply: {
            title: conn.user.name,
            body: wm,
            mediaUrl: url,
            thumbnailUrl: thumbnail,
            sourceUrl: url,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });

    if (seconds >= 3600) {
      return m.reply('Durasi *Video/Audio* lebih dari 1 jam!')
    } else {
      const audioStream = await ytdl(url, {
        filter: 'audioonly',
        quality: 'highestaudio'
      });
      const tmpDir = os.tmpdir();
      const filename = `${tmpDir}/${title}.mp3`;
      const writeableStream = fs.createWriteStream(filename);
      await streamPipeline(audioStream, writeableStream);
      await conn.sendFile(m.chat, filename, `${title}.mp3`, null, pesan, false, {
        mimetype: 'audio/mpeg',
        fileName: title + '.mp3',
        asDocument: global.db.data.chats[m.chat].useDocument,
        contextInfo: {
          mentions: [m.sender]
        }
      })
      fs.unlinkSync(filename, (err) => {
        if (err) {
          console.log(`Failed to delete ${filename}`)
        } else {
          console.log(`Successfully deleted ${filename}`)
        }
      })
    };
  } catch (error) {
    console.log(error);
    m.reply('Internal server down')
  };
};

handler.command = handler.help = ["play", "yta", "ytmp3"];
handler.tags = ["downloader"];

handler.exp = 0;

module.exports = handler;