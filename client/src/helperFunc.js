function isBanned (value) {
  const bannedWords = [
    'anal',
    'abuse',
    'abused',
    'abusing',
    'anus',
    'arse',
    'ass',
    'assault',
    'ballsack',
    'balls',
    'bastard',
    'biatch',
    'bitch',
    'bloody',
    'blowjob',
    'blow job',
    'bollock',
    'bollok',
    'boner',
    'boob',
    'bugger',
    'bum',
    'butt',
    'buttplug',
    'clitoris',
    'cock',
    'coon',
    'crap',
    'cunt',
    'cunts',
    'dick',
    'dildo',
    'dyke',
    'exploit',
    'exploited',
    'exploitation',
    'exploiting',
    'fag',
    'faggot',
    'fags',
    'faggots',
    'fellate',
    'fellatio',
    'felching',
    'fuck',
    'fucked',
    'fucking',
    'f u c k',
    'fudgepacker',
    'fudge packer',
    'Goddamn',
    'God damn',
    'hell',
    'homo',
    'jerk',
    'jizz',
    'knobend',
    'knob end',
    'labia',
    'lmao',
    'lmfao',
    'muff',
    'nigger',
    'nigga',
    'penis',
    'piss',
    'poop',
    'prick',
    'pube',
    'pussy',
    'queer',
    'rape',
    'raping',
    'raped',
    'scrotum',
    'sex',
    'shit',
    's hit',
    'sh1t',
    'slut',
    'smegma',
    'spunk',
    'tit',
    'tosser',
    'turd',
    'twat',
    'vagina',
    'wank',
    'whore'
  ]
  // console.log(value)
  const splitVal = value.split(' ')
  // console.log(splitVal)
  // const logVal = bannedWords.map(val => splitVal.includes(val))
  // console.log('logVal: ', logVal)
  if (bannedWords.map(val => splitVal.includes(val)).find(el => el === true)) {
    return true
  } else {
    return false
  }

  // if (bannedWords.some(element => element === value)) {
  // // console.log('this is a banned word')
  //   return true
  // } else {
  //   return false
  // }
}
module.exports = { isBanned }
