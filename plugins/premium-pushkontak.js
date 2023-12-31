let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    command
}) => {
if (!text && !m.quoted) return m.reply("Input text\nReply pesan")
    let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    let count = get.length;
    let sentCount = 0;
    m.reply('Tunggu Sebentar...');
    for (let i = 0; i < get.length; i++) {
        setTimeout(function() {
            if (text) {
                conn.sendMessage(get[i], {
                    text: text.toString()
                });
            } else if (m.quoted) {
                conn.copyNForward(get[i], m.getQuotedObj(), false);
            } else if (text && m.quoted) {
                conn.sendMessage(get[i], {
                    text: text.toString() + "\n" + m.quoted.text
                });
            }
            count--;
            sentCount++;
            if (count === 0) {
                m.reply(`Berhasil Pushkontak!\nJumlah terkirim: *${sentCount}*`);
            }
        }, i * 1000); // delay setiap pengiriman selama 1 detik
    }
}
handler.command = handler.help = ['pushkontak']
handler.tags = ['premium']
handler.premium = true
handler.group = true
module.exports = handler