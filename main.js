var affirmButton = document.querySelector(".affirmation-button")
var mantraButton = document.querySelector(".mantra-button")
var receiveButton = document.querySelector('.receive-message-button')
var advice = document.querySelector(".advice")


var mantraNuggets = [ "I'm the king of the world!",
"I feel the need... the need for speed!",
"Show me the money!",
"To infinity and beyond!",
"It's not a tumah!",
"If peeing your pants is cool, consider me Miles Davis.",
"There is no spoon",
"You are not your job",
"Cowabunga!","I'm good enough, I'm smart enough, and, doggonit people like me",
]

var affirmNuggets = ["Life is like a box of chocolates; you never know what you're gonna get.",
"You can't handle the truth!","You're killin' me, Smalls!", "What would you say ya do here?", 
"You are the al-seeing, all-dancing crap of the world", 
"It's not your fault", 
"Show me the heart unfettered by foolish dreams, and I'll show you a happy person", 
"No matter what anybody tells you, words can change the world"
]

receiveButton.addEventListener('click', helpSelf)

function getRandomWisdom(array) {
    return Math.floor(Math.random() * array.length)
  }

  

function helpSelf() {
    document.querySelector("advice").classList.toggle("hidden")
    document.querySelector("yogi-img").classList.toggle("hidden")
    var randomAffirmations = getRandomWisdom(affirmNuggets)
    var randomMantras = getRandomWisdom(mantraNuggets)

       if(affirmButton.checked) {
        advice.innerText = affirmNuggets[randomAffirmations]
    } else if(mantraButton.checked) {
        advice.innerText = mantraNuggets[randomMantras]
    } 
    console.log('randomAffirmations', randomAffirmations)
    console.log('randoMantras', randomMantras)  
}




