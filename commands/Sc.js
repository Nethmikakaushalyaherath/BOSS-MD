/** 

🇫‌🇱‌🇦‌🇸‌🇭‌-🇲‌🇩‌ 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗙𝗹𝗮𝘀𝗵 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗙𝗿𝗮𝗻𝗰𝗲 𝗞𝗶𝗻𝗴 
 
 **/

'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  france
} = require("../framework/france");
france({
  'nomCom': "fmd",
  'reaction': '😌'
}, async (_0x3b5c5b, _0x36008e, _0x2f66cd) => {
  const _0x20e692 = await fetch("https://api.github.com/repos/MrMasterOfc/MASTER-MD");
  const _0x3283f0 = await _0x20e692.json();
  if (_0x3283f0) {
    const _0x5a2f21 = {
      'stars': _0x3283f0.stargazers_count,
      'forks': _0x3283f0.forks_count
    };
    const _0x263678 = "\n*A Total of " + _0x5a2f21.forks + " People are using MASTER-MD.*\n\n*" + _0x5a2f21.stars + " People have starred it as a sign of Loving it.*\n\n*KEEP USING MASTER-MD* \n\n             *Made With* 🤍";
    await _0x36008e.sendMessage(_0x3b5c5b, {
      'image': {
        'url': 'https://telegra.ph/file/7cc6e55a2ea3d8cd7f30e.jpg'
      },
      'caption': _0x263678
    });
  } else {
    console.log("Could not fetch data");
  }
});
