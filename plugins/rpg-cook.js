let handler = async (m, {
	command,
	usedPrefix,
	DevMode,
	args
}) => {
	let type = (args[0] || '').toLowerCase()
    let msk = (args[0] || '').toLowerCase()
    let user = global.db.data.users[m.sender]
    let author = global.author
let cok = `「 *C O O K I N G* 」


1. Ayam Bakar 🍖
〉Need 2 ayam 🐓 & 1 Coal 🕳️

2. Ayam Goreng 🍗
〉Need 2 ayam 🐓 & 1 Coal 🕳️

3. Opor Ayam 🍜
〉Need 2 ayam 🐓 & 1 Coal 🕳️

4. Steak 🥩
〉Need 2 sapi 🐮 & 1 Coal 🕳️

5. Rendang 🥘
〉Need 2 sapi 🐮 & 1 Coal 🕳️

6. Gulai Ayam 🍲
〉Need 2 ayam 🐓 & 1 Coal 🕳️

7. Babi Panggang 🥠
〉Need 2 babi 🐖 & 1 Coal 🕳️

8. Ikan Bakar 🐟
〉Need 2 ikan 🐟 & 1 Coal 🕳️

9. Lele Bakar 🐟
〉Need 2 lele 🐟 & 1 Coal 🕳️

10. Nila Bakar 🐟
〉Need 2 nila 🐟 & 1 Coal 🕳️

11. Bawal Bakar 🐟
〉Need 2 bawal 🐟 & 1 Coal 🕳️

12. Udang Bakar 🦐
〉Need 2 udang 🦐 & 1 Coal 🕳️

13. Paus Bakar 🐳
〉Need 2 paus 🐳 & 1 Coal 🕳️

14. Kepiting Bakar 🦀
〉Need 2 kepiting 🦀 & 1 Coal 🕳️

Contoh penggunaan:
*${usedPrefix + command} 1*
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length > 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayambakar':
            	case '1':
            if (user.ayam > count * 2 || user.coal > 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayambakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ayam bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam bakar\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				  case 'gulaiayam':
				  case '6':
            if (user.ayam > count * 2 || user.coal > 1 * count) {
                            user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.gulai += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayam🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                  case 'rendang':
                  case '5':
            if (user.sapi > count * 2 || user.coal > 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.rendang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Rendang 🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak dimasak rendang\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
                   case 'ayamgoreng':
                   case '2':
            if (user.ayam > count * 2 || user.coal > 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayamgoreng += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } ayam goreng🍗`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam goreng\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'oporayam':
                        case '3':
            if (user.lele > count * 2 || user.coal > 1 * count) {
                          user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.oporayam += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'steak':
                        case '4':
            if (user.sapi > count * 2 || user.coal > 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.steak += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
				break
             case 'babipanggang':
             case '7':
            if (user.babi > count * 2 || user.coal > 1 * count) {
                            user.babi >= count * 1
                            user.babi -= count * 2
                            user.coal -= count * 1
                            user.babipanggang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 coal untuk memasak`, m)
				break
				case 'ikanbakar':
				case '8':
            if (user.ikan > count * 2 || user.coal > 1 * count) {
                           user.ikan >= count * 1
                            user.ikan -= count * 2
                            user.coal -= count * 1
                            user.ikanbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ikan bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ikan bakar\nAnda butuh 2 ikan dan 1 coal untuk memasak`, m)
					break
					case 'lelebakar':
					case '9':
            if (user.lele > count * 2 || user.coal > 1 * count) {
                           user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.lelebakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} lele bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak lele bakar\nAnda butuh 2 lele dan 1 coal untuk memasak`, m)
					break
					case 'nilabakar':
					case '10':
            if (user.nila > count * 2 || user.coal > 1 * count) {
                           user.nila >= count * 1
                            user.nila -= count * 2
                            user.coal -= count * 1
                            user.nilabakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} nila bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak nila bakar\nAnda butuh 2 nila dan 1 coal untuk memasak`, m)
					break
					case 'bawalbakar':
					case '11':
            if (user.bawal > count * 2 || user.coal > 1 * count) {
                           user.bawal >= count * 1
                            user.bawal -= count * 2
                            user.coal -= count * 1
                            user.bawalbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} bawal bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak bawal bakar\nAnda butuh 2 bawal dan 1 coal untuk memasak`, m)
					break
					case 'udangbakar':
					case '12':
            if (user.udang > count * 2 || user.coal > 1 * count) {
                           user.udang >= count * 1
                            user.udang -= count * 2
                            user.coal -= count * 1
                            user.udangbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} udang bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak udang bakar\nAnda butuh 2 udang dan 1 coal untuk memasak`, m)
					break
					case 'pausbakar':
					case '13':
            if (user.paus > count * 2 || user.coal > 1 * count) {
                           user.paus >= count * 1
                            user.paus -= count * 2
                            user.coal -= count * 1
                            user.pausbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} paus bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak paus bakar\nAnda butuh 2 paus dan 1 coal untuk memasak`, m)
					break
					case 'kepitingbakar':
					case '14':
            if (user.kepiting > count * 2 || user.coal > 1 * count) {
                           user.kepiting >= count * 1
                            user.kepiting -= count * 2
                            user.coal -= count * 1
                            user.kepitingbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} kepiting bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kepiting bakar\nAnda butuh 2 kepiting dan 1 coal untuk memasak`, m)
					break
                default:
                await conn.reply(m.chat, cok, m)
	
	//		})
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <masakan> <args>']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i

module.exports = handler