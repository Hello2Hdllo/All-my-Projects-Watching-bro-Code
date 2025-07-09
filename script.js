console.log("Hello, JavaScript!")
const a = document.getElementById("button1")
const b = document.getElementById("input1")
const c = document.getElementById("label1")
let input
a.onclick = function(){
  input = b.value
  c.textContent = `You typed: ${input}`
  console.log(typeof input)
  alert(`You typed: ${input}`)
}
const d = document.getElementById("button2")
const e = document.getElementById("button3")
const f = document.getElementById("button4")
const g = document.getElementById("label2")
const h = document.getElementById("li2")
let points = 0
d.onclick = function(){
  points = points + 1
  g.textContent = `${points} points`
  if(points > 1000){
    h.textContent = "Congrats you beat the game!"
  }
}
e.onclick = function(){
  points = points - 1
  g.textContent = `${points} points`
}
f.onclick = function(){
  points = 0
  g.textContent = `${points} points`
}
const i = document.getElementById("button5")
const j = document.getElementById("label3")
const k = document.getElementById("li3")
const l = document.getElementById("button6")
const min = 1
const max = 100
let generatedNum
i.onclick = function(){
generatedNum =  Math.floor(Math.random() * max) + min
  j.textContent = generatedNum
  if(generatedNum > 99){
    k.textContent = "You got 100 😲"
  }
  console.log(generatedNum)
}
l.onclick = function(){
  generatedNum = 0
  j.textContent = generatedNum
  k.textContent = "Next Project"
}