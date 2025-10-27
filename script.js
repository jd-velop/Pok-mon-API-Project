const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const fetchButton = document.getElementById("fetch-button");
const loader = document.querySelector("#loader");
const shinyDiv = document.getElementById("shiny-container");
const container = document.getElementById("card");
const pokemonAmount = 24;
const shinyRate = 0.01;
// PokeAPI has no search endpoint, so this is a list of all pokemon names for searching. It is not used for any other purpose.
let pokemonList = ["bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate","spearow","fearow","ekans","arbok","pikachu","raichu","sandshrew","sandslash","nidoran-f","nidorina","nidoqueen","nidoran-m","nidorino","nidoking","clefairy","clefable","vulpix","ninetales","jigglypuff","wigglytuff","zubat","golbat","oddish","gloom","vileplume","paras","parasect","venonat","venomoth","diglett","dugtrio","meowth","persian","psyduck","golduck","mankey","primeape","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","alakazam","machop","machoke","machamp","bellsprout","weepinbell","victreebel","tentacool","tentacruel","geodude","graveler","golem","ponyta","rapidash","slowpoke","slowbro","magnemite","magneton","farfetchd","doduo","dodrio","seel","dewgong","grimer","muk","shellder","cloyster","gastly","haunter","gengar","onix","drowzee","hypno","krabby","kingler","voltorb","electrode","exeggcute","exeggutor","cubone","marowak","hitmonlee","hitmonchan","lickitung","koffing","weezing","rhyhorn","rhydon","chansey","tangela","kangaskhan","horsea","seadra","goldeen","seaking","staryu","starmie","mr-mime","scyther","jynx","electabuzz","magmar","pinsir","tauros","magikarp","gyarados","lapras","ditto","eevee","vaporeon","jolteon","flareon","porygon","omanyte","omastar","kabuto","kabutops","aerodactyl","snorlax","articuno","zapdos","moltres","dratini","dragonair","dragonite","mewtwo","mew","chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr","sentret","furret","hoothoot","noctowl","ledyba","ledian","spinarak","ariados","crobat","chinchou","lanturn","pichu","cleffa","igglybuff","togepi","togetic","natu","xatu","mareep","flaaffy","ampharos","bellossom","marill","azumarill","sudowoodo","politoed","hoppip","skiploom","jumpluff","aipom","sunkern","sunflora","yanma","wooper","quagsire","espeon","umbreon","murkrow","slowking","misdreavus","unown","wobbuffet","girafarig","pineco","forretress","dunsparce","gligar","steelix","snubbull","granbull","qwilfish","scizor","shuckle","heracross","sneasel","teddiursa","ursaring","slugma","magcargo","swinub","piloswine","corsola","remoraid","octillery","delibird","mantine","skarmory","houndour","houndoom","kingdra","phanpy","donphan","porygon2","stantler","smeargle","tyrogue","hitmontop","smoochum","elekid","magby","miltank","blissey","raikou","entei","suicune","larvitar","pupitar","tyranitar","lugia","ho-oh","celebi","treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert","poochyena","mightyena","zigzagoon","linoone","wurmple","silcoon","beautifly","cascoon","dustox","lotad","lombre","ludicolo","seedot","nuzleaf","shiftry","taillow","swellow","wingull","pelipper","ralts","kirlia","gardevoir","surskit","masquerain","shroomish","breloom","slakoth","vigoroth","slaking","nincada","ninjask","shedinja","whismur","loudred","exploud","makuhita","hariyama","azurill","nosepass","skitty","delcatty","sableye","mawile","aron","lairon","aggron","meditite","medicham","electrike","manectric","plusle","minun","volbeat","illumise","roselia","gulpin","swalot","carvanha","sharpedo","wailmer","wailord","numel","camerupt","torkoal","spoink","grumpig","spinda","trapinch","vibrava","flygon","cacnea","cacturne","swablu","altaria","zangoose","seviper","lunatone","solrock","barboach","whiscash","corphish","crawdaunt","baltoy","claydol","lileep","cradily","anorith","armaldo","feebas","milotic","castform","kecleon","shuppet","banette","duskull","dusclops","tropius","chimecho","absol","wynaut","snorunt","glalie","spheal","sealeo","walrein","clamperl","huntail","gorebyss","relicanth","luvdisc","bagon","shelgon","salamence","beldum","metang","metagross","regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys-normal","turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon","starly","staravia","staraptor","bidoof","bibarel","kricketot","kricketune","shinx","luxio","luxray","budew","roserade","cranidos","rampardos","shieldon","bastiodon","burmy","wormadam-plant","mothim","combee","vespiquen","pachirisu","buizel","floatzel","cherubi","cherrim","shellos","gastrodon","ambipom","drifloon","drifblim","buneary","lopunny","mismagius","honchkrow","glameow","purugly","chingling","stunky","skuntank","bronzor","bronzong","bonsly","mime-jr","happiny","chatot","spiritomb","gible","gabite","garchomp","munchlax","riolu","lucario","hippopotas","hippowdon","skorupi","drapion","croagunk","toxicroak","carnivine","finneon","lumineon","mantyke","snover","abomasnow","weavile","magnezone","lickilicky","rhyperior","tangrowth","electivire","magmortar","togekiss","yanmega","leafeon","glaceon","gliscor","mamoswine","porygon-z","gallade","probopass","dusknoir","froslass","rotom","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina-altered","cresselia","phione","manaphy","darkrai","shaymin-land","arceus","victini","snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott","patrat","watchog","lillipup","herdier","stoutland","purrloin","liepard","pansage","simisage","pansear","simisear","panpour","simipour","munna","musharna","pidove","tranquill","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","woobat","swoobat","drilbur","excadrill","audino","timburr","gurdurr","conkeldurr","tympole","palpitoad","seismitoad","throh","sawk","sewaddle","swadloon","leavanny","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","lilligant","basculin-red-striped","sandile","krokorok","krookodile","darumaka","darmanitan-standard","maractus","dwebble","crustle","scraggy","scrafty","sigilyph","yamask","cofagrigus","tirtouga","carracosta","archen","archeops","trubbish","garbodor","zorua","zoroark","minccino","cinccino","gothita","gothorita","gothitelle","solosis","duosion","reuniclus","ducklett","swanna","vanillite","vanillish","vanilluxe","deerling","sawsbuck","emolga","karrablast","escavalier","foongus","amoonguss","frillish","jellicent","alomomola","joltik","galvantula","ferroseed","ferrothorn","klink","klang","klinklang","tynamo","eelektrik","eelektross","elgyem","beheeyem","litwick","lampent","chandelure","axew","fraxure","haxorus","cubchoo","beartic","cryogonal","shelmet","accelgor","stunfisk","mienfoo","mienshao","druddigon","golett","golurk","pawniard","bisharp","bouffalant","rufflet","braviary","vullaby","mandibuzz","heatmor","durant","deino","zweilous","hydreigon","larvesta","volcarona","cobalion","terrakion","virizion","tornadus-incarnate","thundurus-incarnate","reshiram","zekrom","landorus-incarnate","kyurem","keldeo-ordinary","meloetta-aria","genesect","chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja","bunnelby","diggersby","fletchling","fletchinder","talonflame","scatterbug","spewpa","vivillon","litleo","pyroar","flabebe","floette","florges","skiddo","gogoat","pancham","pangoro","furfrou","espurr","meowstic-male","honedge","doublade","aegislash-shield","spritzee","aromatisse","swirlix","slurpuff","inkay","malamar","binacle","barbaracle","skrelp","dragalge","clauncher","clawitzer","helioptile","heliolisk","tyrunt","tyrantrum","amaura","aurorus","sylveon","hawlucha","dedenne","carbink","goomy","sliggoo","goodra","klefki","phantump","trevenant","pumpkaboo-average","gourgeist-average","bergmite","avalugg","noibat","noivern","xerneas","yveltal","zygarde-50","diancie","hoopa","volcanion","rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina","pikipek","trumbeak","toucannon","yungoos","gumshoos","grubbin","charjabug","vikavolt","crabrawler","crabominable","oricorio-baile","cutiefly","ribombee","rockruff","lycanroc-midday","wishiwashi-solo","mareanie","toxapex","mudbray","mudsdale","dewpider","araquanid","fomantis","lurantis","morelull","shiinotic","salandit","salazzle","stufful","bewear","bounsweet","steenee","tsareena","comfey","oranguru","passimian","wimpod","golisopod","sandygast","palossand","pyukumuku","type-null","silvally","minior-red-meteor","komala","turtonator","togedemaru","mimikyu-disguised","bruxish","drampa","dhelmise","jangmo-o","hakamo-o","kommo-o","tapu-koko","tapu-lele","tapu-bulu","tapu-fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal","grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon","skwovet","greedent","rookidee","corvisquire","corviknight","blipbug","dottler","orbeetle","nickit","thievul","gossifleur","eldegoss","wooloo","dubwool","chewtle","drednaw","yamper","boltund","rolycoly","carkol","coalossal","applin","flapple","appletun","silicobra","sandaconda","cramorant","arrokuda","barraskewda","toxel","toxtricity-amped","sizzlipede","centiskorch","clobbopus","grapploct","sinistea","polteageist","hatenna","hattrem","hatterene","impidimp","morgrem","grimmsnarl","obstagoon","perrserker","cursola","sirfetchd","mr-rime","runerigus","milcery","alcremie","falinks","pincurchin","snom","frosmoth","stonjourner","eiscue-ice","indeedee-male","morpeko-full-belly","cufant","copperajah","dracozolt","arctozolt","dracovish","arctovish","duraludon","dreepy","drakloak","dragapult","zacian","zamazenta","eternatus","kubfu","urshifu-single-strike","zarude","regieleki","regidrago","glastrier","spectrier","calyrex","wyrdeer","kleavor","ursaluna","basculegion-male","sneasler","overqwil","enamorus-incarnate","sprigatito","floragato","meowscarada","fuecoco","crocalor","skeledirge","quaxly","quaxwell","quaquaval","lechonk","oinkologne-male","tarountula","spidops","nymble","lokix","pawmi","pawmo","pawmot","tandemaus","maushold-family-of-four","fidough","dachsbun","smoliv","dolliv","arboliva","squawkabilly-green-plumage","nacli","naclstack","garganacl","charcadet","armarouge","ceruledge","tadbulb","bellibolt","wattrel","kilowattrel","maschiff","mabosstiff","shroodle","grafaiai","bramblin","brambleghast","toedscool","toedscruel","klawf","capsakid","scovillain","rellor","rabsca","flittle","espathra","tinkatink","tinkatuff","tinkaton","wiglett","wugtrio","bombirdier","finizen","palafin-zero","varoom","revavroom","cyclizar","orthworm","glimmet","glimmora","greavard","houndstone","flamigo","cetoddle","cetitan","veluza","dondozo","tatsugiri-curly","annihilape","clodsire","farigiraf","dudunsparce-two-segment","kingambit","great-tusk","scream-tail","brute-bonnet","flutter-mane","slither-wing","sandy-shocks","iron-treads","iron-bundle","iron-hands","iron-jugulis","iron-moth","iron-thorns","frigibax","arctibax","baxcalibur","gimmighoul","gholdengo","wo-chien","chien-pao","ting-lu","chi-yu","roaring-moon","iron-valiant","koraidon","miraidon","walking-wake","iron-leaves","dipplin","poltchageist","sinistcha","okidogi","munkidori","fezandipiti","ogerpon","archaludon","hydrapple","gouging-fire","raging-bolt","iron-boulder","iron-crown","terapagos","pecharunt"];
const typeColor = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");

