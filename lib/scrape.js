const cheerio = require('cheerio');
const fetch = require('node-fetch');
const axios = require("axios");
const fs = require("fs");
const chalk = require("chalk");
const qs = require("qs");
const WebSocket = require('ws');
const FormData = require("form-data");
const { fromBuffer } = require("file-type");


function joox(query) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(new Date() / 1000)
        axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_=' + time)
            .then(({ data }) => {
                let result = []
                let hasil = []
                let promoses = []
                let ids = []
                data.itemlist.forEach(result => {
                    ids.push(result.songid)
                });
                for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid=' + ids[i]
                    promoses.push(
                        axios.get(get, {
                            headers: {
                                Cookie: 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                            }
                        })
                            .then(({ data }) => {
                                const res = JSON.parse(data.replace('MusicInfoCallback(', '').replace('\n)', ''))
                                hasil.push({
                                    lagu: res.msong,
                                    album: res.malbum,
                                    penyanyi: res.msinger,
                                    publish: res.public_time,
                                    img: res.imgSrc,
                                    mp3: res.mp3Url
                                })
                                Promise.all(promoses).then(() => resolve({
                                    creator: "DannXD",
                                    status: true,
                                    data: hasil,
                                }))
                            }).catch(reject)
                    )
                }
            }).catch(reject)
    })
}

function rexdl(query) {
    return new Promise((resolve) => {
        axios.get('https://rexdl.com/?s=' + query)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const judul = [];
                const jenis = [];
                const date = [];
                const desc = [];
                const link = [];
                const thumb = [];
                const result = [];
                $('div > div.post-content').each(function (a, b) {
                    judul.push($(b).find('h2.post-title > a').attr('title'))
                    jenis.push($(b).find('p.post-category').text())
                    date.push($(b).find('p.post-date').text())
                    desc.push($(b).find('div.entry.excerpt').text())
                    link.push($(b).find('h2.post-title > a').attr('href'))
                })
                $('div > div.post-thumbnail > a > img').each(function (a, b) {
                    thumb.push($(b).attr('data-src'))
                })

                for (let i = 0; i < judul.length; i++) {
                    result.push({
                        creator: 'DannTeam',
                        judul: judul[i],
                        kategori: jenis[i],
                        upload_date: date[i],
                        deskripsi: desc[i],
                        thumb: thumb[i],
                        link: thumb[i]
                    })
                }
                resolve(result)
            })
    })
}

