const nodemailer = require('nodemailer');
const { createHash } = require('crypto');

async function sendVerificationEmail(email, verificationCode) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'itzspaceblitz@gmail.com', // Ganti dengan email Anda
        pass: 'whbzibhemvzpkqjd', // Ganti dengan kata sandi email Anda
      },
    });

    const mailOptions = {
      from: 'itzspaceblitz@gmail.com',
      to: email,
      subject: 'Space Verification',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
      <div style="background-image: url('https://telegra.ph/file/2d987fea6d007aea943f0.jpg'); background-size: cover; background-position: center; padding: 20px; border-radius: 10px; text-align: center;">
        <div style="background-color: rgba(255, 255, 255, 0.7); padding: 20px; border-radius: 10px;">
          <h2 style="color: #4CAF50;">Space-MD Verification</h2>
          <p>Dear ${email},</p>
          <p>Thank you for registering with Space-MD. Please use the verification code below to complete your registration:</p>
          <div style="background-color: #e5e5e5; padding: 10px; text-align: center; font-size: 18px; font-weight: bold;">
            ${verificationCode}
          </div>
          <p style="color: #888888;">This verification code will expire in 5 minutes.</p>
          <p>If you did not request this verification, please ignore this email.</p>
          <p><a href="https://wa.me/6282225201437" style="color: #4CAF50;">2023 © SpaceTeam.</a></p>
        </div>
      </div>
    </div>
  `,
};

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return false;
  }
}

function generateVerificationCode() {
  const length = 6;
  const characters = '0123456789';
  let verificationCode = '';
  for (let i = 0; i < length; i++) {
    verificationCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const expirationTime = Date.now() + 5 * 60 * 1000;
  return { code: verificationCode, expiresAt: expirationTime };
}

var emailVerificationCodes = {};

var handler = async (m, { conn, text, usedPrefix, command }) => {
  var user = global.db.data.users[m.sender];
  var name = await conn.getName(m.sender);
  var danz = 'Selamat kamu mendapatkan:\n+100 Limit\n+5 Balance\n+10.000 XP\n+$10 Money';
  var sn = createHash('md5').update(m.sender).digest('hex');
  switch (command) {
    case 'regmail':
      if (!user.registered) {
        if (!text) {
          return conn.reply(m.chat, `Masukkan Alamat Email!\n\nContoh: *${usedPrefix + command} xxx@gmail.com*`, m);
        }
        const email = text.trim();
        const verificationCodeData = generateVerificationCode();
        emailVerificationCodes[m.sender] = verificationCodeData;
        const emailSent = await sendVerificationEmail(email, verificationCodeData.code);
        if (emailSent) {
          conn.reply(m.chat, `Email verifikasi telah dikirim ke ${email}. Silahkan cek kotak masuk anda dan ketik *${usedPrefix}vercode <kode>* untuk memverifikasi pendaftaran anda.`, m);
        } else {
          conn.reply(m.chat, `Tidak dapat mengirim email.`, m);
        }
      } else {
        conn.reply(m.chat, `Kamu telah terdaftar sebelumnya.`, m);
      }
      break;
    case 'vercode':
      if (!text) {
        return conn.reply(m.chat, `Masukkan kode verifikasi yang telah dikirimkan ke email anda.`, m);
      }
      const verificationCode = text.trim();
      const verificationCodeData = emailVerificationCodes[m.sender];
      if (!verificationCodeData) {
        return conn.reply(m.chat, `Anda belum meminta kode verifikasi. Silahkan lakukan pendaftaran terlebih dahulu dengan perintah ${usedPrefix}regmail.`, m);
      }
      if (verificationCodeData.code === verificationCode) {
        if (Date.now() > verificationCodeData.expiresAt) {
          delete emailVerificationCodes[m.sender];
          return conn.reply(m.chat, `Kode verifikasi telah kedaluwarsa. Silahkan kirim ulang kode verifikasi dengan perintah ${usedPrefix}regmail.`, m);
        }

        delete emailVerificationCodes[m.sender];
        user.registered = true;
        user.balance += 5;
        user.money += 10;
        user.limit += 100;
        conn.reply(m.chat, `Daftar berhasil!

╭─「 Info User 」
│ Nama: ${name}
│ Code: ${verificationCode}
│ SN: ${sn}
╰────

*Jika SN kamu lupa ketik ${usedPrefix}ceksn*

${danz}`, m);
      } else {
        conn.reply(m.chat, `Kode verifikasi salah. Silahkan periksa kembali atau kirim ulang kode verifikasi dengan perintah ${usedPrefix}regmail.`, m);
      }
      break;
  }
};

handler.command = handler.help = ['regmail', 'vercode'];
handler.tags = ['main'];
handler.limit = 1;

module.exports = handler;

/*
  * DannTeam
  * ig: @dannalwaysalone
*/