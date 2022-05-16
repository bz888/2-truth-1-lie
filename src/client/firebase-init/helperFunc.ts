export function isBanned (value: string) {
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
  const splitVal = value.split(' ')
  if (bannedWords.map(val => splitVal.includes(val)).find(el => el === true)) {
    return true
  } else {
    return false
  }
}

export function concatArticle (inputTxt: string, name: string) {
  const processString = inputTxt.charAt(0).toLowerCase() + inputTxt.slice(1)
  const firstVal = processString.split(' ')
  // console.log(processString)
  // console.log('firstVal: ', firstVal)
  if (firstVal[0].toLowerCase() === name.toLowerCase()) {
    return inputTxt
  } else {
    // console.log('esle return : ', name + ' ' + processString)
    return name + ' ' + processString
  }
}

export function splitTime (time: string): string {
  return String(time).split(' ').slice(0, 5).join(' ')
}

export function splitText (text: string, wordCount: number): string {
  return text.split(' ').slice(0, wordCount).join(' ')
}