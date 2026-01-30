module.exports = {
  "positiveTests": [
    {
      "id": "Pos_Fun_0001",
      "name": "Basic greeting",
      "input": "suba udhaeesanak vevaa!",
      "expected": "සුබ උදෑසනක් වේවා!",
      "length": "S",
      "covered": "Greeting/request/response; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "සුබ උදෑසනක් වෙවා!",
      "status": "Fail"
    },
    {
      "id": "Pos_Fun_0002",
      "name": "Simple request",
      "input": "mata pen ekak dhenna.",
      "expected": "මට pen එකක් දෙන්න.",
      "length": "S",
      "covered": "Greeting/request/response; Imperative (command); S (≤30 characters); Accuracy validation",
      "actual": "මට pen එකක් දෙන්න.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0003",
      "name": "Compound sentence",
      "input": "mama kadeeta yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.",
      "expected": "මම කඩේට යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.",
      "length": "M",
      "covered": "Word combination/phrase pattern; Compound sentence; M (31-299 characters); Accuracy validation",
      "actual": "මම කඩේට යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0004",
      "name": "Complex condition",
      "input": "oyaa enavaanam mama balan innavaa uni eka gava.",
      "expected": "ඔයා එනවානම් මම බලන් ඉන්නවා uni එක ගාව.",
      "length": "M",
      "covered": "Daily language usage; Complex sentence; M (31-299 characters); Accuracy validation",
      "actual": "ඔයා එනවානම් මම බලන් ඉන්නවා uni එක ගව.",
      "status": "Fail"
    },
    {
      "id": "Pos_Fun_0005",
      "name": "Interrogative form",
      "input": "hodhin saniipen innavaadha?",
      "expected": "හොදින් සනීපෙන් ඉන්නවාද?",
      "length": "S",
      "covered": "Greeting/request/response; Interrogative (question); S (≤30 characters); Accuracy validation",
      "actual": "හොදින් සනීපෙන් ඉන්නවාද?",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0006",
      "name": "Negative form",
      "input": "mama heta ennee naehae uni.",
      "expected": "මම හෙට එන්නේ නැහැ uni.",
      "length": "S",
      "covered": "Daily language usage; Negation (negative form); S (≤30 characters); Accuracy validation",
      "actual": "මම හෙට එන්නේ නැහැ uni.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0007",
      "name": "Polite request",
      "input": "machaqq karuNaakaralaa mee velavee mata uBen loku udhavvak oonee karalaa thiyanavaa karala dhenavadha?",
      "expected": "මචං කරුණාකරලා මේ වෙලවේ මට උඹෙන් ලොකු උදව්වක් ඕනේ කරලා තියනවා කරල දෙනවද?",
      "length": "M",
      "covered": "Greeting/request/response; Interrogative (question); M (31-299 characters); Accuracy validation",
      "actual": "මචං කරුණාකරලා මේ වෙලවේ මට උඹෙන් ලොකු උදව්වක් ඕනේ කරලා තියනවා කරල දෙනවද?",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0008",
      "name": "Informal slang",
      "input": "elakiri bro! supiri!!",
      "expected": "එලකිරි bro! සුපිරි!!",
      "length": "S",
      "covered": "Slang/informal language; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "එලකිරි bro! සුපිරි!!",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0009",
      "name": "Multi-word phrase",
      "input": "poddak iDHApan hadhissi novii.",
      "expected": "පොඩ්ඩක් ඉඳපන් හදිස්සි නොවී.",
      "length": "S",
      "covered": "Word combination/phrase pattern; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "පොඩ්ඩක් ඉඳපන් හදිස්සි නොවී.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0010",
      "name": "Past tense",
      "input": "mama iiyee gedhara giyaa anee.",
      "expected": "මම ඊයේ ගෙදර ගියා අනේ.",
      "length": "S",
      "covered": "Daily language usage; Past tense; S (≤30 characters); Accuracy validation",
      "actual": "මම ඊයේ ගෙදර ගියා අනේ.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0011",
      "name": "Present tense",
      "input": "mee velaavata mama vaeda karanavaa.",
      "expected": "මේ වෙලාවට මම වැඩ කරනවා.",
      "length": "S",
      "covered": "Daily language usage; Present tense; S (≤30 characters); Accuracy validation",
      "actual": "මේ වෙලාවට මම වැඩ කරනවා.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0012",
      "name": "Future tense",
      "input": "mama heta enavaa oyaava balanna.",
      "expected": "mama heta enavaa oyaava balanna.",
      "length": "S",
      "covered": "Daily language usage; Future tense; S (≤30 characters); Accuracy validation",
      "actual": "මම හෙට එනවා ඔයාව බලන්න.",
      "status": "Fail"
    },
    {
      "id": "Pos_Fun_0013",
      "name": "Plural pronouns",
      "input": "oyaalaa enavadha havasa yanna?",
      "expected": "ඔයාලා එනවද හවස යන්න?",
      "length": "S",
      "covered": "Greeting/request/response; Plural form; S (≤30 characters); Accuracy validation",
      "actual": "ඔයාලා එනවද හවස යන්න?",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0014",
      "name": "English brand term",
      "input": "Zoom link eka evanna.",
      "expected": "Zoom link එක එවන්න.",
      "length": "S",
      "covered": "Mixed Singlish + English; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "Zoom link එක එවන්න.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0015",
      "name": "Place names",
      "input": "nimaali office enna late vennee traffic nisaa Colombo vala.",
      "expected": "නිමාලි office එන්න late වෙන්නේ traffic නිසා Colombo වල.",
      "length": "M",
      "covered": "Names/places/common English words; Simple sentence; M (31-299 characters); Accuracy validation",
      "actual": "නිමාලි office එන්න late වෙන්නේ traffic නිසා Colombo වල.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0016",
      "name": "Abbreviations",
      "input": "magee NIC eka.",
      "expected": "මගේ NIC එක.",
      "length": "S",
      "covered": "Punctuation/numbers; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "මගේ NIC එක.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0017",
      "name": "Punctuation mix",
      "input": "(aayuboovan?)",
      "expected": "(ආයුබෝවන්?)",
      "length": "S",
      "covered": "Punctuation/numbers; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "(ආයුබෝවන්?)",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0018",
      "name": "Currency format",
      "input": "Rs. 5000 k vagee.",
      "expected": "Rs. 5000 ක් වගේ.",
      "length": "S",
      "covered": "Punctuation/numbers; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "Rs. 5000 ක් වගේ.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0019",
      "name": "Time format",
      "input": "7.30 AM vatha enna.",
      "expected": "7.30 AM වත එන්න.",
      "length": "S",
      "covered": "Punctuation/numbers; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "7.30 AM වත එන්න.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0020",
      "name": "Units of measure",
      "input": "10kg bara oonee.",
      "expected": "10kg බර ඕනේ.",
      "length": "S",
      "covered": "Punctuation/numbers; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "10kg බර ඕනේ.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0021",
      "name": "Multiple spaces",
      "input": "mama  yanavaa  ban  vahina  nisaa.",
      "expected": "මම  යනවා  බන්  වහින  නිසා.",
      "length": "S",
      "covered": "Formatting (spaces/line breaks/paragraph); Simple sentence; S (≤30 characters); Formatting preservation",
      "actual": "මම  යනවා  බන්  වහින  නිසා.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0022",
      "name": "Line breaks",
      "input": "mama yanavaa. \noyaa vaeda tika balaagena ohama inna. ",
      "expected": "මම යනවා. \nඔයා වැඩ ටික බලාගෙන ඔහම ඉන්න.",
      "length": "M",
      "covered": "Formatting (spaces/line breaks/paragraph); Compound sentence; M (31-299 characters); Formatting preservation",
      "actual": "මම යනවා. \nඔයා වැඩ ටික බලාගෙන ඔහම ඉන්න.",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0023",
      "name": "Complex long text",
      "input": "Magee final year project ekee mobile application eka dhaen sampuurNayenma ivara karala thiyennee, eth eeka Play Store ekata upload karana kota podi technical prashnayak aava. Firebase configuration vala errors vagayak thiyena nisaa Real-time database eka hariyata vaeda karanne naee kiyala magee team ekee yaaluvoo kivuvaa. Api iiyee rae venakanma try kalaa meeka fix karanna, eth thamaa hari giye naee. Heta udhaeesana presentation eka thiyena nisaa api dhaen godak baya velaa inne, mokadha meeka hariyata vaeda kalee naththoth marks adu venna puluvan. karuNaakaralaa kavuru hari dhanna kenek innavaanam mata udhavu karanna puluvandha meeka ikmanata hadhaaganna?",
      "expected": "මගේ final year project එකේ mobile application එක දැන් සම්පූර්ණයෙන්ම ඉවර කරල තියෙන්නේ, එත් ඒක Play Store එකට upload කරන කොට පොඩි technical ප්‍රශ්නයක් ආව. Firebase configuration වල errors වගයක් තියෙන නිසා Real-time database එක හරියට වැඩ කරන්නේ නෑ කියල මගේ team එකේ යාලුවෝ කිවුවා. අපි ඊයේ රැ වෙනකන්ම try කලා මේක fix කරන්න, එත් තමා හරි ගියෙ නෑ. හෙට උදෑසන presentation එක තියෙන නිසා අපි දැන් ගොඩක් බය වෙලා ඉන්නේ, මොකද මේක හරියට වැඩ කලේ නත්තොත් marks අඩු වෙන්න පුලුවන්. කරුණාකරලා කවුරු හරි දන්න කෙනෙක් ඉන්නවානම් මට උදවු කරන්න පුලුවන්ද මේක ඉක්මනට හදාගන්න?",
      "length": "L",
      "covered": "Formatting (spaces/line breaks/paragraph); Complex sentence; L (>300 characters); Accuracy validation",
      "actual": "මගේ final year project එකේ mobile application එක දැන් සම්පූර්ණයෙන්ම ඉවර කරල තියෙන්නේ, එත් ඒක Play Store එකට upload කරන කොට පොඩි technical ප්‍රශ්නයක් ආව. Firebase configuration වල errors වගයක් තියෙන නිසා Real-time database එක හරියට වැඩ කරන්නේ නෑ කියල මගේ team එකේ යාලුවෝ කිවුවා. අපි ඊයේ රැ වෙනකන්ම try කලා මේක fix කරන්න, එත් තමා හරි ගියෙ නෑ. හෙට උදෑසන presentation එක තියෙන නිසා අපි දැන් ගොඩක් බය වෙලා ඉන්නේ, මොකද මේක හරියට වැඩ කලේ නත්තොත් marks අඩු වෙන්න පුලුවන්. කරුණාකරලා කවුරු හරි දන්න කෙනෙක් ඉන්නවානම් මට උදවු කරන්න පුලුවන්ද මේක ඉක්මනට හදාගන්න?",
      "status": "Pass"
    },
    {
      "id": "Pos_Fun_0024",
      "name": "Proper spacing",
      "input": "mata dhaen bath kanna oonee badaginiyi.",
      "expected": "මට දැන් බත් කන්න ඕනේ බඩගිනියි.",
      "length": "S",
      "covered": "Daily language usage; Simple sentence; S (≤30 characters); Accuracy validation",
      "actual": "මට දැන් බත් කන්න ඕනේ බඩගිනියි.",
      "status": "Pass"
    }
  ],
  "negativeTests": [
    {
      "id": "Neg_Fun_0001",
      "name": "Missing spaces",
      "input": "mamagedharayanavaaharidha",
      "expected": "මමගෙදරයනවාහරිද",
      "length": "S",
      "covered": "Word combination/phrase pattern; Simple sentence; S (≤30 characters); Robustness validation",
      "actual": "මමගෙදරයනවාහරිද",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0002",
      "name": "Repeated emphasis",
      "input": "hari hari hari",
      "expected": "හරි හරි හරි",
      "length": "S",
      "covered": "Word combination/phrase pattern; Simple sentence; S (≤30 characters); Robustness validation",
      "actual": "හරි හරි හරි",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0003",
      "name": "Heavy slang",
      "input": "ado machan, me vaedak gaththa nam hariyata manage karapan bQQ.",
      "expected": "ado මචන්, මෙ වැඩක් ගත්ත නම් හරියට manage කරපන් බං.",
      "length": "M",
      "covered": "Slang/informal language; Compound sentence; M (31-299 characters); Robustness validation",
      "actual": "ado මචන්, මෙ වැඩක් ගත්ත නම් හරියට manage කරපන් බං.",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0004",
      "name": "Typo handling",
      "input": "mma gedhra ynva",
      "expected": "ම්ම ගෙද්‍ර ය්න්ව",
      "length": "S",
      "covered": "Typographical error handling; Simple sentence; S (≤30 characters); Robustness validation",
      "actual": "ම්ම ගෙද්‍ර ය්න්ව",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0005",
      "name": "Mixed formatting",
      "input": "Rs.5343 25/12/2025 kg ml",
      "expected": "Rs.5343 25/12/2025 kg ml",
      "length": "M",
      "covered": "Punctuation/numbers; Simple sentence; M (31-299 characters); Robustness validation",
      "actual": "Rs.5343 25/12/2025 kg ml",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0006",
      "name": "Segmented word variation",
      "input": "oyaakaeegahanannaepaa",
      "expected": "ඔයාකෑගහනන්නැපා",
      "length": "S",
      "covered": "Word combination/phrase pattern; Simple sentence; S (≤30 characters); Robustness validation",
      "actual": "ඔයාකෑගහනන්නැපා",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0007",
      "name": "Informal request",
      "input": "ane machan, eeka tikak lassanata hadhapan.",
      "expected": "අනෙ මචන්, ඒක ටිකක් ලස්සනට හදපන්.",
      "length": "S",
      "covered": "Slang/informal language; Imperative (command); S (≤30 characters); Robustness validation",
      "actual": "අනෙ මචන්, ඒක ටිකක් ලස්සනට හදපන්.",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0008",
      "name": "English technical mix",
      "input": "Windows update ekak thiyennee ASAP.",
      "expected": "Windows update එකක් තියෙන්නේ ASAP.",
      "length": "M",
      "covered": "Mixed Singlish + English; Simple sentence; M (31-299 characters); Robustness validation",
      "actual": "Windows update එකක් තියෙන්නේ ASAP.",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0009",
      "name": "Sentence structure fail",
      "input": "tika tika chuttak chuttak",
      "expected": "ටික ටික චුට්ටක් චුට්ටක්",
      "length": "S",
      "covered": "Word combination/phrase pattern; Simple sentence; S (≤30 characters); Robustness validation",
      "actual": "ටික ටික චුට්ටක් චුට්ටක්",
      "status": "Pass"
    },
    {
      "id": "Neg_Fun_0010",
      "name": "Date format messy",
      "input": "2026-05-21",
      "expected": "2026-05-21",
      "length": "S",
      "covered": "Punctuation/numbers; Simple sentence; S (≤30 characters); Robustness validation",
      "actual": "2026-05-21",
      "status": "Pass"
    }
  ]
};