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
} = require('../framework/france');
const axios = require("axios");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("../bdd/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("../bdd/banGroup");
const {
  generateProfilePicture
} = require('../framework/dl/Function');
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("../bdd/onlyAdmin");
const {
  removeSudoNumber,
  addSudoNumber,
  issudo
} = require('../bdd/sudo');
const fs = require('fs');
const sleep = _0x3cb69e => {
  return new Promise(_0x37d75f => {
    setTimeout(_0x37d75f, _0x3cb69e);
  });
};
france({
  'nomCom': "lastseen",
  'categorie': "WhatsApp"
}, async (_0x2b66a5, _0x2796a3, _0x1a3c85) => {
  if (!_0xc06f87) {
    _0x4529cc(_0x4a5c6b(0x180));
    return;
  }
  if (!_0x24b36e[0x0]) {
    _0x4529cc(_0x4a5c6b(0x1f4));
    return;
  }
  let _0x10828c = _0x24b36e[_0x4a5c6b(0x1f8)](" ");
  const _0x5c525f = [_0x4a5c6b(0x1c1), _0x4a5c6b(0x1c7), _0x4a5c6b(0x1c0), 'none'];
  if (!_0x5c525f[_0x4a5c6b(0x1e2)](_0x10828c)) {
    return _0x4529cc("Choose a setting from this list: " + _0x5c525f[_0x4a5c6b(0x1f8)]('/'));
  }
  await _0x2796a3[_0x4a5c6b(0x18b)](_0x10828c);
  await _0x4529cc(_0x4a5c6b(0x1e5) + _0x10828c + '*');
});
france({
  'nomCom': "online",
  'categorie': 'WhatsApp'
}, async (_0x3982ed, _0xf2ee7e, _0x288516) => {
  if (!_0x4db779) {
    _0x50b296("Only Owners can use this command");
    return;
  }
  if (!_0x35eb07[0x0]) {
    _0x50b296("Provide a setting to be updated. Example:\nonline all");
    return;
  }
  let _0x1f4b2e = _0x35eb07.join(" ");
  const _0x5b88aa = ["all", "match_last_seen"];
  if (!_0x5b88aa.includes(_0x1f4b2e)) {
    return _0x50b296("Choose a setting from this list: " + _0x5b88aa.join('/'));
  }
  await _0xf2ee7e.updateOnlinePrivacy(_0x1f4b2e);
  await _0x50b296("Online privacy settings updated to *" + _0x1f4b2e + '*');
});
france({
  'nomCom': "mydp",
  'categorie': "WhatsApp"
}, async (_0x25ca2e, _0x310563, _0x27b7ee) => {
  if (!_0x4ddab0) {
    _0x14ce15("Only Owners can use this command");
    return;
  }
  if (!_0x42607c[0x0]) {
    _0x14ce15("Provide a setting to be updated. Example:\nmydp all");
    return;
  }
  let _0x1173a6 = _0x42607c.join(" ");
  const _0x26e5f6 = ["all", "contacts", "contact_blacklist", "none"];
  if (!_0x26e5f6.includes(_0x1173a6)) {
    return _0x14ce15("Choose a setting from this list: " + _0x26e5f6.join('/'));
  }
  await _0x310563.updateProfilePicturePrivacy(_0x1173a6);
  await _0x14ce15("Your profile picture privacy settings updated to *" + _0x1173a6 + '*');
});
france({
  'nomCom': "mystatus",
  'categorie': "WhatsApp"
}, async (_0x466897, _0x42b8af, _0x407e77) => {
  const {
    idBot: _0x2c451a,
    arg: _0x52c747,
    ms: _0x43edf2,
    repondre: _0x320502,
    superUser: _0x46dfe1,
    msgRepondu: _0x2f554a
  } = _0x407e77;
  if (!_0x46dfe1) {
    _0x320502("Only Owners can use this command");
    return;
  }
  if (!_0x52c747[0x0]) {
    _0x320502("Provide a setting to be updated. Example:\nmystatus all");
    return;
  }
  let _0x3aea11 = _0x52c747.join(" ");
  const _0x700d27 = ["all", 'contacts', 'contact_blacklist', 'none'];
  if (!_0x700d27.includes(_0x3aea11)) {
    return _0x320502("Choose a setting from this list: " + _0x700d27.join('/'));
  }
  await _0x42b8af.updateStatusPrivacy(_0x3aea11);
  await _0x320502("Your status privacy settings updated to *" + _0x3aea11 + '*');
});
france({
  'nomCom': 'groupadd',
  'categorie': "WhatsApp"
}, async (_0x14d927, _0x1e474f, _0x388dd7) => {
  const {
    idBot: _0x4644b1,
    arg: _0x3275bb,
    ms: _0x476150,
    repondre: _0x4f6497,
    superUser: _0x29fd9b,
    msgRepondu: _0x5ba226
  } = _0x388dd7;
  if (!_0x29fd9b) {
    _0x4f6497("Only Owners can use this command");
    return;
  }
  if (!_0x3275bb[0x0]) {
    _0x4f6497("Provide a setting to be updated. Example:\ngroupadd all");
    return;
  }
  let _0x343fc9 = _0x3275bb.join(" ");
  const _0x4e0cbb = ["all", "contacts", "contact_blacklist", "none"];
  if (!_0x4e0cbb.includes(_0x343fc9)) {
    return _0x4f6497("Choose a setting from this list: " + _0x4e0cbb.join('/'));
  }
  await _0x1e474f.updateGroupsAddPrivacy(_0x343fc9);
  await _0x4f6497("Your group add privacy settings updated to *" + _0x343fc9 + '*');
});
france({
  'nomCom': 'privacy',
  'categorie': 'WhatsApp'
}, async (_0x35d785, _0x2516d6, _0x37f88d) => {
  const {
    idBot: _0x12ed60,
    ms: _0x275b0e,
    repondre: _0x4480f5,
    superUser: _0x2b020d,
    msgRepondu: _0x336d3f
  } = _0x37f88d;
  if (!_0x2b020d) {
    _0x4480f5("Only Owners can use this command");
    return;
  }
  const {
    readreceipts: _0x1f373f,
    profile: _0x41cce5,
    status: _0x5a753d,
    online: _0x5d18a4,
    last: _0x3c6a7e,
    groupadd: _0x2d15dd,
    calladd: _0x171dc7
  } = await _0x2516d6.fetchPrivacySettings(true);
  const _0xfbe872 = "*Privacy settings*\n\n* name :* " + _0x2516d6.user.name + "\n* online:* " + _0x5d18a4 + "\n* profile :* " + _0x41cce5 + "\n* last seen :* " + _0x3c6a7e + "\n* read receipt :* " + _0x1f373f + "\n* group add :* " + _0x2d15dd + "\n* call add :* " + _0x171dc7;
  const _0x1d2d94 = await _0x2516d6.profilePictureUrl(_0x12ed60, "image")['catch'](_0xffae1c => "https://telegra.ph/file/b34645ca1e3a34f1b3978.jpg");
  await _0x2516d6.sendMessage(_0x35d785, {
    'image': {
      'url': _0x1d2d94
    },
    'caption': _0xfbe872
  }, {
    'quoted': _0x275b0e
  });
});
france({
  'nomCom': 'fullpp',
  'categorie': "User"
}, async (_0x5143ea, _0x283acd, _0x458b13) => {
  const {
    idBot: _0x19910f,
    ms: _0x3f86d7,
    repondre: _0x47da5e,
    superUser: _0x5063d3,
    msgRepondu: _0x52c01d
  } = _0x458b13;
  if (!_0x52c01d) {
    return _0x47da5e("Tag an image");
  }
  if (!_0x5063d3) {
    _0x47da5e("Only Owners can use this command");
    return;
  }
  const _0x29768f = await _0x283acd.downloadAndSaveMediaMessage(_0x52c01d.imageMessage, 'ppbot.jpeg');
  var {
    img: _0x15e066
  } = await generateProfilePicture(_0x29768f);
  await _0x283acd.query({
    'tag': 'iq',
    'attrs': {
      'to': _0x19910f,
      'type': "set",
      'xmlns': "w:profile:picture"
    },
    'content': [{
      'tag': 'picture',
      'attrs': {
        'type': "image"
      },
      'content': _0x15e066
    }]
  });
  fs.unlinkSync(_0x29768f);
  _0x47da5e("Bot Profile Picture Updated");
});
france({
  'nomCom': "tgs",
  'categorie': "Mods"
}, async (_0x30822e, _0x3b7011, _0x47f9ad) => {
  const {
    ms: _0x212ee5,
    repondre: _0x4c35ca,
    arg: _0x5d4793,
    nomAuteurMessage: _0x200986,
    superUser: _0x3895d7
  } = _0x47f9ad;
  if (!_0x3895d7) {
    _0x4c35ca("Only Mods can use this command");
    return;
  }
  if (!_0x5d4793[0x0]) {
    _0x4c35ca("put a telegram sticker link ");
    return;
  }
  let _0x2e1fce = _0x5d4793.join(" ");
  let _0x533562 = _0x2e1fce.split("/addstickers/")[0x1];
  let _0x3310f5 = "https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(_0x533562);
  try {
    let _0x247b66 = await axios.get(_0x3310f5);
    let _0x7bdaca = null;
    if (_0x247b66.data.result.is_animated === true || _0x247b66.data.result.is_video === true) {
      _0x7bdaca = "animated sticker";
    } else {
      _0x7bdaca = "not animated sticker";
    }
    let _0x25604b = "   Flash-stickers-dl\n      \n  *Name :* " + _0x247b66.data.result.name + "\n  *Type :* " + _0x7bdaca + " \n  *Length :* " + _0x247b66.data.result.stickers.length + "\n  \n      Downloading...";
    await _0x4c35ca(_0x25604b);
    for (let _0x3a97e7 = 0x0; _0x3a97e7 < _0x247b66.data.result.stickers.length; _0x3a97e7++) {
      let _0xaf08ed = await axios.get('https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=' + _0x247b66.data.result.stickers[_0x3a97e7].file_id);
      let _0xc006cb = await axios({
        'method': "get",
        'url': "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + _0xaf08ed.data.result.file_path,
        'responseType': "arraybuffer"
      });
      const _0x52fcd2 = new Sticker(_0xc006cb.data, {
        'pack': _0x200986,
        'author': 'MASTER-MD',
        'type': StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x32,
        'background': "#000000"
      });
      const _0x239dfe = await _0x52fcd2.toBuffer();
      await _0x3b7011.sendMessage(_0x30822e, {
        'sticker': _0x239dfe
      }, {
        'quoted': _0x212ee5
      });
    }
  } catch (_0x4a0ab2) {
    _0x4c35ca("we got an error \n", _0x4a0ab2);
  }
});
france({
  'nomCom': "crew",
  'categorie': "Mods"
}, async (_0x2cf26e, _0x2f9e36, _0xd28f7f) => {
  const {
    ms: _0x3b1f9e,
    repondre: _0x54a9a7,
    arg: _0x1409ef,
    auteurMessage: _0x54e003,
    superUser: _0xd07149,
    auteurMsgRepondu: _0x454e0b,
    msgRepondu: _0x13fbeb
  } = _0xd28f7f;
  if (!_0xd07149) {
    _0x54a9a7("only modds can use this command");
    return;
  }
  ;
  if (!_0x1409ef[0x0]) {
    _0x54a9a7("Please enter the name of the group to create");
    return;
  }
  ;
  if (!_0x13fbeb) {
    _0x54a9a7("Please mention a member added ");
    return;
  }
  const _0x334c40 = _0x1409ef.join(" ");
  const _0x2671cc = await _0x2f9e36.groupCreate(_0x334c40, [_0x54e003, _0x454e0b]);
  console.log("created group with id: " + _0x2671cc.gid);
  _0x2f9e36.sendMessage(_0x2671cc.id, {
    'text': "Bienvenue dans " + _0x334c40
  });
});
france({
  'nomCom': "left",
  'categorie': "Group"
}, async (_0x52a457, _0x1dfaf3, _0x3d6b57) => {
  const {
    ms: _0x3f5f27,
    repondre: _0x33ba54,
    verifGroupe: _0x188e93,
    msgRepondu: _0x22e454,
    verifAdmin: _0x2f3649,
    superUser: _0x220088,
    auteurMessage: _0x5d505c
  } = _0x3d6b57;
  if (!_0x188e93) {
    _0x33ba54("group only");
    return;
  }
  ;
  if (!_0x220088) {
    _0x33ba54("order reserved for the owner");
    return;
  }
  await _0x1dfaf3.groupLeave(_0x52a457);
});
france({
  'nomCom': "join",
  'categorie': "Mods"
}, async (_0x106890, _0xde806, _0x41ce20) => {
  const {
    arg: _0x171d91,
    ms: _0x5ec523,
    repondre: _0x1cefd2,
    verifGroupe: _0x41838e,
    msgRepondu: _0x4ba173,
    verifAdmin: _0x25e80b,
    superUser: _0x148e60,
    auteurMessage: _0x3552d3
  } = _0x41ce20;
  if (!_0x148e60) {
    _0x1cefd2("command reserved for the bot owner");
    return;
  }
  let _0x2c062a = _0x171d91[0x0].split("https://chat.whatsapp.com/")[0x1];
  await _0xde806.groupAcceptInvite(_0x2c062a);
  _0x1cefd2("Succes")['catch'](_0x5054cd => {
    _0x1cefd2("Unknown error");
  });
});
france({
  'nomCom': "jid",
  'categorie': "Mods"
}, async (_0x48da66, _0x50e153, _0x1d07f9) => {
  const {
    arg: _0x1fa6b6,
    ms: _0x1b5975,
    repondre: _0x57eb61,
    verifGroupe: _0x1f675c,
    msgRepondu: _0x16516b,
    verifAdmin: _0x31d550,
    superUser: _0x5bd37b,
    auteurMessage: _0x4d19da,
    auteurMsgRepondu: _0x49b9cb
  } = _0x1d07f9;
  if (!_0x5bd37b) {
    _0x57eb61("command reserved for the bot owner");
    return;
  }
  if (!_0x16516b) {
    jid = _0x48da66;
  } else {
    jid = _0x49b9cb;
  }
  ;
  _0x50e153.sendMessage(_0x48da66, {
    'text': jid
  }, {
    'quoted': _0x1b5975
  });
});
france({
  'nomCom': "block",
  'categorie': "User"
}, async (_0x145ed3, _0x5d9ed0, _0x2b937d) => {
  const {
    arg: _0x1b5565,
    ms: _0xd1f25e,
    repondre: _0x25d4c6,
    verifGroupe: _0x500075,
    msgRepondu: _0x31855a,
    verifAdmin: _0x231148,
    superUser: _0x36273e,
    auteurMessage: _0x5dc8ab,
    auteurMsgRepondu: _0x45d00e
  } = _0x2b937d;
  if (!_0x36273e) {
    _0x25d4c6("command reserved for the bot owner");
    return;
  }
  if (!_0x31855a) {
    if (_0x500075) {
      _0x25d4c6("Be sure to mention the person to block");
      return;
    }
    ;
    jid = _0x145ed3;
    await _0x5d9ed0.updateBlockStatus(jid, 'block').then(_0x25d4c6("succes"));
  } else {
    jid = _0x45d00e;
    await _0x5d9ed0.updateBlockStatus(jid, "block").then(_0x25d4c6("succes"));
  }
  ;
});
france({
  'nomCom': "unblock",
  'categorie': "User"
}, async (_0x2c0267, _0x2c0bad, _0x20b74d) => {
  const {
    arg: _0x15a863,
    ms: _0x162636,
    repondre: _0x156a00,
    verifGroupe: _0x3f4b00,
    msgRepondu: _0x3518c5,
    verifAdmin: _0x5433cf,
    superUser: _0x5c25de,
    auteurMessage: _0x9c10fb,
    auteurMsgRepondu: _0x2a3471
  } = _0x20b74d;
  if (!_0x5c25de) {
    _0x156a00("command reserved for the bot owner");
    return;
  }
  if (!_0x3518c5) {
    if (_0x3f4b00) {
      _0x156a00("Please mention the person to be unlocked");
      return;
    }
    ;
    jid = _0x2c0267;
    await _0x2c0bad.updateBlockStatus(jid, "unblock").then(_0x156a00('succes'));
  } else {
    jid = _0x2a3471;
    await _0x2c0bad.updateBlockStatus(jid, "unblock").then(_0x156a00("succes"));
  }
  ;
});
france({
  'nomCom': "kickall",
  'categorie': "Group",
  'reaction': '📣'
}, async (_0x5c5e0d, _0x582790, _0x140505) => {
  const {
    auteurMessage: _0x5725bf,
    ms: _0x558242,
    repondre: _0x14eb9f,
    arg: _0x4fd371,
    verifGroupe: _0x499a0b,
    nomGroupe: _0x3ec2ce,
    infosGroupe: _0x4c214b,
    nomAuteurMessage: _0x4e0d31,
    verifAdmin: _0x1cb88e,
    superUser: _0x505d98,
    prefixe: _0x2758fc
  } = _0x140505;
  const _0x295483 = await _0x582790.groupMetadata(_0x5c5e0d);
  if (!_0x499a0b) {
    _0x14eb9f("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (_0x505d98 || _0x5725bf == _0x295483.owner) {
    _0x14eb9f("No_admin members will be removed from the group. You have 5 seconds to reclaim your choice by restarting the bot.");
    await sleep(0x1388);
    let _0x2fc47e = _0x499a0b ? await _0x4c214b.participants : '';
    try {
      let _0xdf0c8c = _0x2fc47e.filter(_0x2f55a2 => !_0x2f55a2.admin);
      for (const _0x217daf of _0xdf0c8c) {
        await _0x582790.groupParticipantsUpdate(_0x5c5e0d, [_0x217daf.id], "remove");
        await sleep(0x1f4);
      }
    } catch (_0x5b99e2) {
      _0x14eb9f("I need administration rights");
    }
  } else {
    _0x14eb9f("Order reserved for the group owner for security reasons");
    return;
  }
});
france({
  'nomCom': "ban",
  'categorie': "OWNER"
}, async (_0x4ad6be, _0x82a3c5, _0x1ec4f6) => {
  const {
    ms: _0x4797d2,
    arg: _0xb2475d,
    auteurMsgRepondu: _0x26ef46,
    msgRepondu: _0x252445,
    repondre: _0x2c5955,
    prefixe: _0x5d03c7,
    superUser: _0x238792
  } = _0x1ec4f6;
  if (!_0x238792) {
    _0x2c5955("This command is only allowed to the bot owner");
    return;
  }
  if (!_0xb2475d[0x0]) {
    _0x2c5955("mention the victim by typing " + _0x5d03c7 + "ban add/del to ban/unban the victim");
    return;
  }
  ;
  if (_0x252445) {
    switch (_0xb2475d.join(" ")) {
      case "add":
        let _0x86e473 = await isUserBanned(_0x26ef46);
        if (_0x86e473) {
          _0x2c5955("This user is already banned");
          return;
        }
        addUserToBanList(_0x26ef46);
        break;
      case "del":
        let _0x1e75ac = await isUserBanned(_0x26ef46);
        if (_0x1e75ac) {
          removeUserFromBanList(_0x26ef46);
          _0x2c5955("This user is now free.");
        } else {
          _0x2c5955("This user is not banned.");
        }
        break;
      default:
        _0x2c5955("bad option");
        break;
    }
  } else {
    _0x2c5955("mention the victim");
    return;
  }
});
france({
  'nomCom': 'bangroup',
  'categorie': "OWNER"
}, async (_0x31e219, _0xa5c038, _0x42f30e) => {
  const {
    ms: _0x191c30,
    arg: _0x390b55,
    auteurMsgRepondu: _0x52d11d,
    msgRepondu: _0x45658e,
    repondre: _0x9ded68,
    prefixe: _0x22c980,
    superUser: _0xe66605,
    verifGroupe: _0x3ccc07
  } = _0x42f30e;
  if (!_0xe66605) {
    _0x9ded68("This command is only allowed to the bot owner");
    return;
  }
  ;
  if (!_0x3ccc07) {
    _0x9ded68("order reservation for groups");
    return;
  }
  ;
  if (!_0x390b55[0x0]) {
    _0x9ded68("type " + prefix + "bangroup add/del to ban/unban the group");
    return;
  }
  ;
  const _0x4a1928 = await isGroupBanned(_0x31e219);
  switch (_0x390b55.join(" ")) {
    case 'add':
      if (_0x4a1928) {
        _0x9ded68("This group is already banned");
        return;
      }
      addGroupToBanList(_0x31e219);
      break;
    case "del":
      if (_0x4a1928) {
        removeGroupFromBanList(_0x31e219);
        _0x9ded68("This group is now free.");
      } else {
        _0x9ded68("This group is not banned.");
      }
      break;
    default:
      _0x9ded68("bad option");
      break;
  }
});
france({
  'nomCom': 'onlyadmin',
  'categorie': "Group"
}, async (_0x1b2382, _0x35d508, _0x5905be) => {
  const {
    ms: _0x37c7f6,
    arg: _0x205e0e,
    auteurMsgRepondu: _0x1eb765,
    msgRepondu: _0x99f2f4,
    repondre: _0xb08718,
    prefixe: _0x36adaf,
    superUser: _0x1d1b19,
    verifGroupe: _0x58bc30,
    verifAdmin: _0x255f0c
  } = _0x5905be;
  if (_0x1d1b19 || _0x255f0c) {
    if (!_0x58bc30) {
      _0xb08718("order reservation for groups");
      return;
    }
    ;
    if (!_0x205e0e[0x0]) {
      _0xb08718("type " + prefix + "onlyadmin add/del to ban/unban the group");
      return;
    }
    ;
    const _0x2814a5 = await isGroupOnlyAdmin(_0x1b2382);
    switch (_0x205e0e.join(" ")) {
      case 'add':
        if (_0x2814a5) {
          _0xb08718("This group is already in onlyadmin mode");
          return;
        }
        addGroupToOnlyAdminList(_0x1b2382);
        break;
      case "del":
        if (_0x2814a5) {
          removeGroupFromOnlyAdminList(_0x1b2382);
          _0xb08718("This group is now free.");
        } else {
          _0xb08718("This group is not in onlyadmin mode.");
        }
        break;
      default:
        _0xb08718("bad option");
        break;
    }
  } else {
    _0xb08718("You are not entitled to this order");
  }
});
france({
  'nomCom': 'sudo',
  'categorie': "Mods"
}, async (_0x2eb846, _0x36b058, _0x590698) => {
  const {
    ms: _0x3484d5,
    arg: _0x538b58,
    auteurMsgRepondu: _0x51a8de,
    msgRepondu: _0x239371,
    repondre: _0x25df48,
    prefixe: _0x437df1,
    superUser: _0x3d33a2
  } = _0x590698;
  if (!_0x3d33a2) {
    _0x25df48("This command is only allowed to the bot owner");
    return;
  }
  if (!_0x538b58[0x0]) {
    _0x25df48("mention the person by typing " + prefix + "sudo add/del");
    return;
  }
  ;
  if (_0x239371) {
    switch (_0x538b58.join(" ")) {
      case "add":
        let _0x998d79 = await issudo(_0x51a8de);
        if (_0x998d79) {
          _0x25df48("This user is already sudo");
          return;
        }
        addSudoNumber(_0x51a8de);
        _0x25df48("succes");
        break;
      case "del":
        let _0x3de83d = await issudo(_0x51a8de);
        if (_0x3de83d) {
          removeSudoNumber(_0x51a8de);
          _0x25df48("This user is now non-sudo.");
        } else {
          _0x25df48("This user is not sudo.");
        }
        break;
      default:
        _0x25df48("bad option");
        break;
    }
  } else {
    _0x25df48("mention the victim");
    return;
  }
});
france({
  'nomCom': "send",
  'categorie': 'User'
}, async (_0x2a8dbb, _0x1cf6d3, _0x1bbc1d) => {
  const {
    repondre: _0x123355,
    msgRepondu: _0x77fadc,
    nomAuteurMessage: _0xaa4ea6,
    auteurMessage: _0x45e2ab
  } = _0x1bbc1d;
  if (_0xaa4ea6) {
    if (_0x77fadc) {
      console.log(_0x77fadc);
      let _0x378d58;
      if (_0x77fadc.imageMessage) {
        let _0x506186 = await _0x1cf6d3.downloadAndSaveMediaMessage(_0x77fadc.imageMessage);
        _0x378d58 = {
          'image': {
            'url': _0x506186
          },
          'caption': _0x77fadc.imageMessage.caption
        };
      } else {
        if (_0x77fadc.videoMessage) {
          let _0x2a1d1d = await _0x1cf6d3.downloadAndSaveMediaMessage(_0x77fadc.videoMessage);
          _0x378d58 = {
            'video': {
              'url': _0x2a1d1d
            },
            'caption': _0x77fadc.videoMessage.caption
          };
        } else {
          if (_0x77fadc.audioMessage) {
            let _0x1e1f88 = await _0x1cf6d3.downloadAndSaveMediaMessage(_0x77fadc.audioMessage);
            _0x378d58 = {
              'audio': {
                'url': _0x1e1f88
              },
              'mimetype': "audio/mp4"
            };
          } else {
            if (_0x77fadc.stickerMessage) {
              let _0x1931a1 = await _0x1cf6d3.downloadAndSaveMediaMessage(_0x77fadc.stickerMessage);
              let _0x1ed823 = new Sticker(_0x1931a1, {
                'pack': "MASTER-MD",
                'type': StickerTypes.CROPPED,
                'categories': ['🤩', '🎉'],
                'id': '12345',
                'quality': 0x46,
                'background': "transparent"
              });
              const _0x1de1aa = await _0x1ed823.toBuffer();
              _0x378d58 = {
                'sticker': _0x1de1aa
              };
            } else {
              _0x378d58 = {
                'text': _0x77fadc.conversation
              };
            }
          }
        }
      }
      _0x1cf6d3.sendMessage(_0x45e2ab, _0x378d58);
    } else {
      _0x123355("Mention the message that you want to save");
    }
  } else {
    _0x123355("only mods can use this command");
  }
});
france({
  'nomCom': "mention",
  'categorie': 'Mods'
}, async (_0x14152f, _0xad3f6f, _0x202f29) => {
  const {
    ms: _0x59f9c9,
    repondre: _0x35f2a3,
    superUser: _0x1f12ad,
    arg: _0x294db6
  } = _0x202f29;
  if (!_0x1f12ad) {
    _0x35f2a3("you do not have the rights for this command");
    return;
  }
  const _0x33cdf1 = require("../bdd/mention");
  let _0x4b722e = await _0x33cdf1.recupererToutesLesValeurs();
  data = _0x4b722e[0x0];
  if (!_0x294db6 || _0x294db6.length < 0x1) {
    let _0x166519;
    if (_0x4b722e.length === 0x0) {
      _0x35f2a3("To activate or modify the mention; follow this syntax: mention link type message\n  The different types are audio, video, image, and sticker.\n  Example: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is France King");
      return;
    }
    if (data.status == 'non') {
      _0x166519 = 'Desactived';
    } else {
      _0x166519 = "Actived";
    }
    mtype = data.type || "no data";
    url = data.url || "no data";
    let _0x3d4210 = "Status: " + _0x166519 + "\nType: " + mtype + "\nLink: " + url + "\n\n*Instructions:*\n\nTo activate or modify the mention, follow this syntax: mention link type message\nThe different types are audio, video, image, and sticker.\nExample: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is France King \n\nTo stop the mention, use mention stop";
    _0x35f2a3(_0x3d4210);
    return;
  }
  if (_0x294db6.length >= 0x2) {
    if (_0x294db6[0x0].startsWith("http") && (_0x294db6[0x1] == "image" || _0x294db6[0x1] == "audio" || _0x294db6[0x1] == "video" || _0x294db6[0x1] == "sticker")) {
      let _0x3046b2 = [];
      for (i = 0x2; i < _0x294db6.length; i++) {
        _0x3046b2.push(_0x294db6[i]);
      }
      let _0x38def6 = _0x3046b2.join(" ") || '';
      await _0x33cdf1.addOrUpdateDataInMention(_0x294db6[0x0], _0x294db6[0x1], _0x38def6);
      await _0x33cdf1.modifierStatusId1("oui").then(() => {
        _0x35f2a3("mention updated");
      });
    } else {
      _0x35f2a3("*Instructions:*\n          To activate or modify the mention, follow this syntax: mention link type message. The different types are audio, video, image, and sticker.");
    }
  } else if (_0x294db6.length === 0x1 && _0x294db6[0x0] == "stop") {
    await _0x33cdf1.modifierStatusId1('non').then(() => {
      _0x35f2a3(" mention stopped ");
    });
  } else {
    _0x35f2a3("Please make sure to follow the instructions");
  }
});
