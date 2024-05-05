//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                    //
//                                             W H A T S A P P _ U S E R _ BOT                                        //
//                                                                                                                    //
//                                                     V E R S I O N：１.0                                             //
//                                                                                                                    //
//            ███╗░░░███╗░░█████╗░░███████╗░█████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░        //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║═══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░        //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░        // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░        //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░        //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░░        //
//                                                                                                                    //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                          //  
//                                                                                                                    //
//                                                                                                                    //
//════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const {
  zokou
} = require("../framework/zokou");
const {
  getAllSudoNumbers,
  isSudoTableNotEmpty
} = require("../bdd/sudo");
const conf = require("../set");
zokou({
  'nomCom': "owner",
  'categorie': "General",
  'reaction': '💞'
}, async (_0x4adb7e, _0x3309fb, _0x1e2c2e) => {
  const {
    ms: _0x3568f6,
    mybotpic: _0x377e09
  } = _0x1e2c2e;
  const _0x233699 = await isSudoTableNotEmpty();
  if (_0x233699) {
    let _0x272096 = "*My Super-User*\n\n     *Owner Number*\n :\n- 🌟 @" + conf.NUMERO_OWNER + "\n\n------ *other sudos* -----\n";
    let _0x1da036 = await getAllSudoNumbers();
    for (const _0xa6185d of _0x1da036) {
      if (_0xa6185d) {
        sudonumero = _0xa6185d.replace(/[^0-9]/g, '');
        _0x272096 += "- 💼 @" + sudonumero + "\n";
      } else {
        return;
      }
    }
    const _0x1182a8 = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
    const _0x50b165 = _0x1da036.concat([_0x1182a8]);
    console.log(_0x1da036);
    console.log(_0x50b165);
    _0x3309fb.sendMessage(_0x4adb7e, {
      'image': {
        'url': _0x377e09()
      },
      'caption': _0x272096,
      'mentions': _0x50b165
    });
  } else {
    const _0x35cce0 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + conf.OWNER_NAME + "\n" + "ORG:undefined;\n" + "TEL;type=CELL;type=VOICE;waid=" + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + "\n" + "END:VCARD";
    _0x3309fb.sendMessage(_0x4adb7e, {
      'contacts': {
        'displayName': conf.OWNER_NAME,
        'contacts': [{
          'vcard': _0x35cce0
        }]
      }
    }, {
      'quoted': _0x3568f6
    });
  }
});
zokou({
  'nomCom': "developer",
  'categorie': "General",
  'reaction': "👨‍💻"
}, async (_0x43a262, _0xf37bf8, _0x5a63de) => {
  const {
    ms: _0x3c6e40,
    mybotpic: _0x27c3e3
  } = _0x5a63de;
  const _0x2b2dea = [{
    'nom': " *✔️.Creater :Sahan Maduwantha* ",
    'numero': "94720797915"
  }, {
    'nom': " *✔️.Co Leader : Hemal Veenath* ",
    'numero': "94719552053"
  }, {
    'nom': " *✔️.Bug Test : Kanishka de Silva* ",
    'numero': "94722477361"
  }, {
    'nom': " *✔️.Test : Cyber Buddy* ",
    'numero': "94728103228"
  }, {
    'nom': " *✔️.Designer : Ishan* ",
    'numero': "94774721911"
  }];
  let _0x50ddd3 = "👋 *WELCOME TO MASTER-MD WHATSAPP USER BOT.. MASTER-MD DEVELOPERS ARE* \n\n";
  for (const _0x292466 of _0x2b2dea) {
    _0x50ddd3 += "----------------\n• " + _0x292466.nom + " : https://wa.me/" + _0x292466.numero + "\n";
  }
  var _0xce0c0e = _0x27c3e3();
  if (_0xce0c0e.match(/\.(mp4|gif)$/i)) {
    try {
      _0xf37bf8.sendMessage(_0x43a262, {
        'video': {
          'url': _0xce0c0e
        },
        'caption': _0x50ddd3
      }, {
        'quoted': _0x3c6e40
      });
    } catch (_0x54c7fe) {
      console.log("🥵🥵 Menu erreur " + _0x54c7fe);
      repondre("🥵🥵 Menu erreur " + _0x54c7fe);
    }
  } else {
    if (_0xce0c0e.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0xf37bf8.sendMessage(_0x43a262, {
          'image': {
            'url': _0xce0c0e
          },
          'caption': _0x50ddd3
        }, {
          'quoted': _0x3c6e40
        });
      } catch (_0x4b8b1e) {
        console.log("🥵🥵 Menu erreur " + _0x4b8b1e);
        repondre("🥵🥵 Menu erreur " + _0x4b8b1e);
      }
    } else {
      repondre(_0xce0c0e);
      repondre("link error");
    }
  }
});
zokou({
  'nomCom': "support",
  'categorie': "Help"
}, async (_0x44b8f3, _0x5abda1, _0x5a1bf6) => {
  const {
    ms: _0x11ce9a,
    repondre: _0x381291,
    auteurMessage: _0x1ba9cf
  } = _0x5a1bf6;
  _0x381291("*MASTER-MD Developer @Sahan's Number*");
  await _0x5abda1.sendMessage(_0x1ba9cf, {
    'text': "https://wa.me/94720797915?text=Hey_MASTER-MD_Owner_👨‍💻✅"
  }, {
    'quoted': _0x11ce9a
  });
});
zokou({
  'nomCom': "sahan",
  'categorie': "Developer"
}, async (_0x4ee01c, _0x43fc9c, _0x4720d7) => {
  const {
    ms: _0x3d6ace,
    repondre: _0x55f08e,
    auteurMessage: _0x39b44f
  } = _0x4720d7;
  _0x55f08e("☠️ ʀᴇᴅɢᴀɴɢ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛᴇᴀᴍ ʙɪᴏ ᴅᴇᴛᴀɪʟꜱ☠️ \n\n┌─────────────┐\n│👨🏻‍💻 𝐌𝐫 𝐒𝐚𝐡𝐚𝐧 𝐎𝐟𝐜 👨🏻‍💻 │\n└─────────────┘                                        \n\n📌   CYBER.REDGANG.TEAM හි සාමාජිකයෙකු වන මොහු, MASTER-MD  BOT හි LEADER සහ MAIN OWNER වේ. 👨‍💻\n\n📌   A member of the DARKALPHAXTEAM and he is the CO-OWNER and CO-CODER of the CYBER-X BOT. 👨‍💻\n\n▬▬▬▬▬▬▬▬▬▬▬\n\n⭕ PERSONAL GITHUB - https://github.com/MrMasterOfc\n\n📳 CONTACT MR.SAHAN.OFC - http://wa.me/94720797915\n\n▬▬▬▬▬▬▬▬▬▬▬\n\n*ᴍᴀꜱᴛᴇʀ ᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ : ᴠ1*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ꜱᴀʜᴀɴ ᴏꜰᴄ*"");
  await _0x43fc9c.sendMessage(_0x39b44f, {
    'text': "*Leader Link https://wa.me/94720797915?text=Hey_Owner_👨‍💻✅*"
  }, {
    'quoted': _0x3d6ace
  });
});
zokou({
  'nomCom': "hemal",
  'categorie': "Developer"
}, async (_0x106eb1, _0x453357, _0x52debf) => {
  const {
    ms: _0x45e9db,
    repondre: _0x501b12,
    auteurMessage: _0x3121f5
  } = _0x52debf;
  _0x501b12("💀 *MASTER-MD Bot Co leader is Mr Hemal Veenath. 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Galewela💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 21 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ* ");
  await _0x453357.sendMessage(_0x3121f5, {
    'text': "*Co Leader Link https://wa.me/+94719552053?text=Hey_Co_Leader_👨‍💻✅*"
  }, {
    'quoted': _0x45e9db
  });
});
zokou({
  'nomCom': "kanishka",
  'categorie': "Developer"
}, async (_0xc7a578, _0x1ac9fc, _0x3a36c8) => {
  const {
    ms: _0x43173c,
    repondre: _0x27e7e1,
    auteurMessage: _0x21f041
  } = _0x3a36c8;
  _0x27e7e1("💀 *MASTER-MD Bot Bug Tester is Kanishka De Silva 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Ambalangoda💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ* ");
  await _0x1ac9fc.sendMessage(_0x21f041, {
    'text': "*Bug Tester Link https://wa.me/+94722477361?text=Hey_Owner_👨‍💻✅*"
  }, {
    'quoted': _0x43173c
  });
});
zokou({
  'nomCom': "kavi",
  'categorie': "Developer"
}, async (_0x43baf4, _0x56ccb4, _0x421901) => {
  const {
    ms: _0x33401c,
    repondre: _0x24795b,
    auteurMessage: _0x54a9f2
  } = _0x421901;
  _0x24795b("💀 *MASTER-MD Designer is Mr Cyber kavi 💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Sri Lanka💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ* ");
  await _0x56ccb4.sendMessage(_0x54a9f2, {
    'text': "*Tester Link https://wa.me/+94743579892?text=Hey_Designer_👨‍💻✅*"
  }, {
    'quoted': _0x33401c
  });
});
zokou({
  'nomCom': "ping"
}, async (_0x581376, _0x293e8f, _0xef175b) => {
  const {
    ms: _0x355c1f,
    repondre: _0x46851b,
    auteurMessage: _0x718a40
  } = _0xef175b;
  _0x46851b("*MASTER-MD PING* \n *72 MS*");
  await _0x293e8f.sendMessage(_0x718a40, {
    'text': "*© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ*"
  }, {
    'quoted': _0x355c1f
  });
});
zokou({
  'nomCom': "ishan",
  'categorie': "Developer"
}, async (_0x1d3429, _0x2e2a2b, _0x55d597) => {
  const {
    ms: _0x5501fa,
    repondre: _0x317b31,
    auteurMessage: _0x5485d7
  } = _0x55d597;
  _0x317b31("💀 *MASTER-MD Tester is Mr Ishan  💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀From Sri Lanka💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n *💀 17 Years Old💀* \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n  *© 𝐂ʀᴇᴀᴛᴇᴅ 𝐁ʏ 𝐌ʀ 𝐒ᴀʜᴀɴ 𝐎ꜰᴄ* ");
  await _0x2e2a2b.sendMessage(_0x5485d7, {
    'text': "*Tester Link https://wa.me/+94774721911?text=Hey_Tester_👨‍💻✅*"
  }, {
    'quoted': _0x5501fa
  });
});
