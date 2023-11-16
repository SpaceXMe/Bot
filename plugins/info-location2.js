let handler = async (m, { conn }) => {
  var gwehj = '*sʜᴀʀᴇʟᴏᴄ ᴋᴀʜ*'
  await conn.relayMessage(m.chat,
  { liveLocationMessage: {
    degreesLatitude: 35.680011,
    degreesLongitude: 139.766483,
    accuracyInMeters: 0,
  degreesClockwiseFromMagneticNorth: 2,
  caption: gwehj,
  sequenceNumber: 2,
  timeOffset: 3,
  contextInfo: m,
  }}, { quoted: m })
}
handler.help = ['location2']
handler.tags = ['main', 'info']
handler.command = /^((loc|location)2)$/i
handler.group = true

module.exports = handler