const shinySparkle = new Audio("assets/shiny.wav");
shinySparkle.volume = 0.1;

function addShinyNotification(name, card) {
  const shinyNotification = document.createElement("div");
  shinyNotification.classList.add("shiny");
  shinyNotification.textContent = `${name} is shiny!`;

  shinyDiv.appendChild(shinyNotification);
  shinySparkle.currentTime = 0;
  shinySparkle.play();

  // remove notification on click
  shinyNotification.addEventListener("click", () => {
    removeShinyNotification(shinyNotification);
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("highlight");
    setTimeout(() => {
      card.classList.remove("highlight");
    }, 2000);
  });
}

function removeShinyNotification(notification) {
  notification.classList.add("fade-out");
  setTimeout(() => {
    shinyDiv.removeChild(notification);
  }, 500);
}

const fetchSearchData = async (query) => {
  try {
    const promises = [];
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].includes(query)) {
        promises.push(fetch(apiUrl + pokemonList[i]));
      }
    }
    if (promises.length === 0) {
      let randomName = pokemonList[Math.floor(Math.random() * 1025)];
      container.style.color = "red";
      container.innerHTML = `<p>No Pokémon name found containing "${query}". Try searching a different name, like ${randomName.charAt(0).toUpperCase() + randomName.slice(1)}.</p>`;
      return;
    }
    const responses = await Promise.all(promises);
    const data = await Promise.all(responses.map((response) => response.json()));
    data.forEach((pokemon) => {
      generateCard(pokemon);
    });
  } catch (error) {
    container.style.color = "red";
    container.innerHTML = `Error: ${error.message}`;
  }
};

