var textarea=document.getElementById('textarea')
var preview=document.getElementById('preview')
var counter=document.getElementById('counter')
var toRead=document.getElementById('toRead')
textarea.addEventListener('input',(e)=>{
    console.log(e.target.value.length)
    let wordscharCount=e.target.value
    counter.innerHTML=`
    <b>${wordscharCount.split(" ").length}</b> words and <b>${wordscharCount.replace(/ /g,"").length}</b> characters
    `
    toRead.innerHTML=`
    <b>${((1/125)*wordscharCount.split(" ").length).toFixed(2)}</b> Minutes to Read
    `
    preview.innerHTML=e.target.value

})
var uCase=document.getElementById('uCase')
uCase.addEventListener('click',()=>{
    textarea.innerHTML=""
    console.log(textarea.value)
    let updatevalue=textarea.value.toUpperCase()
   console.log(updatevalue)
    textarea.value=updatevalue
    preview.innerHTML=updatevalue

})

var lCase=document.getElementById('lCase')
lCase.addEventListener('click',()=>{
    textarea.innerHTML=""
    console.log(textarea.value)
    let updateValue=textarea.value.toLowerCase()
   console.log(updateValue)
    textarea.value=updateValue
    preview.innerHTML=updateValue

})

var clearText=document.getElementById('clearText')
clearText.addEventListener('click',()=>{
    textarea.value=""
    preview.innerHTML=""
    toRead.innerHTML=""
    counter.innerHTML=""
})

var copyText=document.getElementById('copyText')
copyText.addEventListener('click',()=>{
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
})

var removeExtraspaces=document.getElementById('removeSpaces')
removeExtraspaces.addEventListener('click',(e)=>{
    let updateValue=textarea.value.replace(/ /g,"")
    textarea.value=updateValue
    preview.innerHTML=updateValue

    counter.innerHTML=`
    <b>${updateValue.split(" ").length}</b> words and <b>${updateValue.replace(/ /g,"").length}</b> characters
    `
    toRead.innerHTML=`
    <b>${((1/125)*updateValue.split(" ").length).toFixed(2)}</b> Minutes to Read
    `
})

var navbarToggle=document.getElementById('navbarToggle')
function changeTheme(){
console.log("Theme Changed")

document.body.classList.toggle('bg-dark')
navbarToggle.classList.toggle('navbar-dark')
navbarToggle.classList.toggle('bg-dark')
document.getElementById('h1').classList.toggle('text-light')
document.getElementById('textarea').classList.toggle('bg-dark')

document.getElementById('textarea').classList.toggle('text-light')

document.getElementById('card1').classList.toggle('bg-dark')
document.getElementById('card1').classList.toggle('text-light')

document.getElementById('card2').classList.toggle('bg-dark')
document.getElementById('card2').classList.toggle('text-light')

document.getElementById('counter').classList.toggle('bg-dark')
document.getElementById('counter').classList.toggle('text-light')

document.getElementById('toRead').classList.toggle('bg-dark')
document.getElementById('toRead').classList.toggle('text-light')

document.getElementById('preview').classList.toggle('bg-dark')
document.getElementById('preview').classList.toggle('text-light')

document.getElementById('alert').innerHTML="Theme Changed"
document.getElementById('alert').classList.add('alert alert-dark')

document.getElementById('alert').classList.toggle('bg-dark')
document.getElementById('alert').classList.toggle('text-light')


}