let icon=document.querySelector(".icon")
let close=document.querySelector(".close")
let overlay=document.querySelector('.overlay')
let saidbar=document.querySelector('.saidbar')
let body=document.querySelector('body')

function ic(){
    overlay.style.transform= ' translateX(0)'
    saidbar.style.transform= ' translateX(0)'
    body.style.overflowY='hidden'
}
function clo(){
    overlay.style.transform= 'translateX(-100%) '
    saidbar.style.transform= 'translateX(100%)'
    body.style.overflowY='visible'
}