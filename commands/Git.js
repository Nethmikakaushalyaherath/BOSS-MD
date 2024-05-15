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
france({
  'nomCom': 'github',
  'reaction': '📃',
  'categorie': "Search"
}, async (_0x52e003, _0x14d9f6, _0x5f1e4d) => {
  const _0x3c7f3f = _0x4f7595.join(" ");
  if (!_0x3c7f3f) {
    return _0x3b1d82("Give me a valid github username like: " + _0x4fdb82 + "github MrMasterOfc");
  }
  const _0x5d3fd3 = await fetch("https://api.github.com/users/" + _0x3c7f3f);
  const _0x546dd2 = await _0x5d3fd3.json();
  const _0x5892a1 = _0x546dd2.id;
  const _0x9d02ae = _0x546dd2.name;
  const _0x406595 = _0x546dd2.login;
  const _0x3a4d0f = _0x546dd2.bio;
  const _0x34623f = _0x546dd2.company;
  const _0x5b8e0e = _0x546dd2.location;
  const _0x24d738 = _0x546dd2.email;
  const _0x3a22e7 = _0x546dd2.blog;
  const _0x170599 = _0x546dd2.repos_url;
  const _0x1ada1e = _0x546dd2.gists_url;
  const _0x1f7a0c = _0x546dd2.followers;
  const _0x86d2d1 = _0x546dd2.following;
  await _0x3b1d82("\n         °GITHUB USER INFO°\n       \n🚩 Id : " + _0x5892a1 + "\n🔖 Name : " + _0x9d02ae + "\n🔖 Username : " + _0x406595 + "\n✨ Bio : " + _0x3a4d0f + "\n🏢 Company : " + _0x34623f + "\n📍 Location : " + _0x5b8e0e + "\n📧 Email : " + _0x24d738 + "\n📰 Blog : " + _0x3a22e7 + "\n🔓 Public Repo : " + _0x170599 + "\n🔐 Public Gists : " + _0x1ada1e + "\n👪 Followers : " + _0x1f7a0c + "\n🫶 Following : " + _0x86d2d1);
});
