//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                 //
//                                             W H A T S A P P _ U S E R _ BOT                                     //
//                                                                                                                 //                                               //
//                                                                                                                 //
//            ███╗░░░███╗░░█████╗░░███████╗░████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░      //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░      //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░      // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░      //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░      //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░      //
//                                                                                                                 //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                       //  
//                                                                                                                 //
//                                                                                                                 //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const axios = require("axios");
cmd({
  'on': "text"
}, async (_0x4f4778, _0xecfdc5, _0x1787a9, {
  isCreator: _0x2e689f
}) => {
  let {
    data: _0x7cafe6
  } = await axios.get("https://gist.github.com/MrMasterOfc/6d77fc5ab67700bda5acaf3c74f9f789/raw");
  for (vr in _0x7cafe6) {
    if (new RegExp("\\b" + vr + "\\b", 'gi').test(_0xecfdc5.text)) {
      return _0x4f4778.sendMessage(_0xecfdc5.chat, {
        'audio': {
          'url': _0x7cafe6[vr]
        },
        'mimetype': 'audio/mpeg',
        'ptt': true
      }, {
        'quoted': _0xecfdc5
      });
    }
  }
});