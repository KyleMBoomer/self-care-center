var affirmButton = document.querySelector("#affirmation")
var mantraButton = document.querySelector("#mantra")
var receiveButton = document.querySelector('.receive-message-button')
var wisdom = document.querySelector(".wisdom")

var affirmNuggets = ["Life is like a box of chocolates; you never know what you're gonna get.",
"You can't handle the truth!","You're killin' me, Smalls!", "What would you say ya do here?", 
"You are the all-seeing, all-dancing crap of the world", "That'll do, pig. That'll do", 
"Show me the heart unfettered by foolish dreams, and I'll show you a happy person", 
"No matter what anybody tells you, words can change the world", "Luminous beings are we! Not this crude matter","The things you own end up owning you",
]

var mantraNuggets = [ "I'm the king of the world!",
"I feel the need... the need for speed!","Show me the money!","To infinity and beyond!",
"It's not a tumah!","If peeing your pants is cool, consider me Miles Davis.",
"There is no spoon","You are not your job",
"Cowabunga!","I'm good enough, I'm smart enough, and doggonit, people like me","Life, uh, finds a way",
"Do. Or do not. There is no try", "I know kung-fu","I feel good, I feel great, I feel wonderful",
"Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need",
]

receiveButton.addEventListener('click', helpSelf)
affirmButton.addEventListener('click', returnImg)
mantraButton.addEventListener('click', returnImg)

function getRandomAffirmation(affirmNuggets) {
    var randomIndex = Math.floor(Math.random() * affirmNuggets.length)
    return affirmNuggets[randomIndex]
      } 
    
function getRandomMantra(mantraNuggets) {
    var randomIndex = Math.floor(Math.random() * mantraNuggets.length)
    return mantraNuggets[randomIndex]
}
function helpSelf() {
    if(affirmButton.checked) {
        wisdom.innerText = getRandomAffirmation(affirmNuggets)
    } else if(mantraButton.checked) {
        wisdom.innerText = getRandomMantra(mantraNuggets)
        }
        toggleDisplay()
        console.log(wisdom.innerText)
    }
    
function toggleDisplay() {
        document.querySelector('.wisdom').classList.toggle('hidden')
        document.querySelector('img').classList.add('hidden')
       }

function returnImg() {
    document.querySelector("img").classList.remove('hidden')
}
 



