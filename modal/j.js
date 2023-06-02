const open=document.getElementById('btn')
const container=document.getElementById('modal-container')
const close=document.getElementById('close')
open.addEventListener('click',function(){
    container.classList.add('show')
})
close.addEventListener('click',function(){
    container.classList.remove('show')
})
