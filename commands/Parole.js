/** 

🇫‌🇱‌🇦‌🇸‌🇭‌-🇲‌🇩‌ 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗙𝗹𝗮𝘀𝗵 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗙𝗿𝗮𝗻𝗰𝗲 𝗞𝗶𝗻𝗴 
 
 **/
const {
  france
} = require("../framework/france");
const axios = require("axios");
const Genius = require("genius-lyrics");
const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO");
france({
  'nomCom': 'poll',
  'reaction': '✨',
  'categorie': "General"
}, async (_0x30c4fc, _0x12f9f4, _0x257571) => {
  const _0x24dbc4 = _0x3aacc5.join(" ");
  let [_0x48d7c3, _0x3c6856] = _0x24dbc4.split('/');
  if (_0x24dbc4.split('/') < 0x2) {
    return _0x394782("Incorrect format.\nExample: poll what is 1+1/2, 3, 4");
  }
  let _0x28e247 = [];
  for (let _0x44e06d of _0x3c6856.split(',')) {
    _0x28e247.push(_0x44e06d);
  }
  await _0x12f9f4.sendMessage(_0x30c4fc, {
    'poll': {
      'name': _0x48d7c3,
      'values': _0x28e247
    }
  });
});
france({
  'nomCom': 'fact',
  'reaction': '✌️',
  'categorie': 'User'
}, async (_0x3c85fa, _0xe0dd81, _0x20339c) => {
  const _0x5754a8 = await fetch("https://nekos.life/api/v2/fact");
  const _0x21e127 = await _0x5754a8.json();
  _0x12e23a("◆━━━━━━✦FACT✦━━━━━━◆  \n*◇* " + _0x21e127.fact + "\n\n\n\n\n*◇* Powered by *Sahan Maduwantha*\n\n╔═════◇\n║◇ *KEEP USING MASTER-MD*\n╚════════════════════>  ");
});
france({
  'nomCom': "quotes",
  'reaction': '🗿',
  'categorie': 'User'
}, async (_0x139e97, _0xb6d444, _0x53dc51) => {
  const _0x2784cf = await fetch('https://favqs.com/api/qotd');
  const _0x1f25fb = await _0x2784cf.json();
  const _0x2b238b = "\n◆━━━━━━✦QUOTE✦━━━━━━◆ \n◇ _" + _0x1f25fb.quote.body + "_\n\n\n◇ *AUTHOR:* " + _0x1f25fb.quote.author + "\n\n\n\n\n◇ _Powered by:_ *Sahan Maduwantha*\n\n\n╔═════◇\n║◇ *KEEP USING MASTER-MD*\n╚════════════════════> ";
  _0x3bef2d(_0x2b238b);
});
france({
  'nomCom': 'define',
  'reaction': '😁',
  'categorie': "Search"
}, async (_0x2d6773, _0x1778cf, _0x5bcf7e) => {
  if (!_0x3997ea || _0x3997ea.length === 0x0) {
    return _0x3c6e3b("provide a term");
  }
  const _0x243eb3 = _0x3997ea.join(" ");
  try {
    let {
      data: _0x31830d
    } = await axios.get("http://api.urbandictionary.com/v0/define?term=" + _0x243eb3);
    var _0x259634 = "\n Word: " + _0x243eb3 + "\n Definition: " + _0x31830d.list[0x0].definition.replace(/\[/g, '').replace(/\]/g, '') + "\n Example: " + _0x31830d.list[0x0].example.replace(/\[/g, '').replace(/\]/g, '');
    return _0x3c6e3b(_0x259634);
  } catch {
    return _0x3c6e3b("No result for " + _0x243eb3);
  }
});
france({
  'nomCom': "lyrics",
  'reaction': '✨',
  'categorie': "Search"
}, async (_0x16b585, _0x24921b, _0x5047e1) => {
  const {
    repondre: _0x323d88,
    arg: _0x47ee56,
    ms: _0x26dbd3
  } = _0x5047e1;
  try {
    if (!_0x47ee56 || _0x47ee56.length === 0x0) {
      return _0x323d88("please provide me the song name");
    }
    const _0x2d6993 = _0x47ee56.join(" ");
    const _0x19a972 = await Client.songs.search(_0x2d6993);
    const _0x349a1c = _0x19a972[0x0];
    const _0x3e8204 = await _0x349a1c.lyrics();
    await _0x24921b.sendMessage(_0x16b585, {
      'text': _0x3e8204
    }, {
      'quoted': _0x26dbd3
    });
  } catch (_0xe736b5) {
    reply("I did not find any lyrics for " + text + ". Try searching a different song.");
    console.log(_0xe736b5);
  }
});
