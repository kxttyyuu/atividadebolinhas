const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `rgb(${random(0, 0)},${random(255, 255)},${random(255, 255)})`;
}


//define um vetor de bolas
const bolas = [];
i=0;
cor = cor = randomRGB();
while (bolas.length < 500) {
  if(i%2==0){
    cor = randomRGB();
  }
  else
  {
  cor = `rgb(255,255,255)`;
  }
   const size = random(10,20);
   const bola = new Bola(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      cor,
      size
   );
   i=i+1;

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0)';
   ctx.clearRect(0, 0,  width, height);
   ctx.fillRect(0, 0,  width, height);
   for (const bola of bolas) {
    bola.draw();
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}

loop();