const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const coin = document.querySelector('.coin');
const coin2 = document.querySelector('.coin2');
const coin3 = document.querySelector('.coin3');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

const score = setInterval(() =>{
    const coinPosition = coin.offsetLeft;
    const coin2Position = coin2.offsetLeft;
    const coin3Position = coin3.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(marioPosition >= 60 && coinPosition <= 120){
        coin.style.visibility = 'hidden';

        setTimeout(() =>{
            coin.style.visibility = 'visible';
        }, 550);
    }
    
    if(marioPosition >= 60 && coin2Position <= 120){
        coin2.style.visibility = 'hidden';

        setTimeout(() =>{
            coin2.style.visibility = 'visible';
        }, 570);
        
       
    }

    if(marioPosition >= 60 && coin3Position <= 120){
        coin3.style.visibility = 'hidden';

        setTimeout(() =>{
            coin3.style.visibility = 'visible';
        }, 550);

    }
})

/*const contador = () =>{
    let elemento = document.querySelector('.contador');
	let contador = 0;
    
    function contador(){
        contador + score
    }
		
	setInterval(() => elemento.innerHTML = contador, 1000);
}*/

const loop = setInterval(() => {

   const pipePosition = pipe.offsetLeft;
   const cloudsPosition = clouds.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

/*
    if (pipePosition <= 120 && marioPosition <= 80 && pipePosition > 0) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

     //   alert("Game Over");

        clearInterval(loop);
   }*/
}, 10);
  
document.addEventListener('keydown', jump);