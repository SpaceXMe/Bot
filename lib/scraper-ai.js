const fetch = require('node-fetch')
const cheerio = require('cheerio')
const { now } = require('./myfunc')

function getResponse(data) {
    let clr = data.split('content":"');
    let resu = clr.map((rs) => rs.split('"},"index"')[0].split('delta":{"')[0]);
    let twt = resu.map((s) => s.split('"},"finish_reason"')[0]);
    let stringText = twt.map((s) => s.split('index":0,'));
    stringText.splice(0, 1);
    const result = stringText.join("").replace(/\\n/g, "\n").replace(/\\/g, "");
    console.log(result);
    return result;
}

async function animedif(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Ojimi/anime-kawai-diffusion",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}

async function stabledif(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}

function blackbox(text) {
  return new Promise(async (resolve, reject) => {
    await axios.post("https://www.useblackbox.io/chat-request-v4", {
      "textInput": text,
      "allMessages": [
        {
          "user": text
        }
      ],
      "stream": "",
      "clickedContinue": false
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      resolve(e?.response)
    })
  })
}

async function ai(text, contentSystem, player = 'Spacers') {
  const payloads = {
    messages: [
      { 
        role: "system", 
        content: contentSystem 
      },
    ],
    model: "gpt-3.5-turbo",
    presence_penalty: 0,
    stream: true,
    temperature: 0.7
  };
  const question = encodeURIComponent(text);
  payloads["messages"].push({
  	role: "user",
  	content: question,
  	name: player.replace(/\s/g, '_').replace(/[?#$\/*&:;!]/g, ''),
  });

  try {
    const { data } = await axios.post('https://postapi.lbbai.cc/v1/chat/completions', payloads);
    const res = getResponse(data);
    return {
      message: res
    };
  } catch (error) {
    console.log('Error:', error);
    return {
      error: 'An error occurred.'
    };
  }
}

module.exports = { 
    animedif, 
    stabledif, 
    blackbox,
    ai
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.green(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})