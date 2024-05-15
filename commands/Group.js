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
  Sticker,
  StickerTypes
} = require('wa-sticker-formatter');
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../bdd/antilien");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../bdd/antibot");
const {
  search,
  download
} = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const {
  default: axios
} = require("axios");
france({
  'nomCom': "tagall",
  'categorie': "Group",
  'reaction': '📣'
}, async (_0x5c5f7a, _0x417117, _0x5bd14f) => {
  const {
    ms: _0xabf9a4,
    repondre: _0x4ed97c,
    arg: _0xcfc205,
    verifGroupe: _0x38a69c,
    nomGroupe: _0x4cf389,
    infosGroupe: _0x2aa930,
    nomAuteurMessage: _0x5976d2,
    verifAdmin: _0xc371fd,
    superUser: _0x203b2b
  } = _0x5bd14f;
  if (!_0x38a69c) {
    _0x4ed97c("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (!_0xcfc205 || _0xcfc205 === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0xcfc205.join(" ");
  }
  ;
  let _0x2a1bb6 = _0x38a69c ? await _0x2aa930.participants : '';
  var _0x1eef53 = '';
  _0x1eef53 += "========================\n  \n        🌟 *MASTER-MD* 🌟\n========================\n\n👥 Group : " + _0x4cf389 + " 🚀 \n👤 Author : *" + _0x5976d2 + "* 👋 \n📜 Message : *" + mess + "* 📝\n========================\n\n\n\n\n";
  let _0x594fce = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🙏🏿", '⛔️', '$', '😟', '🥵', '🐅'];
  let _0x5d0d88 = Math.floor(Math.random() * (_0x594fce.length - 0x1));
  for (const _0x556054 of _0x2a1bb6) {
    _0x1eef53 += _0x594fce[_0x5d0d88] + "      @" + _0x556054.id.split('@')[0x0] + "\n";
  }
  if (_0xc371fd || _0x203b2b) {
    _0x417117.sendMessage(_0x5c5f7a, {
      'text': _0x1eef53,
      'mentions': _0x2a1bb6.map(_0x8d95be => _0x8d95be.id)
    }, {
      'quoted': _0xabf9a4
    });
  } else {
    _0x4ed97c("command reserved for admins");
  }
});
france({
  'nomCom': "invite",
  'categorie': "Group",
  'reaction': '🙋'
}, async (_0x47de8f, _0x1f2949, _0x30ba86) => {
  const {
    repondre: _0x33a9d6,
    nomGroupe: _0x4668df,
    nomAuteurMessage: _0x2e7c4b,
    verifGroupe: _0x2ff2b2
  } = _0x30ba86;
  if (!_0x2ff2b2) {
    _0x33a9d6("wait bro , you want the link to my dm?");
    return;
  }
  ;
  var _0x45171d = await _0x1f2949.groupInviteCode(_0x47de8f);
  var _0x1cec83 = "https://chat.whatsapp.com/" + _0x45171d;
  let _0x4c7509 = "Hello " + _0x2e7c4b + " , here is the group link of " + _0x4668df + " \n\n\nClick Here To Join :" + _0x1cec83;
  _0x33a9d6(_0x4c7509);
});
france({
  'nomCom': 'promote',
  'categorie': 'Group',
  'reaction': "👨🏿‍💼"
}, async (_0x54b4d4, _0x4a06f7, _0x5d1ff9) => {
  let {
    repondre: _0x111505,
    msgRepondu: _0x2c3856,
    infosGroupe: _0x2ac22c,
    auteurMsgRepondu: _0x2ef3b1,
    verifGroupe: _0x36b6f2,
    auteurMessage: _0x3e2998,
    superUser: _0x35bd69,
    idBot: _0x2a33e7
  } = _0x5d1ff9;
  let _0x1e6cc6 = _0x36b6f2 ? await _0x2ac22c.participants : '';
  if (!_0x36b6f2) {
    return _0x111505("For groups only");
  }
  const _0x4e1cfc = _0x172b46 => {
    for (const _0x2d5d8f of _0x1e6cc6) {
      if (_0x2d5d8f.id !== _0x172b46) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x508518 = _0x457be9 => {
    let _0x5ffc87 = [];
    for (m of _0x457be9) {
      if (m.admin == null) {
        continue;
      }
      _0x5ffc87.push(m.id);
    }
    return _0x5ffc87;
  };
  const _0x1c5b55 = _0x36b6f2 ? _0x508518(_0x1e6cc6) : '';
  let _0x2c9c40 = _0x36b6f2 ? _0x1c5b55.includes(_0x2ef3b1) : false;
  let _0x2bdb48 = _0x4e1cfc(_0x2ef3b1);
  let _0x3268f6 = _0x36b6f2 ? _0x1c5b55.includes(_0x3e2998) : false;
  zkad = _0x36b6f2 ? _0x1c5b55.includes(_0x2a33e7) : false;
  try {
    if (_0x3268f6 || _0x35bd69) {
      if (_0x2c3856) {
        if (zkad) {
          if (_0x2bdb48) {
            if (_0x2c9c40 == false) {
              var _0x27665d = "🎊🍾  @" + _0x2ef3b1.split('@')[0x0] + " Has been promoted as a group Admin.";
              await _0x4a06f7.groupParticipantsUpdate(_0x54b4d4, [_0x2ef3b1], "promote");
              _0x4a06f7.sendMessage(_0x54b4d4, {
                'text': _0x27665d,
                'mentions': [_0x2ef3b1]
              });
            } else {
              return _0x111505("This member is already an administrator of the group.");
            }
          } else {
            return _0x111505("This user is not part of the group.");
          }
        } else {
          return _0x111505("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x111505("please tag the member to be nominated");
      }
    } else {
      return _0x111505("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x3de11f) {
    _0x111505("oups " + _0x3de11f);
  }
});
france({
  'nomCom': "demote",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x41658f, _0x2972b4, _0x3808fe) => {
  let {
    repondre: _0x3d4753,
    msgRepondu: _0x40e27c,
    infosGroupe: _0x4081ad,
    auteurMsgRepondu: _0x23d272,
    verifGroupe: _0x3967cb,
    auteurMessage: _0x137d1e,
    superUser: _0x2de852,
    idBot: _0x2ed1ee
  } = _0x3808fe;
  let _0x12af28 = _0x3967cb ? await _0x4081ad.participants : '';
  if (!_0x3967cb) {
    return _0x3d4753("For groups only");
  }
  const _0x4a1b0c = _0x158fec => {
    for (const _0x678117 of _0x12af28) {
      if (_0x678117.id !== _0x158fec) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x184801 = _0x12bc95 => {
    let _0x3bdc39 = [];
    for (m of _0x12bc95) {
      if (m.admin == null) {
        continue;
      }
      _0x3bdc39.push(m.id);
    }
    return _0x3bdc39;
  };
  const _0x33aac4 = _0x3967cb ? _0x184801(_0x12af28) : '';
  let _0x3a5662 = _0x3967cb ? _0x33aac4.includes(_0x23d272) : false;
  let _0x307c43 = _0x4a1b0c(_0x23d272);
  let _0x9a4e30 = _0x3967cb ? _0x33aac4.includes(_0x137d1e) : false;
  zkad = _0x3967cb ? _0x33aac4.includes(_0x2ed1ee) : false;
  try {
    if (_0x9a4e30 || _0x2de852) {
      if (_0x40e27c) {
        if (zkad) {
          if (_0x307c43) {
            if (_0x3a5662 == false) {
              _0x3d4753("This member is not a group administrator.");
            } else {
              var _0x358a99 = '@' + _0x23d272.split('@')[0x0] + " was removed from his position as a group administrator\n";
              await _0x2972b4.groupParticipantsUpdate(_0x41658f, [_0x23d272], "demote");
              _0x2972b4.sendMessage(_0x41658f, {
                'text': _0x358a99,
                'mentions': [_0x23d272]
              });
            }
          } else {
            return _0x3d4753("This user is not part of the group.");
          }
        } else {
          return _0x3d4753("Sorry I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x3d4753("please tag the member to be removed");
      }
    } else {
      return _0x3d4753("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x434f4a) {
    _0x3d4753("oups " + _0x434f4a);
  }
});
france({
  'nomCom': "remove",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x59d348, _0x48ae3c, _0x258d0e) => {
  let {
    repondre: _0x32311c,
    msgRepondu: _0x29ec63,
    infosGroupe: _0x209863,
    auteurMsgRepondu: _0x44034c,
    verifGroupe: _0x2030ff,
    nomAuteurMessage: _0x3034ca,
    auteurMessage: _0x1a441c,
    superUser: _0x1ac10a,
    idBot: _0x3e8f79
  } = _0x258d0e;
  let _0x4a1202 = _0x2030ff ? await _0x209863.participants : '';
  if (!_0x2030ff) {
    return _0x32311c("for groups only");
  }
  const _0x54be9f = _0x236bab => {
    for (const _0x584c28 of _0x4a1202) {
      if (_0x584c28.id !== _0x236bab) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x263c86 = _0x3c33e5 => {
    let _0x324439 = [];
    for (m of _0x3c33e5) {
      if (m.admin == null) {
        continue;
      }
      _0x324439.push(m.id);
    }
    return _0x324439;
  };
  const _0x38967b = _0x2030ff ? _0x263c86(_0x4a1202) : '';
  let _0x4ab6f5 = _0x2030ff ? _0x38967b.includes(_0x44034c) : false;
  let _0x2043e2 = _0x54be9f(_0x44034c);
  let _0x14c90d = _0x2030ff ? _0x38967b.includes(_0x1a441c) : false;
  zkad = _0x2030ff ? _0x38967b.includes(_0x3e8f79) : false;
  try {
    if (_0x14c90d || _0x1ac10a) {
      if (_0x29ec63) {
        if (zkad) {
          if (_0x2043e2) {
            if (_0x4ab6f5 == false) {
              var _0x54c67f = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
                'pack': "MASTER-MD",
                'author': _0x3034ca,
                'type': StickerTypes.FULL,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x32,
                'background': '#000000'
              });
              await _0x54c67f.toFile("st.webp");
              var _0x407272 = '@' + _0x44034c.split('@')[0x0] + " was removed from the group.\n";
              await _0x48ae3c.groupParticipantsUpdate(_0x59d348, [_0x44034c], "remove");
              _0x48ae3c.sendMessage(_0x59d348, {
                'text': _0x407272,
                'mentions': [_0x44034c]
              });
            } else {
              _0x32311c("This member cannot be removed because he is an administrator of the group.");
            }
          } else {
            return _0x32311c("This user is not part of the group.");
          }
        } else {
          return _0x32311c("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x32311c("please tag the member to be removed");
      }
    } else {
      return _0x32311c("Sorry I cannot perform this action because you are not an administrator of the group .");
    }
  } catch (_0x1fe091) {
    _0x32311c("oups " + _0x1fe091);
  }
});
france({
  'nomCom': "add",
  'categorie': "Group",
  'reaction': '👨🏿‍💼'
}, async (_0x18174f, _0x2a66f8, _0x2ef667) => {
  if (!_0x53d5cb) {
    return _0x5866a3("for groups only");
  }
  const _0xba7ed7 = await message.groupMetadata(message.jid);
  const _0x271978 = await isAdmin(_0xba7ed7, message.client.user.jid);
  if (!_0x271978) {
    return await message.send("_I'm not admin._");
  }
  match = match || message.reply_message.jid;
  if (!match) {
    return await message.send("Example : add 254757835036");
  }
  match = jidToNum(match);
  const _0x5c8d6e = await message.Add(match);
  if (_0x5c8d6e == "403") {
    return await message.send("_Failed, Invite sent_");
  } else {
    if (_0x5c8d6e && _0x5c8d6e != "200") {
      return await message.send(_0x5c8d6e, {
        'quoted': message.data
      });
    }
  }
});
france({
  'nomCom': 'del',
  'categorie': "Group",
  'reaction': '🧹'
}, async (_0x5031f5, _0x391b49, _0xbb7ade) => {
  const {
    ms: _0x310ebb,
    repondre: _0x3a52a7,
    verifGroupe: _0x3da31b,
    auteurMsgRepondu: _0x4e54b1,
    idBot: _0x1b3b90,
    msgRepondu: _0xcd2157,
    verifAdmin: _0x158249,
    superUser: _0x1335a1
  } = _0xbb7ade;
  if (!_0xcd2157) {
    _0x3a52a7("Please mention the message to delete.");
    return;
  }
  if (_0x1335a1 && _0x4e54b1 == _0x1b3b90) {
    if (_0x4e54b1 == _0x1b3b90) {
      const _0x1062b6 = {
        'remoteJid': _0x5031f5,
        'fromMe': true,
        'id': _0x310ebb.message.extendedTextMessage.contextInfo.stanzaId
      };
      await _0x391b49.sendMessage(_0x5031f5, {
        'delete': _0x1062b6
      });
      return;
    }
  }
  if (_0x3da31b) {
    if (_0x158249 || _0x1335a1) {
      try {
        const _0x544c54 = {
          'remoteJid': _0x5031f5,
          'id': _0x310ebb.message.extendedTextMessage.contextInfo.stanzaId,
          'fromMe': false,
          'participant': _0x310ebb.message.extendedTextMessage.contextInfo.participant
        };
        await _0x391b49.sendMessage(_0x5031f5, {
          'delete': _0x544c54
        });
        return;
      } catch (_0x4ff22b) {
        _0x3a52a7("I need admin rights.");
      }
    } else {
      _0x3a52a7("Sorry, you are not an administrator of the group.");
    }
  }
});
france({
  'nomCom': "info",
  'categorie': "Group"
}, async (_0x565bc8, _0x31d825, _0xc7e090) => {
  const {
    ms: _0x1162ac,
    repondre: _0x3ee967,
    verifGroupe: _0x26aed2
  } = _0xc7e090;
  if (!_0x26aed2) {
    _0x3ee967("order reserved for the group only");
    return;
  }
  ;
  try {
    ppgroup = await _0x31d825.profilePictureUrl(_0x565bc8, 'image');
  } catch {
    ppgroup = conf.IMAGE_MENU;
  }
  const _0x4f7807 = await _0x31d825.groupMetadata(_0x565bc8);
  let _0x8c3e50 = {
    'image': {
      'url': ppgroup
    },
    'caption': "*━━━━『GROUP INFO』━━━━*\n\n*🎐Name:* " + _0x4f7807.subject + "\n\n*🔩Group's ID:* " + _0x565bc8 + "\n\n*🔍Desc:* \n\n" + _0x4f7807.desc
  };
  _0x31d825.sendMessage(_0x565bc8, _0x8c3e50, {
    'quoted': _0x1162ac
  });
});
france({
  'nomCom': "antilink",
  'categorie': 'Group',
  'reaction': '🔗'
}, async (_0x523069, _0x510b74, _0x3086a6) => {
  var {
    repondre: _0x234a51,
    arg: _0x3c9692,
    verifGroupe: _0x4a11d1,
    superUser: _0x18097c,
    verifAdmin: _0x15cc2f
  } = _0x3086a6;
  if (!_0x4a11d1) {
    return _0x234a51("*for groups only*");
  }
  if (_0x18097c || _0x15cc2f) {
    const _0x461e0c = await verifierEtatJid(_0x523069);
    try {
      if (!_0x3c9692 || !_0x3c9692[0x0] || _0x3c9692 === " ") {
        _0x234a51("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
        return;
      }
      ;
      if (_0x3c9692[0x0] === 'on') {
        if (_0x461e0c) {
          _0x234a51("the antilink is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x523069, "oui");
          _0x234a51("the antilink is activated successfully");
        }
      } else {
        if (_0x3c9692[0x0] === "off") {
          if (_0x461e0c) {
            await ajouterOuMettreAJourJid(_0x523069, "non");
            _0x234a51("The antilink has been successfully deactivated");
          } else {
            _0x234a51("antilink is not activated for this group");
          }
        } else {
          if (_0x3c9692.join('').split('/')[0x0] === "action") {
            let _0x2527c2 = _0x3c9692.join('').split('/')[0x1].toLowerCase();
            if (_0x2527c2 == "remove" || _0x2527c2 == "warn" || _0x2527c2 == "delete") {
              await mettreAJourAction(_0x523069, _0x2527c2);
              _0x234a51("The anti-link action has been updated to " + _0x3c9692.join('').split('/')[0x1]);
            } else {
              _0x234a51("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x234a51("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
          }
        }
      }
    } catch (_0xb5a470) {
      _0x234a51(_0xb5a470);
    }
  } else {
    _0x234a51("You are not entitled to this order");
  }
});
france({
  'nomCom': "antibot",
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x5e39c9, _0x1109a5, _0x209919) => {
  var {
    repondre: _0x3afdac,
    arg: _0x5ce344,
    verifGroupe: _0x1c27ee,
    superUser: _0x184525,
    verifAdmin: _0x1da4cf
  } = _0x209919;
  if (!_0x1c27ee) {
    return _0x3afdac("*for groups only*");
  }
  if (_0x184525 || _0x1da4cf) {
    const _0x3680c2 = await atbverifierEtatJid(_0x5e39c9);
    try {
      if (!_0x5ce344 || !_0x5ce344[0x0] || _0x5ce344 === " ") {
        _0x3afdac("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
        return;
      }
      ;
      if (_0x5ce344[0x0] === 'on') {
        if (_0x3680c2) {
          _0x3afdac("the antibot is already activated for this group");
        } else {
          await atbajouterOuMettreAJourJid(_0x5e39c9, 'oui');
          _0x3afdac("the antibot is successfully activated");
        }
      } else {
        if (_0x5ce344[0x0] === "off") {
          if (_0x3680c2) {
            await atbajouterOuMettreAJourJid(_0x5e39c9, "non");
            _0x3afdac("The antibot has been successfully deactivated");
          } else {
            _0x3afdac("antibot is not activated for this group");
          }
        } else {
          if (_0x5ce344.join('').split('/')[0x0] === "action") {
            let _0x19a0ac = _0x5ce344.join('').split('/')[0x1].toLowerCase();
            if (_0x19a0ac == "remove" || _0x19a0ac == "warn" || _0x19a0ac == 'delete') {
              await mettreAJourAction(_0x5e39c9, _0x19a0ac);
              _0x3afdac("The anti-bot action has been updated to " + _0x5ce344.join('').split('/')[0x1]);
            } else {
              _0x3afdac("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x3afdac("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
          }
        }
      }
    } catch (_0x285474) {
      _0x3afdac(_0x285474);
    }
  } else {
    _0x3afdac("You are not entitled to this order");
  }
});
france({
  'nomCom': "group",
  'categorie': 'Group'
}, async (_0x982a6f, _0x1a4163, _0x385271) => {
  const {
    repondre: _0x4094ba,
    verifGroupe: _0x954441,
    verifAdmin: _0x3af2bd,
    superUser: _0x472bb3,
    arg: _0x14d53a
  } = _0x385271;
  if (!_0x954441) {
    _0x4094ba("order reserved for group only");
    return;
  }
  ;
  if (_0x472bb3 || _0x3af2bd) {
    if (!_0x14d53a[0x0]) {
      _0x4094ba("Instructions:\n\nType group open or close");
      return;
    }
    const _0x1a7020 = _0x14d53a.join(" ");
    switch (_0x1a7020) {
      case "open":
        await _0x1a4163.groupSettingUpdate(_0x982a6f, "not_announcement");
        _0x4094ba("group open");
        break;
      case "close":
        await _0x1a4163.groupSettingUpdate(_0x982a6f, "announcement");
        _0x4094ba("Group close successfully");
        break;
      default:
        _0x4094ba("Please don't invent an option");
    }
  } else {
    _0x4094ba("order reserved for the administratorr");
    return;
  }
});
france({
  'nomCom': "left",
  'categorie': "Mods"
}, async (_0x22ae92, _0x6fbd33, _0x108550) => {
  const {
    repondre: _0x2f1341,
    verifGroupe: _0x560f03,
    superUser: _0x47fa66
  } = _0x108550;
  if (!_0x560f03) {
    _0x2f1341("order reserved for group only");
    return;
  }
  ;
  if (!_0x47fa66) {
    _0x2f1341("command reserved for the bot owner");
    return;
  }
  await _0x2f1341("sayonnara");
  _0x6fbd33.groupLeave(_0x22ae92);
});
france({
  'nomCom': "gname",
  'categorie': 'Group'
}, async (_0x349e63, _0x2fd414, _0x5870bb) => {
  const {
    arg: _0x5edae0,
    repondre: _0x1973d6,
    verifAdmin: _0x537331
  } = _0x5870bb;
  if (!_0x537331) {
    _0x1973d6("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x5edae0[0x0]) {
    _0x1973d6("Please enter the group name");
    return;
  }
  ;
  const _0x111bf2 = _0x5edae0.join(" ");
  await _0x2fd414.groupUpdateSubject(_0x349e63, _0x111bf2);
  _0x1973d6("group name refresh: *" + _0x111bf2 + '*');
});
france({
  'nomCom': "gdesc",
  'categorie': 'Group'
}, async (_0x42401f, _0x4469fc, _0x5ba1d6) => {
  const {
    arg: _0x50998a,
    repondre: _0xa7adc7,
    verifAdmin: _0x6a6f80
  } = _0x5ba1d6;
  if (!_0x6a6f80) {
    _0xa7adc7("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x50998a[0x0]) {
    _0xa7adc7("Please enter the group description");
    return;
  }
  ;
  const _0x29baed = _0x50998a.join(" ");
  await _0x4469fc.groupUpdateDescription(_0x42401f, _0x29baed);
  _0xa7adc7("group description update: *" + _0x29baed + '*');
});
france({
  'nomCom': "revoke",
  'categorie': 'Group'
}, async (_0x137986, _0x13c21d, _0x1b59e5) => {
  if (!_0x91266b) {
    _0x58fa26("for admins.");
    return;
  }
  ;
  if (!_0x4f200a) {
    _0x58fa26("This command is only allowed in groups.");
  }
  ;
  await _0x13c21d.groupRevokeInvite(_0x137986);
  _0x58fa26("group link revoked.");
});
france({
  'nomCom': 'gpp',
  'categorie': 'Group'
}, async (_0x5482a6, _0x479c36, _0x5086aa) => {
  const {
    repondre: _0x12e356,
    msgRepondu: _0x2823e9,
    verifAdmin: _0x5d2ba0
  } = _0x5086aa;
  if (!_0x5d2ba0) {
    _0x12e356("order reserved for administrators of the group");
    return;
  }
  ;
  if (_0x2823e9.imageMessage) {
    const _0x4e437d = await _0x479c36.downloadAndSaveMediaMessage(_0x2823e9.imageMessage);
    await _0x479c36.updateProfilePicture(_0x5482a6, {
      'url': _0x4e437d
    }).then(() => {
      _0x479c36.sendMessage(_0x5482a6, {
        'text': "Group pfp changed"
      });
      fs.unlinkSync(_0x4e437d);
    })["catch"](() => _0x479c36.sendMessage(_0x5482a6, {
      'text': err
    }));
  } else {
    _0x12e356("Please mention an image");
  }
});
france({
  'nomCom': "hidetag",
  'categorie': 'Group',
  'reaction': '🎤'
}, async (_0x4760d4, _0x461f8b, _0x189759) => {
  const {
    repondre: _0x90e592,
    msgRepondu: _0x5e4f63,
    verifGroupe: _0x5b18a7,
    arg: _0x33c791,
    verifAdmin: _0x400710,
    superUser: _0x4404ca
  } = _0x189759;
  if (!_0x5b18a7) {
    _0x90e592("This command is only allowed in groups.");
  }
  ;
  if (_0x400710 || _0x4404ca) {
    let _0x58dd32 = await _0x461f8b.groupMetadata(_0x4760d4);
    let _0x4d1441 = [];
    for (const _0x1615d5 of _0x58dd32.participants) {
      _0x4d1441.push(_0x1615d5.id);
    }
    if (_0x5e4f63) {
      console.log(_0x5e4f63);
      let _0x4fddbd;
      if (_0x5e4f63.imageMessage) {
        let _0x93937f = await _0x461f8b.downloadAndSaveMediaMessage(_0x5e4f63.imageMessage);
        _0x4fddbd = {
          'image': {
            'url': _0x93937f
          },
          'caption': _0x5e4f63.imageMessage.caption,
          'mentions': _0x4d1441
        };
      } else {
        if (_0x5e4f63.videoMessage) {
          let _0x3d5ef5 = await _0x461f8b.downloadAndSaveMediaMessage(_0x5e4f63.videoMessage);
          _0x4fddbd = {
            'video': {
              'url': _0x3d5ef5
            },
            'caption': _0x5e4f63.videoMessage.caption,
            'mentions': _0x4d1441
          };
        } else {
          if (_0x5e4f63.audioMessage) {
            let _0x184a8a = await _0x461f8b.downloadAndSaveMediaMessage(_0x5e4f63.audioMessage);
            _0x4fddbd = {
              'audio': {
                'url': _0x184a8a
              },
              'mimetype': 'audio/mp4',
              'mentions': _0x4d1441
            };
          } else {
            if (_0x5e4f63.stickerMessage) {
              let _0x313a9b = await _0x461f8b.downloadAndSaveMediaMessage(_0x5e4f63.stickerMessage);
              let _0x559259 = new Sticker(_0x313a9b, {
                'pack': "MASTER-MD-tag",
                'type': StickerTypes.CROPPED,
                'categories': ['🤩', '🎉'],
                'id': '12345',
                'quality': 0x46,
                'background': "transparent"
              });
              const _0x359caf = await _0x559259.toBuffer();
              _0x4fddbd = {
                'sticker': _0x359caf,
                'mentions': _0x4d1441
              };
            } else {
              _0x4fddbd = {
                'text': _0x5e4f63.conversation,
                'mentions': _0x4d1441
              };
            }
          }
        }
      }
      _0x461f8b.sendMessage(_0x4760d4, _0x4fddbd);
    } else {
      if (!_0x33c791 || !_0x33c791[0x0]) {
        _0x90e592("Enter the text to announce or mention the message to announce");
        ;
        return;
      }
      ;
      _0x461f8b.sendMessage(_0x4760d4, {
        'text': _0x33c791.join(" "),
        'mentions': _0x4d1441
      });
    }
  } else {
    _0x90e592("Command reserved for administrators.");
  }
});
france({
  'nomCom': "apk",
  'reaction': '✨',
  'categorie': "Download"
}, async (_0x47ffb3, _0x2885c0, _0x4ae792) => {
  const {
    repondre: _0x50a3bc,
    arg: _0x31c4eb,
    ms: _0x51bc1d
  } = _0x4ae792;
  try {
    const _0x197239 = _0x31c4eb.join(" ");
    if (!_0x197239) {
      return _0x50a3bc("*Enter the name of the application to search for*");
    }
    const _0x16c50f = await search(_0x197239);
    if (_0x16c50f.length === 0x0) {
      return _0x50a3bc("*can't find application, please enter another name*");
    }
    const _0x3c7014 = await download(_0x16c50f[0x0].id);
    const _0x5ab098 = parseInt(_0x3c7014.size);
    if (_0x5ab098 > 0x12c) {
      return _0x50a3bc("The file exceeds 300 MB, unable to download.");
    }
    const _0x208e36 = _0x3c7014.dllink;
    const _0x28cc96 = "*🌠FLASH-MD APPLICATION🌠*\n\n*Name :* " + _0x3c7014.name + "\n*Id :* " + _0x3c7014["package"] + "\n*Last Update :* " + _0x3c7014.lastup + "\n*Size :* " + _0x3c7014.size + "\n";
    const _0x29dbe9 = (_0x3c7014?.['name'] || "Downloader") + '.apk';
    const _0x2f3d82 = await axios.get(_0x208e36, {
      'responseType': "stream"
    });
    const _0x1e6963 = fs.createWriteStream(_0x29dbe9);
    _0x2f3d82.data.pipe(_0x1e6963);
    await new Promise((_0x1d6608, _0x2fed17) => {
      _0x1e6963.on("finish", _0x1d6608);
      _0x1e6963.on("error", _0x2fed17);
    });
    const _0x24998d = {
      'document': fs.readFileSync(_0x29dbe9),
      'mimetype': 'application/vnd.android.package-archive',
      'fileName': _0x29dbe9
    };
    _0x2885c0.sendMessage(_0x47ffb3, {
      'image': {
        'url': _0x3c7014.icon
      },
      'caption': _0x28cc96
    }, {
      'quoted': _0x51bc1d
    });
    _0x2885c0.sendMessage(_0x47ffb3, _0x24998d, {
      'quoted': _0x51bc1d
    });
    fs.unlinkSync(_0x29dbe9);
  } catch (_0x2d07c2) {
    console.error("Erreur lors du traitement de la commande apk:", _0x2d07c2);
    _0x50a3bc("*Error during apk command processing*");
  }
});
const cron = require("../bdd/cron");
france({
  'nomCom': "automute",
  'categorie': "Group"
}, async (_0x1b5be6, _0x1cd119, _0x354932) => {
  const {
    arg: _0x214963,
    repondre: _0x2bf00c,
    verifAdmin: _0x1043f3
  } = _0x354932;
  if (!_0x1043f3) {
    _0x2bf00c("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x1b5be6);
  if (!_0x214963 || _0x214963.length == 0x0) {
    let _0x50dd02;
    if (group_cron == null || group_cron.mute_at == null) {
      _0x50dd02 = "No time set for automatic mute";
    } else {
      _0x50dd02 = "The group will be muted at " + group_cron.mute_at.split(':')[0x0] + " " + group_cron.mute_at.split(':')[0x1];
    }
    let _0x1a24aa = "* *State:* " + _0x50dd02 + "\n        * *Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'\n        Example automute 9:30\n        * To delete the automatic mute, use the command *automute del*";
    _0x2bf00c(_0x1a24aa);
    return;
  } else {
    let _0x4ab280 = _0x214963.join(" ");
    if (_0x4ab280.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x2bf00c("No cronometrage is active");
      } else {
        await cron.delCron(_0x1b5be6);
        _0x2bf00c("The automatic mute has been removed; restart to apply changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x4ab280.includes(':')) {
      await cron.addCron(_0x1b5be6, "mute_at", _0x4ab280);
      _0x2bf00c("Setting up automatic mute for " + _0x4ab280 + " ; restart to apply changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x2bf00c("Please enter a valid time with hour and minute separated by :");
    }
  }
});
france({
  'nomCom': "autounmute",
  'categorie': "Group"
}, async (_0x24ad66, _0x147d08, _0x26edd4) => {
  const {
    arg: _0x51dd3e,
    repondre: _0x77c908,
    verifAdmin: _0x1d40b8
  } = _0x26edd4;
  if (!_0x1d40b8) {
    _0x77c908("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x24ad66);
  if (!_0x51dd3e || _0x51dd3e.length == 0x0) {
    let _0x38d68d;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0x38d68d = "No time set for autounmute";
    } else {
      _0x38d68d = "The group will be un-muted at " + group_cron.unmute_at.split(':')[0x0] + "H " + group_cron.unmute_at.split(':')[0x1];
    }
    let _0x11fe31 = "* *State:* " + _0x38d68d + "\n      * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'\n      Example autounmute 7:30\n      * To delete autounmute, use the command *autounmute del*";
    _0x77c908(_0x11fe31);
    return;
  } else {
    let _0x127532 = _0x51dd3e.join(" ");
    if (_0x127532.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x77c908("No cronometrage has been activated");
      } else {
        await cron.delCron(_0x24ad66);
        _0x77c908("The autounmute has been removed; restart to apply the changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x127532.includes(':')) {
      await cron.addCron(_0x24ad66, "unmute_at", _0x127532);
      _0x77c908("Setting up autounmute for " + _0x127532 + "; restart to apply the changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x77c908("Please enter a valid time with hour and minute separated by :");
    }
  }
});
france({
  'nomCom': 'fkick',
  'categorie': "Group"
}, async (_0x3858c3, _0x1c1cf4, _0x16297f) => {
  const {
    arg: _0x21b4b7,
    repondre: _0x18b975,
    verifAdmin: _0x3c2502,
    superUser: _0x165f12,
    verifZokouAdmin: _0x1f26b0
  } = _0x16297f;
  if (_0x3c2502 || _0x165f12) {
    if (!_0x1f26b0) {
      _0x18b975("You need administrative rights to perform this command");
      return;
    }
    if (!_0x21b4b7 || _0x21b4b7.length == 0x0) {
      _0x18b975("Please enter the country code whose members will be removed");
      return;
    }
    let _0x42a2a3 = await _0x1c1cf4.groupMetadata(_0x3858c3);
    let _0x2d9dc3 = _0x42a2a3.participants;
    for (let _0x4b2e90 = 0x0; _0x4b2e90 < _0x2d9dc3.length; _0x4b2e90++) {
      if (_0x2d9dc3[_0x4b2e90].id.startsWith(_0x21b4b7[0x0]) && _0x2d9dc3[_0x4b2e90].admin === null) {
        await _0x1c1cf4.groupParticipantsUpdate(_0x3858c3, [_0x2d9dc3[_0x4b2e90].id], "remove");
      }
    }
  } else {
    _0x18b975("Sorry, you are not an administrator of the group");
  }
});
france({
  'nomCom': 'nsfw',
  'categorie': "Group"
}, async (_0x52aed2, _0x1b80e5, _0x2186af) => {
  const {
    arg: _0x2662d3,
    repondre: _0x1d4c6c,
    verifAdmin: _0x2d8926
  } = _0x2186af;
  if (!_0x2d8926) {
    _0x1d4c6c("Sorry, you cannot enable NSFW content without being an administrator of the group");
    return;
  }
  let _0x501efb = require("../bdd/hentai");
  let _0x6438a2 = await _0x501efb.checkFromHentaiList(_0x52aed2);
  if (_0x2662d3[0x0] == 'on') {
    if (_0x6438a2) {
      _0x1d4c6c("NSFW content is already active for this group");
      return;
    }
    ;
    await _0x501efb.addToHentaiList(_0x52aed2);
    _0x1d4c6c("NSFW content is now active for this group");
  } else {
    if (_0x2662d3[0x0] == "off") {
      if (!_0x6438a2) {
        _0x1d4c6c("NSFW content is already disabled for this group");
        return;
      }
      ;
      await _0x501efb.removeFromHentaiList(_0x52aed2);
      _0x1d4c6c("NSFW content is now disabled for this group");
    } else {
      _0x1d4c6c("You must enter \"on\" or \"off\"");
    }
  }
});
france({
  'nomCom': "antiword",
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x1f34cd, _0x2bfced, _0x14f448) => {
  var {
    repondre: _0x5ad14a,
    arg: _0x540adb,
    verifGroupe: _0x1407d3,
    superUser: _0xa5c46c,
    verifAdmin: _0x49fa61
  } = _0x14f448;
  if (!_0x1407d3) {
    return _0x5ad14a("*This command is for groups only*");
  }
  if (_0xa5c46c || _0x49fa61) {
    const _0x5f2e35 = await verifierEtatJid(_0x1f34cd);
    try {
      if (!_0x540adb || !_0x540adb[0x0] || _0x540adb === " ") {
        _0x5ad14a("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
        return;
      }
      ;
      if (_0x540adb[0x0] === 'on') {
        if (_0x5f2e35) {
          _0x5ad14a("the antiword is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x1f34cd, 'oui');
          _0x5ad14a("the antiword is activated successfully");
        }
      } else {
        if (_0x540adb[0x0] === "off") {
          if (_0x5f2e35) {
            await ajouterOuMettreAJourJid(_0x1f34cd, "non");
            _0x5ad14a("The antiword has been successfully deactivated");
          } else {
            _0x5ad14a("antiword is not activated for this group");
          }
        } else {
          if (_0x540adb.join('').split('/')[0x0] === "action") {
            let _0x58aa2f = _0x540adb.join('').split('/')[0x1].toLowerCase();
            if (_0x58aa2f == "remove" || _0x58aa2f == "warn" || _0x58aa2f == "delete") {
              await mettreAJourAction(_0x1f34cd, _0x58aa2f);
              _0x5ad14a("The anti-word action has been updated to " + _0x540adb.join('').split('/')[0x1]);
            } else {
              _0x5ad14a("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x5ad14a("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the word sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
          }
        }
      }
    } catch (_0x5de5c5) {
      _0x5ad14a(_0x5de5c5);
    }
  } else {
    _0x5ad14a("You are not entitled to this order");
  }
});
