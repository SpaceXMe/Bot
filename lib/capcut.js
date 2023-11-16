const cheerio = require("cheerio");
const axios = require("axios");

async function capcut(url) {
	return new Promise(async (resolve, reject) => {

 axios.get("https://ssscap.net/api/download/get-url?url=" + url, {
  headers: {
    "cookie": "sign=94b3b2331a3515b3a031f161e6ce27a7; device-time=1693144685653",
  }
}).then( res => { 
let tes = res.data.url
const parsedUrl = new URL(tes)
let id = parsedUrl.searchParams.get("template_id")

axios("https://ssscap.net/api/download/" + id, {
  headers: {
    "cookie": "sign=4b0366645cd40cbe10af9aa18331a488; device-time=1693145535913"
  }
}).then( yanz => { 
resolve(yanz.data)
   })
 })
})
}

module.exports = capcut