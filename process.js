var fs = require('fs');
var result={};
var array = fs.readFileSync('database.tsv').toString().split("\n");


easyvalues = [
    "雍 'jowng harmonious,concordant;affable",
    "牢 law pen for domestic animals;coop;prison;granary;secure;desolate",
    "牢 luw reduce in the middle of the fist; roll in the hand, knead",
    "溫 'won (温 variant) warm,tepid,mild,gentle; rekindle,reanimate, intermittent fever",
    "猛 maengX brutish,fierce,severe,streneuous",
    "魋 dwoj an animal resembling a brown bear, A surname Tui.",
    "怍 dzak ashamed,abashed,discomforted",
    "噫 'ik chest;breast,what is in one's heart",
    "鳳 bjuwngH fabulous animal,phoenix",
    "觚 ku tall beaker for wine,angular,sword grip,writing tablet",
    "禘 dejH imperial ancestral worship in ancient China",
    "驥 kijH mythical horse,proficient person",
    "儒 nyju scholar; learned person, idiot",
    "偲 tshoj able,talented",
    "佚 yit secluded,excluded,mistake, ~逸 unconventional, 佚豫 yit-yoH, lax and careless, nonchalant; also, speeding swiftly. ~迭 in turn, successively.",
    "侃 khanX iytsoijebm cabdud",
    "侗 duwng child,immature",
    "俎 tsrjoX meat-tray,chopping-block",
    "倦 gjwenH weary,fatigued",
    "倩 tshenH attractive,charming",
    "倩 tshjengH ask for something to be done in one's place as a favor,son-in-law",
    "僎 dzrjenX to prepare",
    "僎 tswin ~遵, to follow",
    "啟 khejX open,unfold,unfasten,start,expound,letter",
    "嗚 'u onomatic element in various compounds",
    "圃 puX vegetable garden,threshing floor",
    "寮 lew small window, official colleague",
    "巽 swonH weak;yielding;gentle",
    "廋 srjuw hide,conceal,corner,hollow, search/seak out",
    "彬 pin half-and-half,in equal parts",
    "恂 swin unfeigning,simple,unimpeded,fearful of,rdp. with respect and care",
    "慍 'junH nourish a grudge, feel resentment but not act on it, loathe",
    "慾 yowk crave;desire,lust",
    "憚 tanH shy away from, flinch, be wary, ~癉 exhaustion",
    "憚 tat ~怛 startle, alarm",
    "拒 gjoX resist, repudiate",
    "拒 kjuX defensive square (battle formation)",
    "擯 pjinH throw out, expel, ~儐 receive guests",
    "擾 nyewX throw into confusion, domesticated",
    "斐 phj+jX colorful, ornate",
    "杖 drjangX staff, hold onto, cudgel",
    "杞 khiX purple willow, wolfberry, boxtree",
    "桴 bjuw eave-purlin, short ridgepole projected under the eaves, ~泭 small raft, ~枹 mallet/drumstick",
    "梲 tsyjet stud on a roof beam",
    "殯 pjinH encoffin a corpse, final preparations for burial",
    "浸 tsimH leak, soak, irrigation, gradually",
    "浸 tshim 浸淫 yimtshim drench and douse, imperceptably advance",
    "瀆 duwk draining trough, overflow, be disrespectful to",
    "牆 dzjang wall of a building, funerary drape",
    "版 paenX woodenplanks used in framing walls, placard on which to inscribe characters, household register",
    "犂 lej plow, mottled, arrive at or reach a particular time, definitely",
    "狷 kwenH prudent;wary, nervous,impatient",
    "瑚 hu 珊瑚 sanhu coral, ritual vessel for sacrifical offerings",
    "疚 kjuwH chronic illness, sick with sadness, destitute",
    "皙 sek white",
    "硜 kheang onom. of stone being struck, rigid and obstinate",
    "祗 tsyij respectful, honor, only, merely, just; still, as before",
    "科 khwa category, article in legal code, protocol, capless",
    "窬 yu small door to the side of main gate, opening,aperture, hole, ~踰 pass over, climb beyond",
    "簞 tan bamboo food-basket, bin, caddy",
    "紫 tsjeX purple,lavendar-colour",
    "紺 komH deep purple-blue",
    "縕 'jun generative force, orange colour",
    "縕 'junH tag-/waste-silk, tangled, concel, contain",
    "繚 lew tie up, wrap up",
    "羔 kaw eanling, lambkin; kid",
    "耰 'juw harrow, implement to break up clods of earth",
    "肸 xit stir up, excute, activate",
    "莞 hwaenX lightly smiling, bulrushes",
    "莞 kwan kind of reed/bulrush",
    "葸 siX shrink back, shrink away",
    "裨 pjie supplement, fill out, ceremonial garb",
    "裨 bjie ceremonial garb, subordinate", 
    "訒 nyinH reserved or discreet in speech, guarded",
    "訕 sraenH slander,libel,calumniate,ridicule,mock,sneer",
    "貊 maek non-Chinese people to the north, quiet, without fuss, giant panda",
    "蹈 dawH tread, step on, stamp to rhythm",
    "躁 tsawH restless, disturbance",
    "輅 luH wagon, harness",
    "輗 ngej collar-bag of large carriage",
    "适 syek go to, marry, to be suited to, (ADV)just then, (ADV) happen",
    "适 tek to be devoted to, principal wife",
    "鄹 tsrjuw Zou (state)",
    "醫 'i medicine, physician",
    "醯 xej vinegar;sour",
    "釜 byuX cooking-pan, measure of capacity equiv. 64 pints",
    "陶 daw pottery, to mold, pleased, surname",
    "陶 yew well-pleased and elated, name",
    "雌 tshje female of birds, the feminine",
    "鞟 khwak ~鞹 shorn pelt, wrap round or bind up with leather",
    "鞠 kjuwk leather ball, bend/turn/flex, nurture, child/youth, entirely, all of",
    "韞 'junX store-away, preserve, hord; secrete, cache",
    "韶 dzyew music associated with sage-king Shun, spiny tropical fruit",
    "顓 tsywen untaught,ignorant, decent,honest.exclusively/without exception",
    "餲 'aejH putrid smell of spoiled food; carious",
    "饌 sjwenX old unit of cache",
    "饌 dzrjwenH set out, prepare, provide (fine) food.",
    "駢 ben pull (horses) side by side, parallel, to put hosues side by side.",
    "騫 khjen defect, fault, scared, pick out.",
    "鮀 da the goby, a catfish, alligator.",
    "默 mok soundless, darkened.",
    "璉 ljenX vessel for sacrificial offerings",
    "璉 ljen ~連 join/link/connect-up",
    "愿 ngjwonH devoted to, diligent; attentive, careful, prudent.",
    "騂 sjeng a roan horse",
    "軏 ngjwot collar-bar of small carriage",
    "匵 duwk ~櫝 casket/coffin",
    "阼 dzuH east-side steps of great hall, ~祚 dynastic or lineage destiny.",
    "悱 phj+jX frustrated by being at a loss for words",
    "潤 nywinH moist(en); luster, lustrous; sheen, sleek. rain; freshen, as with necessary moisture. enrich, embellish, enhance; revise, improve; e.g. 潤飾 rùnshī, enrich and adorn, esp. lit. composition.",
    "皦 kewX white, pure; surname Jiao",
    "踧 tsjuwk (bn.) 踧踖 (MC tsjuwk-tsjek), discomfited, nonplused; attentive but anxious, polite but fretful. ~蹙, wrinkled, cramped; 2, pressing, imminent ~蹴, trample; 2, kick.",
    "踧 dek flat and smooth, wrinkled, attentive",
    "煥 xwanH iridescent",
    "濫 lamH brim over, overflow, excessively",
    "校 haewH schools in noble estates, military formation of 500 men, ~效 imitate",
    "校 kaewH compare, dispute, reckon, animal enclosure",
    "黻 pyut labris pattern embroidered in ceremonial robes, ~韍, knee-coverings worn by nobles at sacrificial offerings in early times ~紱 fú1, silk waistband upon which to tie pendant gems or seal-cords.",
    "忮 tsyeH object to, be hostile to, intractable",
    "繹 yek unwind raw silk from cocoon, follow a single thread, to list out item by item",
    "奡 ngawH ~傲 high-borne, high-held; haughty, proud. (bn.) 燾奡 (dawH-ngawH) tower upwards.",
    "鼗 daw small drum with two attached beaters",
    "杇 'u ~圬 to plaster,roughcast",
    "盼 pheanH clear-set eyes, with the white and iris distinct", 
    "躩 kjwak briskly stepping, to bound",  
    "沛 phajH marshy plant-cover, watery excess, racing onward",
    "蹜 sruwk walk carefully",
    "涖 lejH ~蒞 to attend, to arrive, drying up of water,to manage/supervise",
    "坫 temH stand or sideboard where cups were placed upside-down after use.",
    "牟 mjuw bellow (ox), confiscate, enlarge ~侔 equal to, same as, like unto ~眸 pupil (of eye) ~麰 barley",
    "迅 swinH quickly,suddenly",
    "腥 seng raw meat,putrid,grease",
    "訐 kjet expose another's faults, gossip",
    "襁 kjangX  sling for infant, swaddling clothes, cord on which cash is strung",
    "閾 xwik threshold,doorsill, borderland",
    "陪 bwoj piled on top of one-another, accompany, assist",
    "緅 tsuw magenta-coloured silk",
    "沽 ku sell,vend,advertise",
    "沽 kuX wine-vender, approximately",
    "蓧 dek basket for carrying grainseed",
    "蓧 dewH bamboo basket for carrying cut weeds",
    "蓧 thew yellow-dock,curly-dock",
    "憮 mjuX rueful, despairing ~嫵, appealing, likeable",
    "燧 zwijH fire-kindler, beacon-fire",
    "鏗 kheang onom. sound of bells",
    "悾 khuwng drup. innocent",
    "踖 dzjek to march ahead ",
    "踖 tsjek advance carefully",
    "盪 dangX assail, throw oneself against, ~蕩 shake, disoldge",
    "繪 hwajH colors neatly coordinated",
    "覿 dek see,notice,appear,be seen",
    "磷 lin ~粼 clear-cut",
    "涅 net blac mudge, alum used in dying, block up",
    "杼 drjoX shuttle of a loom , narrow, thin", 
    "杼 zyoX sawtooth oak", 
    "爲 hjwe (為) make, do, act as", 
    "琢 traewk to polish", 
    "齡 leng age, duration", 
    "梨 lij pear", 
    "紊 mjunH disorderly, confused", 
    "詁 kuX comment, explain", 
    "遜 swonH humble, inferior, to flee", 
    "嬴 yeng fullness, surplus, vanquish", 
    "莽 mangX thick weeds, luxurious growth", 
    "迄 xj+t to reach, until, as yet", 
    "統 thuwngX beginning of ball+thread; clue, succession; sequence, govern;conduct;lead", 
    "混 hwonX heaving water, muddy; murky, confused;jumbled;mixed", 
    "紛 phjun flag streamers, tangled threads, confused", 
    "禎 trjeng auspicious, good omen", 
    "蒞 lijH (混) to look down on;manage, verge on, splash",
    "祚 dzuH celestial favour, (祚)royal throne",
    "洪 huwng vast, flood", 
    "闖 trhjimH rush in, charge in", 
    "靖 dzjengX respectful;polite, delicate", 
    "靖 tsjeng (靖) to signal; to honor", 
    "廿 nyip twenty", 
    "錐 tsywij awl", 
    "掛 kweaH suspend, be worried about, catch/snare", 
    "灝 hawX limitless, (皓) gleaming white;shimmering", 
    "衆 tsyuwngH (眾) multitude, throng", 
    "瑩 hjwaeng polished, set a bright stone in place, elucidate", 
    "泌 bjit bubble up", 
    "釀 nrjangH to brew;ferment, incite", 
    "裕 yuH ample;abundant, wide;diffuse;magnanimous", 
    "嬴 yeng fullness;plentitude, vanquish;excel, be in charge of",
    "併 pjiengH conjoin;combine, together;both",
    "併 pjeng (屏) to screen off; block, remove",
    "篡 tsrhwaenH to sieze, take forcibly",
    "茲 tsi this;these, increasingly; more and more, year, reed mat",
    "茲 dzi 龜茲 (MC khjuw-dzi), Kucha, oasis city on the northern Silk Road in the Tarim Basin (popular because of its music + instruments).",
    "經 keng classic",
    "普 phuX universal,all",
    "屁 phijH fart",
    "暐 hj+jX (literary) abundant appearance of light",
    "耒 lwijX plow",
    "耒 lwojH plow",
    "瀟 sew (of water) deep and clear",
    "遙 yew distant, far away",
    "睛 tsjeng eyeball, vision",
    "駐 trjuH pause, halt; garrison, defend, guard",
    "涉 dzyep to go through, to wade, to involve",
    "扑 phuwk strike, beat, tap",
    "拘 kuw bent, buckled",
    "拘 kju seize, apprehend",  
    "慊 khemX to resent, to be dissatisfied",
    "槁 khawX to wither, to die out",
    "耘 hjun to weed",
    "炳 pjaengX to gleam, to light up",
    "X X -",
    "Y Y -",
    "参 srim the constellation Orion’ (named for the three stars in Orion’s belt)",
    "盧 lu earth-black, brazier, skull",
    // "， ,",
    // "。 .",
    // "？ ?",
    // "！ !",
    // "： :",
    // "； ;",
    // "（ (",
    // "） )",
    // "《 <<",
    // "》 >>",
    // "【 [",
    // "】 ]",
    // "〔 {",
    // "〕 }",
    // "〈 <",
    // "〉 >",   
  ];