function nomorhoki(nomor) {
    return new Promise((resolve, reject) => {
        axios({
            headers: {
                type: 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            url: 'https://www.primbon.com/no_hoki_bagua_shuzi.php',
            data: new URLSearchParams(Object.entries({
                nomer: nomor,
                submit: 'Submit!'
            }))
        }).then(({ data }) => {
            let $ = cheerio.load(data)
            let fetchText = $('#body').text().trim()
            let result;
            try {
                result = {
                    nomor_hp: fetchText.split('No. HP : ')[1].split('\n')[0],
                    angka_bagua_shuzi: fetchText.split('Angka Bagua Shuzi : ')[1].split('\n')[0],
                    energi_positif: {
                        kekayaan: fetchText.split('Kekayaan = ')[1].split('\n')[0],
                        kesehatan: fetchText.split('Kesehatan = ')[1].split('\n')[0],
                        cinta: fetchText.split('Cinta/Relasi = ')[1].split('\n')[0],
                        kestabilan: fetchText.split('Kestabilan = ')[1].split('\n')[0],
                        persentase: fetchText.split('Kestabilan = ')[1].split('% = ')[1].split('ENERGI NEGATIF')[0]
                    },
                    energi_negatif: {
                        perselisihan: fetchText.split('Perselisihan = ')[1].split('\n')[0],
                        kehilangan: fetchText.split('Kehilangan = ')[1].split('\n')[0],
                        malapetaka: fetchText.split('Malapetaka = ')[1].split('\n')[0],
                        kehancuran: fetchText.split('Kehancuran = ')[1].split('\n')[0],
                        persentase: fetchText.split('Kehancuran = ')[1].split('% = ')[1].split("\n")[0]
                    },
                    notes: fetchText.split('* ')[1].split('Masukan Nomor HP Anda')[0]
                }
                } catch {
                    result = `Nomor "${nomor}" tidak valid`
                }
                resolve(result)
            }).catch(reject)
    })
}

function wattpad(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.wattpad.com/search/' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const result = [];
				const linkk = [];
				const judull = [];
				const thumb = [];
				const dibaca = [];
				const vote = [];
				const bab = [];
				$('ul.list-group > li.list-group-item').each(function(a, b) {
					linkk.push('https://www.wattpad.com' + $(b).find('a').attr('href'))
					thumb.push($(b).find('img').attr('src'))
				})
				$('div.story-card-data.hidden-xxs > div.story-info > ul > li:nth-child(1) > div.icon-container > div > span.stats-value').each(function(e, f) {
					baca = $(f).text();
					dibaca.push(baca)
				})
				$('div.story-card-data.hidden-xxs > div.story-info > ul > li:nth-child(2) > div.icon-container > div > span.stats-value').each(function(g, h) {
					vot = $(h).text();
					vote.push(vot)
				})
				$('div.story-card-data.hidden-xxs > div.story-info > ul > li:nth-child(3) > div.icon-container > div > span.stats-value').each(function(i, j) {
					bb = $(j).text();
					bab.push(bb)
				})
				$('div.story-card-data.hidden-xxs > div.story-info > div.title').each(function(c, d) {
					titel = $(d).text();
					judull.push(titel)
				})
				for (let i = 0; i < linkk.length; i++) {
					if (!judull[i] == '') {
						result.push({
							judul: judull[i],
							dibaca: dibaca[i],
							divote: vote[i],
							thumb: thumb[i],
							link: linkk[i]
						})
					}
				}
				resolve(result)
			})
			.catch(reject)
	})
}

async function mangatoon(search) {
	if (!search) throw "No Querry Input! Bakaa >\/\/<";
	try {
		const res = await axios.get(`https://mangatoon.mobi/en/search?word=${search}`, {
			method: "GET",
			headers: {
				"User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
			}
		});
		const hasil = [];
		const $ = cheerio.load(res.data);
		$('div.recommend-item').each(function(a, b) {
			let comic_name = $(b).find('div.recommend-comics-title > span').text();
			let comic_type = $(b).find('div.comics-type > span').text().split(/ /g).join("");
			let comic_url = $(b).find('a').attr('href');
			let comic_thumb = $(b).find('img').attr('src');
			const result = {
				status: res.status,
				creator: "JER OFC",
				comic_name,
				comic_type,
				comic_url,
				comic_thumb: 'https://mangatoon.mobi' + comic_thumb
			};
			hasil.push(result);
		});
		let filt = hasil.filter(v => v.comic_name !== undefined && v.comic_type !== undefined);
		return filt;
	} catch (eror404) {
		throw "=> Error =>" + eror404;
	}
}

async function chara(query) {
	return new Promise((resolve, reject) => {
		axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
			.then((data) => {
				const $ = cheerio.load(data.data)
				const result = [];
				const judul = [];
				const link = [];
				const thumb = [];
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
					deta = $(b).text();
					judul.push(deta)
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
					link.push('https://www.anime-planet.com' + $(b).attr('href'))
				})
				$('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
					thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'})
    .then(res => res.text())
    .then(res => {
      let $ = cheerio.load(res, {
        xmlMode: false
      });
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1],
      };
      resolve({
        status: 200,
        result: {
	        title,
	        URL,
	        duration,
	        image,
	        videoType,
	        videoWidth,
	        videoHeight,
	        info,
	        files
        }
      })
    })
    .catch(err => reject({code: 503, status: false, result: err }))
  })
}

async function tiktokdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        query: url
      })
    )
    await axios.post("https://lovetik.com/api/ajax/search", payload, {
      headers: {
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(({ data }) => {
      resolve(data)
    })
    .catch((e) => {
      reject(e.data)
    })
  })
}
/*
* SCRAPE BY Arifzyn 
*/

