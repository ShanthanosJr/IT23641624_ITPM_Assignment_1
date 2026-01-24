module.exports = {
  positiveTests: [
    {
      id: 'Pos_Fun_0001',
      name: 'Short greeting exclamation',
      input: 'suba udhaesanak!',
      expected: 'සුබ උදෑසනක්!',
      length: 'S',
      covered: 'Greeting / request / response; Interrogative; S (≤30 characters); Accuracy'
    },
    {
      id: 'Pos_Fun_0002',
      name: 'Simple daily request',
      input: 'mata bath oone.',
      expected: 'මට බත් ඕනේ.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S (≤30 characters); Accuracy'
    },
    {
      id: 'Pos_Fun_0003',
      name: 'Compound sentence with conjunction',
      input: 'api paasal yanava saha passe kade.',
      expected: 'අපි පාසල් යනවා සහ පස්සේ කඩේ.',
      length: 'M',
      covered: 'Word combination; Compound sentence; M (31–299 characters); Accuracy'
    },
    {
      id: 'Pos_Fun_0004',
      name: 'Complex sentence',
      input: 'mama gedara yanava haebaeyi vahina nisaa.',
      expected: 'මම ගෙදර යනවා හැබෑවි වහිනා නිසා.',
      length: 'M',
      covered: 'Daily language; Complex sentence; M; Accuracy'
    },
    {
      id: 'Pos_Fun_0005',
      name: 'Interrogative greeting',
      input: 'oya kavadha?',
      expected: 'ඔයා කවදා?',
      length: 'S',
      covered: 'Greeting; Interrogative; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0006',
      name: 'Imperative',
      input: 'mata kiyanna.',
      expected: 'මට කියන්න.',
      length: 'S',
      covered: 'Greeting; Imperative; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0007',
      name: 'Positive simple sentence',
      input: 'mama ehema karanava.',
      expected: 'මම ඒහෙම කරනවා.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0008',
      name: 'Negative simple sentence',
      input: 'mama ehema karanne na.',
      expected: 'මම ඒහෙම කරන්නේ නෑ.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0009',
      name: 'Polite request',
      input: 'karuNaakara mata udhavva karanna puluvandha?',
      expected: 'කරුණාකරලා මට උදව්ව කරන්න පුළුවන්දා?',
      length: 'M',
      covered: 'Greeting; Interrogative; M; Accuracy'
    },
    {
      id: 'Pos_Fun_0010',
      name: 'Day-to-day phrase',
      input: 'mata nidahamatayi.',
      expected: 'මට නිදහම්තයි.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0011',
      name: 'Multi-word phrase',
      input: 'hariyata vaeda.',
      expected: 'හරියට වැඩා.',
      length: 'S',
      covered: 'Word combination; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0012',
      name: 'Past tense',
      input: 'mama iye gedara giya.',
      expected: 'මම ඉවෙ ගෙදර ගියා.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0013',
      name: 'Present tense',
      input: 'api kema kanava.',
      expected: 'අපි කෙම හඬනවා.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0014',
      name: 'Future tense',
      input: 'mama heta enava.',
      expected: 'මම හෙට එනවා.',
      length: 'S',
      covered: 'Daily language; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0015',
      name: 'Negation',
      input: 'mata eka epa.',
      expected: 'මට ඒක එපා.',
      length: 'S',
      covered: 'Negation; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0016',
      name: 'Plural form',
      input: 'api yamu.',
      expected: 'අපි යමු.',
      length: 'S',
      covered: 'Pronoun variation; Plural form; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0017',
      name: 'English brands',
      input: 'Zoom meeting eka.',
      expected: 'Zoom meeting එක.',
      length: 'S',
      covered: 'Mixed Singlish+English; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0018',
      name: 'Places and English names',
      input: 'siiya Colombo yanna hadanne na.',
      expected: 'සීයා කොළඹ යන්න හදන්නේ නෑ.',
      length: 'M',
      covered: 'Names/places; Simple sentence; M; Accuracy'
    },
    {
      id: 'Pos_Fun_0019',
      name: 'Abbreviations',
      input: 'mata OTP eka.',
      expected: 'මට OTP එක.',
      length: 'S',
      covered: 'Punctuation/numbers; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0020',
      name: 'Punctuation exclamation',
      input: 'ayubowan!',
      expected: 'ආයුබෝවන්!',
      length: 'S',
      covered: 'Punctuation/numbers; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0021',
      name: 'Currency and time',
      input: 'Rs. 5000.',
      expected: 'Rs. 5000.',
      length: 'S',
      covered: 'Punctuation/numbers; Simple sentence; S; Accuracy'
    },
    {
      id: 'Pos_Fun_0022',
      name: 'Multiple spaces',
      input: 'mama gedara yanava.',
      expected: 'මම ගෙදර යනවා.',
      length: 'S',
      covered: 'Formatting; Simple sentence; S; Formatting preservation'
    },
    {
      id: 'Pos_Fun_0023',
      name: 'Line breaks',
      input: 'mama gedara\\nyanava.',
      expected: 'මම ගෙදර\\nයනවා.',
      length: 'M',
      covered: 'Formatting; Simple sentence; M; Formatting preservation'
    },
    {
      id: 'Pos_Fun_0024',
      name: 'Long length paragraph',
      input: 'mama ada ude paandara nagitala balanakota wesse nathi nisa mama hithuwa ada office yanna one kiyala eth passe mata mathak una ada niwadu dawasak nisa gedarata wela inna eka hondai kiyala. mama udeta bath kala tv balana gaman hitiye. yaluwek katha karala kivva api ada hawasata set wemu kiyala. mama ha kivva.',
      expected: 'Expected long Sinhala text...',
      length: 'L',
      covered: 'Daily language; Simple sentence; L (>300 characters); Accuracy'
    }
  ],
  negativeTests: [
    {
      id: 'Neg_Fun_0001',
      name: 'Joined words',
      input: 'mamagedarayannava?',
      expected: 'Should fail or segment poorly',
      length: 'S',
      covered: 'Robustness: Word boundaries'
    },
    {
      id: 'Neg_Fun_0002',
      name: 'Repeated words',
      input: 'hari hari hari',
      expected: 'Verify repetition handling',
      length: 'S',
      covered: 'Robustness: Repetition'
    },
    {
      id: 'Neg_Fun_0003',
      name: 'Slang',
      input: 'ela machan! supiri!!',
      expected: 'Should verify slang support',
      length: 'S',
      covered: 'Robustness: Slang'
    },
    {
      id: 'Neg_Fun_0004',
      name: 'Heavy slang',
      input: 'adoo vaedak baaragaththaanam',
      expected: 'Complex slang check',
      length: 'M',
      covered: 'Robustness: Heavy Slang'
    },
    {
      id: 'Neg_Fun_0005',
      name: 'Typo heavy',
      input: 'mma gedhra ynva',
      expected: 'Check typo correction',
      length: 'S',
      covered: 'Robustness: Typos'
    },
    {
      id: 'Neg_Fun_0006',
      name: 'Long with slang',
      input: 'adoo machan uba koheda giye eelanga paara set wemu. api set wela mona hari kamu. ela kiri machan.',
      expected: 'Long slang output',
      length: 'M',
      covered: 'Robustness: Long Slang'
    },
    {
      id: 'Neg_Fun_0007',
      name: 'Mixed abbreviations',
      input: 'WhatsApp PIN OTP QR code!',
      expected: 'Check abbreviation mixing',
      length: 'M',
      covered: 'Robustness: Abbreviations'
    },
    {
      id: 'Neg_Fun_0008',
      name: 'Complex formats',
      input: '2026-01-24 9:50 AM Rs.5343 kg',
      expected: 'Check number/date formatting',
      length: 'M',
      covered: 'Robustness: Complex Formats'
    },
    {
      id: 'Neg_Fun_0009',
      name: 'Repetition emphasis',
      input: 'eka eka tika tika',
      expected: 'Check reduplication',
      length: 'S',
      covered: 'Robustness: Emphasis'
    },
    {
      id: 'Neg_Fun_0010',
      name: 'Empty input',
      input: '', // Empty
      expected: '',
      length: 'S',
      covered: 'Robustness: Empty input'
    }
  ]
};
