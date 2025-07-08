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
