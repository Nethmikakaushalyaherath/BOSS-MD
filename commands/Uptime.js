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
const {
  getBuffer
} = require("../framework/dl/Function");
const runtime = function (_0x44a6e2) {
  _0x44a6e2 = Number(_0x44a6e2);
  var _0x3f18ce = Math.floor(_0x44a6e2 / 86400);
  var _0x33ca03 = Math.floor(_0x44a6e2 % 86400 / 0xe10);
  var _0x24bbcb = Math.floor(_0x44a6e2 % 0xe10 / 0x3c);
  var _0x28c156 = Math.floor(_0x44a6e2 % 0x3c);
  var _0x15925d = _0x3f18ce > 0x0 ? _0x3f18ce + (_0x3f18ce == 0x1 ? " day, " : " d, ") : '';
  var _0x3fa347 = _0x33ca03 > 0x0 ? _0x33ca03 + (_0x33ca03 == 0x1 ? " hour, " : " h, ") : '';
  var _0x493d77 = _0x24bbcb > 0x0 ? _0x24bbcb + (_0x24bbcb == 0x1 ? " minute, " : " m, ") : '';
  var _0x45c385 = _0x28c156 > 0x0 ? _0x28c156 + (_0x28c156 == 0x1 ? " second" : " s") : '';
  return _0x15925d + _0x3fa347 + _0x493d77 + _0x45c385;
};
france({
  'nomCom': 'uptime',
  'desc': "To check runtime",
  'Categorie': "General",
  'reaction': '⚙️',
  'fromMe': "true"
}, async (_0x5733e8, _0x11c5bc, _0x57521f) => {
  await _0x141271(_0x5d3c5c(0x161) + "f MASTER-MD" + ": " + runtime(process.uptime()) + '_*');
});
france({
  'nomCom': 'ss',
  'desc': "screenshots website",
  'Categorie': 'General',
  'reaction': '🎥',
  'fromMe': "true"
}, async (_0x5d5ae8, _0x3e1dc4, _0x105a5c) => {
  const {
    ms: _0x4e3982,
    arg: _0x26023f,
    repondre: _0x442146
  } = _0x105a5c;
  if (!_0x26023f || _0x26023f.length === 0x0) {
    return _0x442146("provide a link...");
  }
  const _0xc585f8 = _0x26023f.join(" ");
  let _0x23dc0e = "https://api.maher-zubair.tech/misc/sstab?url=" + _0xc585f8 + "&dimension=720x720";
  let _0x460842 = await getBuffer(_0x23dc0e);
  await _0x3e1dc4.sendMessage(_0x5d5ae8, {
    'image': _0x460842
  }, {
    'caption': "Powered by MASTER-MD"
  }, {
    'quoted': _0x4e3982
  });
});
