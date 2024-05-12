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

const { france } = require('../framework/france');

france({ nomCom: 'quote', categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('This Command works in groups only!!!');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`*MASTER-MD Quotes*

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by *MASTER MD*`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`FLASH-MD

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by *MASTER-MD*`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