async function tiktokStory(username) {
  return new Promise(async (resolve, reject) => {
    const uuid = encodeURIComponent(`@${username}`)
    await axios.get(`https://tiktok-video-no-watermark2.p.rapidapi.com/user/posts?unique_id=${uuid}&count=1000`, {
      headers: {
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
        "X-Rapidapi-Host": "tiktok-video-no-watermark2.p.rapidapi.com",
        "X-Rapidapi-Key": "533115be6amsh2515f73f171c6f1p160d9djsn833294e42f10"
      }
    })
    .then(({ data }) => {
      resolve(data.data)
    })
    .catch((e) => {
      reject(e.data)
    })
  })
}

async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        media: mediaURL
      }
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}

function igstory(username) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/instagram-story-downloader.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': 'https://www.instagram.com/' + username,
                        'action': 'story',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

async function kusoNime(query) {
    return new Promise(async (resolve, reject) => {
      const optionsGet = {
        method: 'GET',
        headers: {
           'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
        }
    }
    const getHtml = await fetch('https://kusonime.com/?s=' + query + '&post_type=anime', optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const url = []
    $('div > div > ul > div > div > div').each(function() {
      url.push($(this).find('a').attr('href'))
    })
    const randomUrl = url[Math.floor(Math.random() * url.length)]
    const getHtml2 = await fetch(randomUrl, optionsGet).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    resolve({
      status: 200,
      result: {
        title: $$('.vezone > .venser').find('.jdlz').text(),
        thumb: $$('.vezone > .venser').find('div > img').attr('src'),
        views: $$('.vezone > .venser').find('div > div > span').text().trim().replace(' Views', ''),
        genre: $$('.vezone > .venser').find('.lexot > .info > p').eq(1).text().replace('Genre : ', ''),
        seasons: $$('.vezone > .venser').find('.lexot > .info > p').eq(2).text().replace('Seasons : ', ''),
        producers: $$('.vezone > .venser').find('.lexot > .info > p').eq(3).text().replace('Producers: ', ''),
        type: $$('.vezone > .venser').find('.lexot > .info > p').eq(4).text().replace('Type: ', ''),
        status: $$('.vezone > .venser').find('.lexot > .info > p').eq(5).text().replace('Status: ', ''),
        rating: $$('.vezone > .venser').find('.lexot > .info > p').eq(7).text().replace('Score: ', ''),
        duration: $$('.vezone > .venser').find('.lexot > .info > p').eq(8).text().replace('Duration: ', ''),
        release: $$('.vezone > .venser').find('.lexot > .info > p').eq(9).text().replace('Released on: ', ''),
        desc: $$('.vezone > .venser').find('p').eq(10).text(),
        url: randomUrl
      }
    })
  })
}

async function trendtwit(country) {
	return new Promise((resolve, reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hastag = [];
				const tweet = [];
				const result = [];
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b) {
					deta = $(b).text()
					hastag.push(deta)
				})
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b) {
					deta = $(b).text()
					tweet.push(deta)
				})
				num = 1
				for (let i = 0; i < hastag.length; i++) {
					result.push({
						rank: num,
						hastag: hastag[i],
						tweet: tweet[i]
					})
					num += 1
				}
				resolve({
					country: country,
					result: result
				})
			})
			.catch(reject)
	})
}

async function dafontSearch(query) {
  const base = 'https://www.dafont.com'
  const res = await axios.get(`${base}/search.php?q=${query}`)
  const $ = cheerio.load(res.data)
  const hasil = []
  const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
  $('div').find('div.container > div > div.preview').each(function(a, b) {
    $('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) {
      $('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) {
        let link = `${base}/` + $(b).find('a').attr('href')
        let judul = $(d).text() 
        let style = $(f).text()
        hasil.push({ judul, style, link, total})
      })
    })
  })
  return hasil
}

