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
  'nomCom': "repo",
  'reaction': '🤍',
  'nomFichier': __filename
}, async (_0xd5c3f8, _0x275d9e, _0xd1fa9a) => {
  const _0x25c429 = await fetch("https://api.github.com/repos/MrMasterOfc/MASTER-MD");
  const _0x3379fc = await _0x25c429.json();
  if (_0x3379fc) {
    const _0x1d838c = {
      'stars': _0x3379fc.stargazers_count,
      'forks': _0x3379fc.forks_count,
      'lastUpdate': _0x3379fc.updated_at,
      'owner': _0x3379fc.owner.login
    };
    const _0x267491 = new Date(_0x3379fc.created_at).toLocaleDateString("en-GB");
    const _0xd1c044 = "Hello 👋 \nThis is *MASTER-MD.*\n The Following is it's *REPO*\n\n🗼 *REPOSITORY:* " + _0x3379fc.html_url + "\n✨ *STARS:* " + _0x1d838c.stars + "\n🧧 *FORKS:* " + _0x1d838c.forks + "\n📅 *RELEASE DATE:* " + _0x267491 + "\n🕐 *UPDATED ON:* " + _0x1d838c.lastUpdate + "\n👨‍💻 *OWNER:* *Sahan Maduwantha*\n__________________________________\n            *Made With* 🤍";
    await _0x275d9e.sendMessage(_0xd5c3f8, {
      'image': {
        'url': 'https://telegra.ph/file/6fcaf547aebbf7d08d8d1.jpg'
      },
      'caption': _0xd1c044
    });
  } else {
    console.log("Could not fetch data");
  }
});
