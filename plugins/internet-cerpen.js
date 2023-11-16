var cerpen = require('../lib/cerpen');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Masukkan kategori!

Penggunaan: *${usedPrefix + command} <kategori>*
Contoh: *${usedPrefix + command} Budaya*

*List Kategori*
1. *Anak*
2. *Bahasa Daerah*
3. *Bahasa Inggris*
4. *Bahasa Jawa*
5. *Bahasa Sunda*
6. *Budaya*
7. *Cinta*
8. *Cinta Dalam Hati (Terpendam)*
9. *Cinta Islami*
10. *Cinta Pertama*
11. *Cinta Romantis*
12. *Cinta Sedih*
13. *Cinta Segitiga*
14. *Cinta Sejati*
15. *Covid 19 Corona*
16. *Dongeng Rakyat*
17. *Fabel (Hewan)*
18. *Fantasi (Fiksi)*
19. *Fiksi Penggemar (Fanfiction)*
20. *Galau*
21. *Gokil*
22. *Horor (Hantu)*
23. *Inspiratif*
24. *Islami (Religi)*
25. *Jepang*
26. *Kehidupan*
27. *Keluarga*
28. *Kisah Nyata*
29. *Korea*
30. *Kristen*
31. *Liburan*
32. *Lingkungan*
33. *Lucu (Humor)*
34. *Malaysia*
35. *Mengharukan*
36. *Misteri*
37. *Motivasi*
38. *Nasihat*
39. *Nasionalisme*
40. *Olahraga*
41. *Patah Hati*
42. *Penantian*
43. *Pendidikan*
44. *Pengalaman Pribadi*
45. *Pengorbanan*
46. *Penyesalan*
47. *Perjuangan*
48. *Perpisahan*
49. *Persahabatan*
50. *Petualangan*
51. *Ramadhan*
52. *Remaja*
53. *Renungan*
54. *Rindu*
55. *Rohani*
56. *Romantis*
57. *Sastra*
58. *Sedih*
59. *Sejarah*
60. *Slice Of Life*
61. *Terjemahan*
62. *Thirller (Aksi)*`);

  var cerp = await cerpen.cerpen(text);
  const { title, author, kategori, lolos, cerita } = cerp;
  
  let str = `
• *Judul*: ${title}
• *Author*: ${author}
• *Kategori*: ${kategori}
• *Lulus*: ${lolos}

• *Cerita*:

${cerita}
`.trim();
  m.reply(str);
};

handler.help = ['cerpen <category>'];
handler.tags = ['internet'];
handler.command = /^(cerpen)$/i;

module.exports = handler;