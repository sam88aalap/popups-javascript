'use strict';
const piano = document.querySelector('.piano-modal');
const violin = document.querySelector('.violin-modal');
const sax = document.querySelector('.sax-modal');
const overlay = document.querySelector('.overlay');
const closePiano = document.querySelector('.close-piano');
const closeViolin = document.querySelector('.close-violin');
const closeSax = document.querySelector('.close-sax');
const openPiano = document.querySelector('.show-piano');
const openViolin = document.querySelector('.show-violin'); 
const openSax = document.querySelector('.show-sax'); 

const openWindow = function(x){
    x.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeWindow = function(x){
    if (x==null){
        piano.classList.add('hidden');
        violin.classList.add('hidden');
        sax.classList.add('hidden');
    } 
    else
      x.classList.add('hidden');
    overlay.classList.add('hidden');
    
}


openPiano.addEventListener('click',function(){
    openWindow(piano);
});
openViolin.addEventListener('click',function(){
    openWindow(violin);
});
openSax.addEventListener('click',function(){
    openWindow(sax);
});


closePiano.addEventListener('click',function(){
    closeWindow(piano);
});
closeViolin.addEventListener('click',function(){
    closeWindow(violin);
});
closeSax.addEventListener('click',function(){
    closeWindow(sax);
});

overlay.addEventListener('click',function(){
    closeWindow();
});

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' )//&& !box.classList.contains())
    {
        closeWindow();;
    }
})