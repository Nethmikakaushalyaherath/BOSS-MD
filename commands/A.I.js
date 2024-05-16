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
france({
  'nomCom': "BOSS",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x4c29c0, _0x4e7f01, _0x5e6ef0) => {
  if (!_0x7cf9e3 || !_0x7cf9e3[0x0]) {
    return _0x5aa4bf("YEES!\n _I'm listening to you._");
  }
  try {
    const _0x4453b8 = _0x7cf9e3.join(" ");
    const _0x273cbd = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + _0x4453b8);
    const _0x36572a = await _0x273cbd.json();
    await _0x5aa4bf(_0x36572a.cnt);
  } catch {
    _0x5aa4bf("something went wrong...");
  }
});
france({
  'nomCom': "dalle",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x29145a, _0x406bfc, _0x56783b) => {
  const {
    repondre: _0x16f4a4,
    arg: _0x3c7e8b,
    ms: _0x37c9b9
  } = _0x56783b;
  try {
    if (!_0x3c7e8b || _0x3c7e8b.length === 0x0) {
      return _0x16f4a4("Please enter the necessary information to generate the image.");
    }
    const _0x4271b6 = _0x3c7e8b.join(" ");
    const _0x145045 = "https://api.maher-zubair.tech/ai/dalle?q=" + _0x4271b6;
    _0x406bfc.sendMessage(_0x29145a, {
      'image': {
        'url': _0x145045
      },
      'caption': "*powered by BOSS-MD*"
    }, {
      'quoted': _0x37c9b9
    });
  } catch (_0x957bce) {
    console.error("Erreur:", _0x957bce.message || "Une erreur s'est produite");
    _0x16f4a4("Oops, an error occurred while processing your request");
  }
});
france({
  'nomCom': "gpt",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x49efd5, _0x137878, _0x318485) => {
  if (!_0x537bc1 || _0x537bc1.length === 0x0) {
    return _0x2bd878("Please ask a question.");
  }
  const _0x3db831 = _0x537bc1.join(" ");
  const _0x5bd98e = await fetch("https://api.maher-zubair.tech/ai/chatgptv4?q=" + _0x3db831);
  const _0x53e4ae = await _0x5bd98e.json();
  await _0x2bd878(_0x53e4ae.result);
  console.log(_0x53e4ae.completion);
});
france({
  'nomCom': "chatgpt",
  'reaction': '🤗',
  'categorie': 'AI'
}, async (_0x1c753b, _0x55355f, _0x5d8964) => {
  if (!_0x424bf0 || _0x424bf0.length === 0x0) {
    return _0x24f9f4("Hello am *BOSS-MD.* an Ai developed by Nethmika kaushalya.\n\n What help can I offer you today?.");
  }
  const _0x8e5e01 = _0x424bf0.join(" ");
  const _0xcdca18 = await fetch("https://api.maher-zubair.tech/ai/chatgpt3?q=" + _0x8e5e01);
  const _0x6e7833 = await _0xcdca18.json();
  await _0x24f9f4(_0x6e7833.result);
  console.log(_0x6e7833.completion);
});
france({
  'nomCom': "calc",
  'reaction': '🔢',
  'categorie': 'General'
}, async (_0xbf87b6, _0x5390bb, _0x2e2f68) => {
  if (!_0x22456f || _0x22456f.length === 0x0) {
    return _0x11d4e1("Please insert maths calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  const _0x4c0dc4 = _0x22456f.join(" ");
  const _0xb60d0f = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x4c0dc4);
  const _0x1bb54c = await _0xb60d0f.json();
  await _0x11d4e1(_0x1bb54c.result);
  console.log(_0x1bb54c.completion);
});
