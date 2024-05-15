/** 

🇫‌🇱‌🇦‌🇸‌🇭‌-🇲‌🇩‌ 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗙𝗹𝗮𝘀𝗵 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗙𝗿𝗮𝗻𝗰𝗲 𝗞𝗶𝗻𝗴 
 
 **/
const JavaScriptObfuscator = require('javascript-obfuscator');
const {
  france
} = require("../framework/france");
france({
  'nomCom': 'enc',
  'categorie': "General"
}, async (_0x2baa80, _0x12d2ed, _0x40f610) => {
  try {
    let _0x3c9eb7 = _0x9c36c6.join(" ");
    if (!_0x9c36c6[0x0]) {
      _0x1e727e(_0x5791b0(0xeb));
      return;
    }
    ;
    const _0x112a10 = JavaScriptObfuscator[_0x5791b0(0xe1)](_0x3c9eb7, {
      'compact': false,
      'controlFlowFlattening': true,
      'controlFlowFlatteningThreshold': 0x1,
      'numbersToExpressions': true,
      'simplify': true,
      'stringArrayShuffle': true,
      'splitStrings': true,
      'stringArrayThreshold': 0x1
    });
    await _0x1e727e(_0x112a10.getObfuscatedCode());
  } catch {
    _0x1e727e(_0x5791b0(0xde));
  }
});
france({
  'nomCom': "whois",
  'categorie': "User"
}, async (_0x3b6a45, _0x2ccf4a, _0x3ca19c) => {
  let _0x280e3a = null;
  let _0x4a5a8f = null;
  if (!_0x1ec102) {
    _0x280e3a = _0x5be85d;
    _0x4a5a8f = _0x3a9bd2;
    try {
      ppUrl = await _0x2ccf4a.profilePictureUrl(_0x280e3a, "image");
    } catch {
      ppUrl = "https://static.animecorner.me/2023/08/op2.jpg";
    }
    ;
    const _0x43dea5 = await _0x2ccf4a.fetchStatus(_0x280e3a);
    mess = {
      'image': {
        'url': ppUrl
      },
      'caption': "*Nom :* " + _0x4a5a8f + "\n*Status :*\n" + _0x43dea5.status
    };
  } else {
    _0x280e3a = _0x27cca5;
    _0x4a5a8f = '@' + _0x27cca5.split('@')[0x0];
    try {
      ppUrl = await _0x2ccf4a.profilePictureUrl(_0x280e3a, "image");
    } catch {
      ppUrl = "https://static.animecorner.me/2023/08/op2.jpg";
    }
    ;
    const _0x2ef8d3 = await _0x2ccf4a.fetchStatus(_0x280e3a);
    mess = {
      'image': {
        'url': ppUrl
      },
      'caption': "*Name :* " + _0x4a5a8f + "\n*Status :*\n" + _0x2ef8d3.status,
      'mentions': [_0x27cca5]
    };
  }
  ;
  _0x2ccf4a.sendMessage(_0x3b6a45, mess, {
    'quoted': _0x1ed492
  });
});
france({
  'nomCom': 'getpp',
  'categorie': "User"
}, async (_0x223729, _0x1b6c08, _0x126512) => {
  let _0x9c97ff = null;
  let _0x1d1f7a = null;
  if (!_0x496af7) {
    _0x9c97ff = _0x5146f6;
    _0x1d1f7a = _0x48cf60;
    try {
      ppUrl = await _0x1b6c08.profilePictureUrl(_0x9c97ff, "image");
    } catch {
      ppUrl = "https://static.animecorner.me/2023/08/op2.jpg";
    }
    ;
    mess = {
      'image': {
        'url': ppUrl
      },
      'caption': "Here is the Profile picture"
    };
  } else {
    _0x9c97ff = _0x184bbe;
    _0x1d1f7a = '@' + _0x184bbe.split('@')[0x0];
    try {
      ppUrl = await _0x1b6c08.profilePictureUrl(_0x9c97ff, 'image');
    } catch {
      ppUrl = "https://static.animecorner.me/2023/08/op2.jpg";
    }
    ;
    mess = {
      'image': {
        'url': ppUrl
      },
      'caption': "Here is the Profile picture",
      'mentions': [_0x184bbe]
    };
  }
  ;
  _0x1b6c08.sendMessage(_0x223729, mess, {
    'quoted': _0x4bb6c0
  });
});
