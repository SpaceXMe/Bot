// Import required modules
const { MessageType } = require("@adiwajshing/baileys");
const { default: axios } = require("axios");
const puppeteer = require("puppeteer");
const fs = require("fs");

var handler = async (m, { conn }) => {
  try {
    // Your logic to handle the command
    if (!m.quoted || !m.quoted.fromMe) {
      return conn.reply(
        m.chat,
        "Reply to the message that contains the link you want to take a screenshot of with the command.",
        m
      );
    }

    // Extract the URL from the quoted message
    const quotedMessage = await conn.getMessage(m.chat, m.quoted.id);
    const url = quotedMessage.message;

    // Launch puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the specified URL
    await page.goto(url, { waitUntil: "networkidle2" });

    // Take a screenshot of the webpage
    const screenshotBuffer = await page.screenshot();

    // Close the puppeteer browser
    await browser.close();

    // Send the screenshot as an image message
    conn.sendMessage(m.chat, screenshotBuffer, MessageType.image, {
      quoted: m,
      caption: "Here is the screenshot of the webpage!",
    });
  } catch (e) {
    console.error("Error:", e);
    conn.reply(m.chat, "An error occurred while taking the screenshot.", m);
  }
};

handler.command = handler.help = ["screenshot"];
handler.tags = ["tools"];

module.exports = handler;