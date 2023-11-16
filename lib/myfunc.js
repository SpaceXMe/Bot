const fs = require("fs");
const chalk = require("chalk");

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.clockStringP = (ms) => {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 84600000)
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [d, " Hari ", h, " Jam ", m, " Menit ", s, " Detik"].map(v => v.toString().padStart(2, 0)).join('')
}

exports.msToDate = (ms) => {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor(daysms / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor(hoursms / (60 * 1000));
    minutesms = ms % (60 * 1000);
    second = Math.floor(minutesms / 1000);
    
    days = days > 0 ? days + " Hari " : ''
    hours = hours > 0 ? hours + " Jam " : ''
    minutes = minutes > 0 ? minutes + " Menit " : ''
    second = second > 0 ? second + " Detik" : ''
    return days + hours + minutes + second;
}

exports.tanggal = (numer, locale = 'id') => {
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    return numer.toLocaleDateString(locale, options)
}

exports.bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const t = 1024;
    const dcm = (decimals < 0) ? 0 : decimals;
    const size = ["Byte", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(t));
    return parseFloat((bytes / Math.pow(t, i)).toFixed(dcm)) + " " + size[i];
}

exports.pickRandom = (list) => {
    return list[Math.floor(Math.random() * list.length)]
}

exports.capitalizeFirstLetter = (string) => {
	  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

exports.numberFormat = (numb, locale = 'id-ID') => {
    return new Intl.NumberFormat(locale).format(numb)
}

exports.shortNumber = (number, locale = 'id-ID') => {
    let options = {
        notation: "compact",
        compactDisplay: "short"
    }
    return number.toLocaleString(locale, options)
}

exports.getRandom = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

exports.no = (number) => {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '')
}

exports.now = (num, locale = 'id-ID', tz = 'Asia/Jakarta') => {
    let options = {
        timeZone: tz
    }
    return num.toLocaleString(locale, options)
}

exports.currency = (numb, curr = "USD", region = "en-US") => {
    let opt = {
        style: "currency",
        currency: curr
    }
    return numb.toLocaleString(region, opt)
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.green(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})