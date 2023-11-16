const fetch = require("node-fetch");
const { generateWAMessageFromContent } = require("@adiwajshing/baileys");

let handler  = async (m, { conn }) => {

const data = generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 35.691081,
  degreesLongitude: 139.776393,
  name: namebot,
  address: wm,
  url: sig,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 100,
  degreesClockwiseFromMagneticNorth: 2,
  caption: 'Halow',
  sequenceNumber: 2,
  timeOffset: 3,
  contextInfo: m
}}, { quoted: m })
return conn.relayMessage(m.chat, data.message, { quoted: m })
}
handler.help = ['location']
handler.tags = ['main', 'info']
handler.command = /^((location|loc|lokasi)1?)$/i

module.exports = handler