//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                     //
//                                             W H A T S A P P _ U S E R _ BOT                                                         //
//                                                                                                                                     //
//                                                     V E R S I O N：１.0                                                              //
//                                                                                                                                     //
//            ███╗░░░███╗░░█████╗░░███████╗░█████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░        //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║═══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░        //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░        // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░        //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░        //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░░        //
//                                                                                                                                     //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                                           //  
//                                                                                                                                     //
//                                                                                                                                     //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0xe1b8b3, _0x1dcb9b, _0x2aad4b) => {
  var _0x5601d8 = {};
  var _0x2a32e7 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x2a32e7 = "private";
  }
  _0x45d475.map(async (_0x1ecca5, _0x276db6) => {
    if (!_0x5601d8[_0x1ecca5.categorie]) {
      _0x5601d8[_0x1ecca5.categorie] = [];
    }
    _0x5601d8[_0x1ecca5.categorie].push(_0x1ecca5.nomCom);
  });
  moment.tz.setDefault("Asia/colombo");
  const _0x453e29 = moment().format("HH:mm:ss");
  const _0x27ebec = moment().format("DD/MM/YYYY");
  let _0x3363a8 = "\n╒═══💀𝗠𝗔𝗦𝗧𝗘𝗥-𝗠𝗗💀═══════⫸\n│🥷🏻 *𝐏ʀᴇꜰɪx* : *" + s.PREFIXE + "*\n│🥷🏻 *𝐔ꜱᴇʀ* : *" + s.OWNER_NAME + "*\n│🥷🏻 *𝐌ᴏᴅᴇ* : *" + _0x2a32e7 + "*\n│🥷🏻 *𝐂ᴏᴍᴍᴀɴᴅꜱ* : *" + _0x45d475.length + "*\n│🥷🏻 *𝐃ᴀᴛᴇ* : *" + _0x27ebec + "*\n│🥷🏻 *𝐓ɪᴍᴇ* : *" + _0x453e29 + "* \n│🥷🏻 *𝐑ᴀᴍ* : *" + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "*\n│🥷🏻 *𝐏ʟᴀᴛꜰᴏʀᴍ* : *" + os.platform() + "*\n│🥷🏻 *𝐃ᴇᴠᴇʟᴏᴘᴇʀ* : *Mr Sahan Ofc*\n│🥷🏻 *𝐕ᴇʀꜱɪᴏɴ* : *V1.0*\n│🥷🏻 *𝐆ɪᴛʜᴜʙ* : *maduwa2006*\n╘═══💀𝗠𝗔𝗦𝗧𝗘𝗥_𝗠𝗜𝗡𝗗💀═══⫸";
  let _0x247d40 = "  \n\n*MASTER-MD COMMANDS :*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n";
  for (const _0x2051c8 in _0x5601d8) {
    _0x247d40 += "╭────👨‍💻 *" + _0x2051c8 + "* 👨‍💻⊷";
    for (const _0x33fc43 of _0x5601d8[_0x2051c8]) {
      _0x247d40 += "\n *│💀* *" + _0x33fc43 + '*';
    }
    _0x247d40 += "\n╰═════════════⊷ \n";
  }
  _0x247d40 += "\n◇            ◇\n*————— 👨‍💻MASTER MIND👨‍💻 —————*\n\n  💀 *© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ* 💀                                         \n╰═════════════⊷\n";
  var _0x327546 = _0x57f38b();
  if (_0x327546.match(/\.(mp4|gif)$/i)) {
    try {
      _0x1dcb9b.sendMessage(_0xe1b8b3, {
        'video': {
          'url': _0x327546
        },
        'caption': _0x3363a8 + _0x247d40,
        'footer': "Je suis *Zokou-MD*, développé par Djalega++",
        'buttons': "\n\n            #button:quick_reply | display_text : OWNER 🌟 | id:" + prefix + "owner /#\n           \n            "
        'gifPlayback': true
      }, {
        'quoted': _0x19d732
      });
    } catch (_0x577a69) {
      console.log("🥵🥵 Menu erreur " + _0x577a69);
      _0xa533fa("🥵🥵 Menu erreur " + _0x577a69);
    }
  } else {
    if (_0x327546.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x1dcb9b.sendMessage(_0xe1b8b3, {
          'image': {
            'url': _0x327546
          },
          'caption': _0x3363a8 + _0x247d40,
          'footer': "*📌Sahan*"
        }, {
          'quoted': _0x19d732
        });
      } catch (_0x472ce2) {
        console.log("🥵🥵 Menu erreur " + _0x472ce2);
        _0xa533fa("🥵🥵 Menu erreur " + _0x472ce2);
      }
    } else {
      _0xa533fa(_0x3363a8 + _0x247d40);
    }
  }
});