async function dafontDown(link) {
  const des = await axios.get(link)
  const sup = cheerio.load(des.data)
  const result = []
  let style = sup('div').find('div.container > div > div.lv1right.dfbg').text() 
  let judul = sup('div').find('div.container > div > div.lv1left.dfbg').text()
  let isi
  try {
    isi = sup('div').find('div.container > div > span').text().split('.ttf')
    output = sup('div').find('div.container > div > span').eq(0).text().replace('ttf' , 'zip')
  } catch {
    isi = sup('div').find('div.container > div > span').text().split('.otf')
    output = sup('div').find('div.container > div > span').eq(0).text().replace('otf' , 'zip')
  }
  let down = 'http:' + sup('div').find('div.container > div > div.dlbox > a').attr('href')
  result.push({ style, judul, isi, output, down})
  return result
}

async function IMGEnhance(url, scaleNumber = 2) {
  const { data } = await axios(`https://toolsapi.spyne.ai/api/forward`, {
    method: "POST",
    data: {
      image_url: url,
      scale: scaleNumber,
      save_params: {
        extension: ".png",
        quality: 100,
      },
    },
    headers: {
      "content-type": "application/json",
      accept: "*/*",
    },
  });
  return data;
}

function upscale(url) {
    return new Promise((resolve, reject) => {
      axios.request({
        method: 'POST',
        url: 'https://api.picsart.io/tools/1.0/upscale/enhance',
        headers: {
          accept: 'application/json',
          'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
          'X-Picsart-API-Key': 'ju0e1i0ILCIjjA5CwNitGCeppbPfMqex'
        },
        data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="upscale_factor"\r\n\r\n2\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="format"\r\n\r\nJPG\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="image_url"\r\n\r\n${url}\r\n-----011000010111000001101001--\r\n\r\n`
      }).then(({ data }) => {
          resolve(data)
        })
        .catch((e) => {
          reject(e)
        })
    })
}

async function tiklydown(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://developers.tiklydown.me/api/download?url=${url}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

async function anime4k(video) { // buffer // base64
  let wss = 'wss://kadirnar-anime4k.hf.space/queue/join';

  /*

Scraper by YanzBotz 
Jangan asal claim

Cara pakai
anime4k("vid.mp4")

Output : https://kadirnar-anime4k.hf.space/file= + message.output.data[1].name
  */

  return new Promise(async(resolve, reject) => {
    let vid = await fs.readFileSync(video)
    let size = await fs.statSync(video)
    console.log(size)
    let result = {}
    let name = Math.floor(Math.random() * 100000000000000000) + '.mp4'	
    let send_has_payload = {
      "session_hash": "31c4pm5evel",
      "fn_index": 2
    }
    let send_data_payload = {
       "fn_index":2,
          "data":
             [
                  {
                     "name": name,
                     "size": size.size,
                     "data":"data:video/mp4;base64," + vid.toString('base64')
                  }
             ],
            "session_hash":"5wzu0avomyf"
    }

    const ws = new WebSocket(wss);
    ws.onopen = function() {
     console.log("Connected to websocket")
    };

    ws.onmessage = async function(event) {
      let message = JSON.parse(event.data);
         
          ws.send(JSON.stringify(send_data_payload));
          

      switch (message.msg) {
         case 'process_completed':        
            result.base64 = message.output.data
         break;
      }
    };

    ws.onclose = function(event) {
      if (event.code === 1000) {
        console.log('Process completed️');
      } else {
        msg.reply('Err : WebSocket Connection Error:\n');
      }
      resolve(result)
    };
  })    
}

async function tiktok(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
            let a = cheerio.load(tokenn.data);
            let token = a("#token").attr("value");
            const param = {
                url: url,
                token: token,
            };
            const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            });
            let res = {
                status: 200,
                title: data.title,
                thumbnail: "https:" + data.thumbnail,
                duration: data.duration,
                media: data.medias,
            };
            resolve(res);
        } catch (e) {
            reject(e);
        }
    });
}

async function krakenfiles(url) {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const fileHash = $("div.col-xl-4.col-lg-5.general-information").attr("data-file-hash")
    const tokens = $("input[name='token']").val()
    const result = {} 
    const payload = new URLSearchParams(
      Object.entries({
        token: tokens
      })
    )
    const { data: res } = await axios.post("https://s5.krakenfiles.com/download/" + fileHash, payload)
    result.title = $("div.coin-info > .coin-name > h5").text().trim()
    $("div.nk-iv-wg4-sub > .nk-iv-wg4-overview.g-2 > li").each(function () {
      const param = $(this).find("div.sub-text").text().replace(/ /g, '').toLowerCase()
      const value = $(this).find("div.lead-text").text().trim()
      result[param] = value 
    })
    result.views = $("div.views-count").text().trim()
    result.downloads = $("div.lead-text.downloads-count > strong").text().trim()
    result.fileHash = fileHash
    result.url = res.url
    resolve(result)
  })
}

async function simsimi(text, lang = 'id') {
  return new Promise(async (resolve) => {
     try {
        let json = await (await axios.post('https://simsimi.vn/web/simtalk', `text=${encodeURI(text)}&lc=${lang}`, {
           headers: {
              'Accept': '*/*',
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Referer': 'https://simsimi.net/',
              'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36'
           }
        })).data
        if (json.success.match(new RegExp('Aku tidak mengerti', 'g'))) return resolve({
           creator: global.creator,
           status: false
        })
        resolve({
           cretor: global.creator,
           status: true,
           msg: json.success
        })
     } catch (e) {
        console.log(e)
        return resolve({
           creator: global.creator,
           status: false
        })
     }
  })
}

async function sfilemobi(url) {
    return new Promise(async(resolve, reject) => {
		const html = await axios.get(url)
		.then(({ data }) => { 
	    const $ = cheerio.load(data);					
	    const urls = $('#download').attr('onclick');
			const results = {
				title: $("div.intro-container.w3-blue-grey h1").text().trim(),
				mimetype: $("div.list").eq(0).text().split('-')[1],
				url: $('#download').attr('href') + `&k=${urls.match(/(?<=\')[^\']+?(?=\')/g).pop()}` 
			}
		  resolve(results)
		})
	})
}

function tmpFile(buffer) {
  return new Promise(async (resolve, reject) => {
    const { ext, mime } = await fromBuffer(buffer)
    const form = new FormData();
    form.append('file', buffer, {
      filename: new Date() * 1 + '.' + ext,   
      contentType: mime
    });

    const { data } = await axios.post("https://tmpfiles.org/api/v1/upload", form, {
      headers: {
        ...form.getHeaders(),
      },
    })
    .catch((e) => resolve(e?.response))
    resolve(data)
  })
}

async function ipspy(ip) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`https://back.spyskey.com/api/v1/public/services/reverse?ip=${ip}`, {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
          'sec-fetch-site': 'same-site',
          Referer: 'https://spyskey.com/',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        }
      });
      resolve(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

async function snapDown(url) {
	return new Promise(async(resolve,reject) => {
		
    const { data: rest } = await axios.get("https://snapvid.io")
    const $ = cheerio.load(rest) 
    const tokens = $("input[name='token']").val()
    const data = new URLSearchParams(
      Object.entries({
        url: url,
        token: tokens 
      })
    )    
    await axios.post("https://snapvid.io/wp-json/aio-dl/video-data/", data, {
      headers: {
        "cookie": "pll_language=en; PHPSESSID=2bt545i1qq8n1iqlsdostfacrg",
        "user-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {
      resolve(response.data)
    })
    .catch((e) => {
      reject(e)
    })
  })
}

module.exports = {
    anime4k,
    chara,
    dafontDown,
    dafontSearch,
    IMGEnhance,
    igdl,
    igstory,
    ipspy,
    joox,
    krakenfiles,
    kusoNime,
    mangatoon,
    nomorhoki,
    rexdl,
    simsimi,
    sfilemobi,
    snapDown,
    tmpFile,
    tiklydown,
    tiktok,
    tiktokdl,
    tiktokStory,
    upscale,
    trendtwit,
    wattpad,
    xnxxdl
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})