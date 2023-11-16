let anon = require('../lib/menfess')

module.exports = {
    async before(m, { match }) {
        // if (match) return !1
      if (!m.chat.endsWith('@s.whatsapp.net')) return !0
        let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(m.sender))
        if (room) {
          if (/^.*(left(confess?)?)/.test(m.text)) return
          let other = room.other(m.sender)
          m.copyNForward(other, true)
          m.reply('Pesan berhasil terkirim!\n\nKetik: *#left* untuk mengakhiri confess')
        }
        return !0
    }
}

/*
   * Itz Bagzz
   * Respon confess
   * Follow instagram: @itzmebgz
*/