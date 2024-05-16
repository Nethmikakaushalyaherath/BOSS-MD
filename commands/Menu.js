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
} = require(__dirname + "/../framework/france");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const runtime = function (_0x187d57) {
  _0x187d57 = Number(_0x187d57);
  var _0x51404e = Math.floor(_0x187d57 / 86400);
  var _0x58c8d1 = Math.floor(_0x187d57 % 86400 / 0xe10);
  var _0x57bf9d = Math.floor(_0x187d57 % 0xe10 / 0x3c);
  var _0x35ceb8 = Math.floor(_0x187d57 % 0x3c);
  var _0x3f79b4 = _0x51404e > 0x0 ? _0x51404e + (_0x51404e == 0x1 ? " day, " : " d, ") : '';
  var _0x5a1732 = _0x58c8d1 > 0x0 ? _0x58c8d1 + (_0x58c8d1 == 0x1 ? " hour, " : " h, ") : '';
  var _0x46f788 = _0x57bf9d > 0x0 ? _0x57bf9d + (_0x57bf9d == 0x1 ? " minute, " : " m, ") : '';
  var _0x58b7fc = _0x35ceb8 > 0x0 ? _0x35ceb8 + (_0x35ceb8 == 0x1 ? " second" : " s") : '';
  return _0x3f79b4 + _0x5a1732 + _0x46f788 + _0x58b7fc;
};
france({
  'nomCom': 'menu',
  'categorie': 'General'
}, async (_0x2af0de, _0x28cc0e, _0x22e922) => {
  var _0x3085ff = {};
  var _0xbafdb7 = 'public';
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0xbafdb7 = 'private';
  }
  _0x579468.map(async (_0x37d146, _0x55f207) => {
    if (!_0x3085ff[_0x37d146.categorie]) {
      _0x3085ff[_0x37d146.categorie] = [];
    }
    _0x3085ff[_0x37d146.categorie].push(_0x37d146.nomCom);
  });
  moment.tz.setDefault("Asia/colombo");
  const _0x3f94de = moment().format("HH:mm:ss");
  const _0x3ad85b = moment().format("DD/MM/YYYY");
  let _0x466c1b = "\n╭────✧ＢＯＳＳ-ＭＤ✧────◆\n┃🥷🏻╭──────────────\n┃🥷🏻│ Prefix : " + s.PREFIXE + " \n┃🥷🏻│ User :  " + s.OWNER_NAME + "\n┃🥷🏻│ Time : " + _0x3f94de + "  \n┃🥷🏻│ Platform : Linux\n┃🥷🏻│ Date : " + _0x3ad85b + " \n┃🥷🏻│ Mode : " + _0xbafdb7 + "\n┃🥷🏻│ Commands : " + _0x579468.length + "  \n┃🥷🏻│ Ram : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + " \n┃🥷🏻│ Uptime : " + runtime(process.uptime()) + " \n┃🥷🏻╰───────────────\n╰─────✧POWER OF MASTER MIND✧─────◆ \n";
  let _0x3c7fea = "  \n\n*◇ BOSS-MD COMMANDS ◇*\n";
  for (const _0xafd2d0 in _0x3085ff) {
    _0x3c7fea += "\n*╭────☉⁠👨‍💻⁠⁠" + _0xafd2d0 + "👨‍💻⁠⊷*";
    for (const _0x1430ff of _0x3085ff[_0xafd2d0]) {
      _0x3c7fea += " \n*│❒⁠⁠⁠⁠" + _0x1430ff + '*';
    }
    _0x3c7fea += "\n*╰═════════════⊷*\n";
  }
  _0x3c7fea += "\n◇ *ᴛʜᴇ ᴍᴀꜱᴛᴇʀ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ* ◇\n\n   *ʀᴇʟᴇᴀꜱᴇᴅ: 03.5.2024*\n   \n ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴄʜᴏᴏꜱɪɴɢ ᴍᴀꜱᴛᴇʀ-ᴍᴅ\n\nᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀʜᴀɴ ᴍᴀᴅᴜᴡᴀɴᴛʜᴀ\n  \n     *ᴋᴇᴇᴘ ᴜꜱɪɴɢ ᴍᴀꜱᴛᴇʀ-ᴍᴅ*\n";
  var _0x2af193 = _0x85aec2();
  if (_0x2af193.match(/\.(mp4|gif)$/i)) {
    try {
      _0x28cc0e.sendMessage(_0x2af0de, {
        'video': {
          'url': _0x2af193
        },
        'caption': _0x466c1b + _0x3c7fea,
        'footer': "Je suis *MASTER-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x1dbe0a
      });
    } catch (_0x515206) {
      console.log("🥵🥵 Menu erreur " + _0x515206);
      _0x1a90f5("🥵🥵 Menu erreur " + _0x515206);
    }
  } else {
    if (_0x2af193.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x28cc0e.sendMessage(_0x2af0de, {
          'image': {
            'url': _0x2af193
          },
          'caption': _0x466c1b + _0x3c7fea,
          'footer': "*📌Nethmika*"
        }, {
          'quoted': _0x1dbe0a
        });
      } catch (_0x196b3d) {
        console.log("🥵🥵 Menu erreur " + _0x196b3d);
        _0x1a90f5("🥵🥵 Menu erreur " + _0x196b3d);
      }
    } else {
      _0x1a90f5(_0x466c1b + _0x3c7fea);
    }
  }
});
