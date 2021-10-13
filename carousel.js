const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");


var idx = 0;
var tam = 0;

function carrossel(){
  idx++;
  tam = idx * -window.innerWidth;
  if(idx > img.length - 2){
    idx = 0;    
    tam = 0;
  }
  
  
  imgs.style.transform = 'translateX(' + tam/2 +'px)';
}

setInterval(carrossel,5000);