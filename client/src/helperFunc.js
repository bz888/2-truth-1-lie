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
  const splitVal = value.split(' ')
  if (bannedWords.map(val => splitVal.includes(val)).find(el => el === true)) {
    return true
  } else {
    return false
  }
}

function concatArticle (inputTxt, name) {
  const firstVal = inputTxt.split(' ')
  console.log('firstVal: ', firstVal)
  if (firstVal[0].toLowerCase() === name.toLowerCase()) {
    firstVal.shift()
    const newArr = firstVal.join(' ')
    console.log('newArr', newArr)
    return newArr
  } else {
    return inputTxt
  }
}

function splitTime (time) {
  return String(time).split(' ').slice(0, 5).join(' ')
}

function splitText (text, wordCount) {
  return text.split(' ').slice(0, wordCount).join(' ')
}

module.exports = {
  isBanned,
  splitTime,
  splitText,
  concatArticle
}
