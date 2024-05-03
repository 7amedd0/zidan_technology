let stars= document.getElementById('stars');
let moon= document.getElementById('moon');
let mountains3= document.getElementById('mountains3');
let mountains4= document.getElementById('mountains4');
let river= document.getElementById('river');
let boat= document.getElementById('boat');
let mountains7= document.getElementById('mountains7');
let zizo=document.querySelector('.zizo');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    boat.style.left = value * 2 + 'px';
    river.style.top = value * 3 + 'px';
zizo.style.fontSize = value  + 'px' ;
if(scrollY >= 105){
    zizo.style.fontSize = 105 + 'px'
    zizo.style.position = 'fixed' ;
};
if(scrollY >= 319){
    zizo.style.display = 'none';
}else{
    zizo.style.display ='block';
}
if (scrollY >= 128) {
    document.querySelector('.main').style.background = 'linear-gradient(#4890a9, #10001f)';
}else{
    document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
}
}