// fetch data for multiple random pokemon
const fetchPokeData = async () => {
  try {
    const promises = [];
    for (let i = 0; i < pokemonAmount; i++) {
      let id = Math.floor(Math.random() * 1025) + 1;
      promises.push(fetch(apiUrl + id));
    }
    const responses = await Promise.all(promises);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    data.forEach((pokemon) => {
      generateCard(pokemon);
    });
  } catch (error) {
    container.style.color = "red";
    container.innerHTML = `Error: ${error.message}`;
  }
};

// generate a pokemon card for a single pokemon, given its data. shinyRate chance to be shiny.
let generateCard = (data) => {
  let isShiny = Math.random() < shinyRate; // shinyRate chance to be shiny

  const pokeId = data.id.toString().padStart(3, "0"); // pad with leading zeros
  const pokeName = (data.name.charAt(0).toUpperCase() + data.name.slice(1)).replace(/-([a-z])/g,(hyphen, nextLetter) => "-" + nextLetter.toUpperCase()); /* capitalize first letter and letters after hyphens. world's best one-liner! regex used */
  const pokeSprite = isShiny
    ? data.sprites.other.home.front_shiny
    : data.sprites.other.home.front_default;

  const statHp = data.stats[0].base_stat;
  const statAttack = Math.floor(
    data.stats[1].base_stat + data.stats[3].base_stat / 2
  ); // average of attack and special attack
  const statDefense = Math.floor(
    data.stats[2].base_stat + data.stats[4].base_stat / 2
  ); // average of defense and special defense
  const statSpeed = data.stats[5].base_stat;
  const pokeCry = new Audio(data.cries.latest);

  pokeCry.volume = 0.25;

  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
        <p class="hp"> <span>HP</span> ${statHp}</p>
        <img src="${pokeSprite}" alt='${pokeName} Sprite' />
        <h2 class="poke-name">${pokeName}</h2>
        <p class="poke-id">#${pokeId}</p>
        <div class="types"></div>

        <div class="card-bottom">
            <div>
                <h3>${statAttack}</h3>
                <p>ATK</p>
            </div>
            <div>
                <h3>${statDefense}</h3>
                <p>DEF</p>
            </div>
            <div>
                <h3>${statSpeed}</h3>
                <p>SPE</p>
            </div>
        </div>
        `;
  
  if (isShiny) {
    addShinyNotification(pokeName, card);
  }

  appendCardTypes(data.types, card);
  styleCard(data.types, card, isShiny);

  container.appendChild(card);

  // play cry sound on click at a reduced volume
  card.addEventListener("click", () => {
    pokeCry.currentTime = 0;
    if (isShiny) {
      pokeCry.playbackRate = 1.5; // increase pitch
    }
    pokeCry.playbackRate = Math.random() * 0.4 + 0.9;
    pokeCry.play();
  });
};

let appendCardTypes = (types, card) => {
  types.forEach((type) => {
    let span = document.createElement("span");
    span.textContent = type.type.name;
    card.querySelector(".types").appendChild(span);
  });
};

let styleCard = (types, card, isShiny) => {
  let cardColor = typeColor[types[0].type.name];
  // Base background: first type
  let bg;
  if (types.length > 1) {
    let cardColor2 = typeColor[types[1].type.name];
    // Add a smaller circle for the second type, on top of the first
    bg = `radial-gradient(circle at 50% 0%, ${cardColor} 30%, ${cardColor2} 30%, ${cardColor2} 36%, #ffffff 36%)`;
  } else {
    bg = `radial-gradient(circle at 50% 0%, ${cardColor} 36%, #ffffff 36%)`;
  }

  card.style.background = bg;
  card.querySelectorAll(".types span").forEach((type) => {
    type.style.backgroundColor = typeColor[type.textContent];
  });
  card.style.boxShadow = isShiny
    ? `0 0 15px 5px gold`
    : `0 12px 8px rgba(0, 0, 0, 0.2)`;
  card.querySelector("h2").style.color = isShiny ? "gold" : "black";
  card.querySelector("h2").style.textShadow = isShiny ? `0 0 5px gold` : `none`;
};

fetchButton.addEventListener("click", async () => {
  container.innerHTML = "";
  shinyDiv.innerHTML = "";
  container.style.color = "black";
  loader.style.display = "block";
  await fetchPokeData();
  loader.style.display = "none";
});

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  container.innerHTML = "";
  shinyDiv.innerHTML = "";
  container.style.color = "black";
  loader.style.display = "block";
  const searchInput = searchBox.value.trim().toLowerCase();
  await fetchSearchData(searchInput);
  loader.style.display = "none";
});