for (var i = 0; i < easyvalues.length; i++) {
    var value = easyvalues[i];
    var entries = value.split(" ");
    var key = entries[1];
    var value = entries[0];
    //if value is alphanumeric, skip
    if (value.match(/^[a-zA-Z0-9]+$/)) {
        continue;
    }
    array.push(value+"\t"+key);
}

for(i in array) {
    var line = array[i].split("\t");
    var value = line[0]
    var key = line[1]
    if (result[key] == undefined) {
        result[key] = [];
    }
    if (result[key].indexOf(value) == -1) {
        result[key].push(value);
    }
}

//Require
var hanzi = require("hanzi");
//Initiate
hanzi.start();
//loop through results
for (var key in result) {
    //sort entries by frequency
    var entries = result[key];
    entries.sort(function(a, b) {
        return hanzi.getCharacterFrequency(a).number - hanzi.getCharacterFrequency(b).number;
    });
    result[key] = entries;
}
//write to processed.csv
var csv = '';
for (var key in result) {
    //strip opening apostrophe from key
    var mkey = key.replace(/^'/, '');
    // //convert to lower case
    // mkey = mkey.toLowerCase();
    // //replace + with U
    // mkey = mkey.replace(/\+/, 'uu');
    csv += mkey + ' ' + result[key].join(',') + '\n';
}
fs.writeFileSync('processed.csv', csv);
