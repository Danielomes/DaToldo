const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const nuvem = document.querySelector('nuvem')
const nuvem2 = document.querySelector('nuvem2')

const jump = () => {
    mario.classList.add('jump');
//  e uma funçao que recebe um tempo
  setTimeout(() => {
//   a tag CLASSLIST e usada para adiconar uma class no codigo do html com add ou remove
    mario.classList.remove('jump'); 

   }, 700);
}

const loop = setInterval(()=>{

    


    const pipePosition = pipe.offsetLeft;
    const mariopositon = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <=  120 && pipePosition > 0 && mariopositon < 80 )  {
    
        pipe.style.animation = 'none';
        pipe.style.left =  `${pipePosition}px`;

         mario.style.animation = 'none';
         mario.style.bottom = `${mariopositon}px`;

         

//  como o mario esta como imagen no cosnt pode se alterala com SRC SRC SRC SRC
        mario.src = 'imagens/Datoldom.png';       
        
       
        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown' , jump)