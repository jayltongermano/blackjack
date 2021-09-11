var tela = 1;
var L = 400;
var A = 100;
var xM = 300;
var yM1 = 80;
var yM2 = 330;
var yM3 = 530;

var L1 = 70
var A1 = 70
var xm = 920
var ym = 670

var ia, ib, ic, id, ie;

let end = false
let hidden = true

let hand = [newCard(), newCard()];
let total = cardToInt(hand[0]) + cardToInt(hand[1]);

let dealer = [newCard(), newCard()];
let dealerTotal = cardToInt(dealer[0]) + cardToInt(dealer[1])
if (dealerTotal > 21 && dealer.includes("Ace")) {
  dealerTotal -= 10;
  dealer[dealer.indexOf("Ace")] = "Ace\n(One)";
}

while (dealerTotal < 17) {
  let toAdd = newCard()
  dealerTotal += cardToInt(toAdd)
  dealer.push(toAdd)
  if (dealerTotal > 21 && dealer.includes("Ace")) {
    dealerTotal -= 10;
    dealer[dealer.indexOf("Ace")] = "Ace\n(One)";
  }
}



function TI(){
  background(100, 200, 100);
  image(d,5,5,990,740)
  textSize(60);
  fill (40);
  text('INFORMAÇÃO', 500, 50)
  text('R', 960, 720)
  textSize(20);
  text(' A finalidade do jogo é alcançar mais alta pontuação sem ultrapassar 21 pontos. Para isso, os jogadores receberão no começo da partida duas cartas, porém poderão solicitar mais durante o jogo. A pontuação maior é chamada de blackjack ou 21, que é o nome do jogo. Exposto isso, o objetivo desse artigo é mostrar para vocês como funciona o black jack.', 50, 100, 920);
  text(' O BlackJack possui regras que são fáceis de compreender, e conta com um ou oito baralhos de 52 cartas, onde cada uma delas possui um valor específico. O jogo começa com os jogadores colocando suas apostas e o dealer distribuindo a cada um dos jogadores na mesa uma carta virada para cima e pegando uma carta para ele, também virada para cima. Então, outra rodada de cartas é distribuída aos jogadores com a face para cima, enquanto o dealer pega sua segunda carta com a face para baixo. O objetivo do jogo é chegar o mais próximo possível de 21 sem ultrapassar.', 50, 220, 920);
  textSize(25);
  fill (40);
  text('1 - clique na informação desejada', 500, 400)
  text('2 - clique no Deck de cartas para pedir caras', 500, 425)
  text('3 - peças cartas, mas a soma não pode ultrapassar 21', 500, 450)
  text('4 - no momento que vc pedi cartas a banca tbm ja soma uma carta', 500, 475)
  text('5 - caso deseje encerrar sua jogada  clique nas cartas da banca para visualizar', 500, 500)
  text('6 - caso sua soma chegar em 21 ao mais proximo "WINNER"', 500, 525)
  text('7 - caso a banca chegar em 21 ou mais proximo "GAME OVER"', 500, 550)
  text('8 - caso ambos tenham a mesma somatória "DIER"', 500, 575)
  
    //RET
      if(mouseX > xm && mouseX < xm + L1 && mouseY > ym && mouseY < ym + A1){
      stroke(100, 200, 100);
      fill(30);
      rect(xm, ym, L1, A1, 30);
         image(ie, 920 , 670, 70, 70)
      if (mouseIsPressed){
        tela = 1;}}

  }

function TC(){
  background(100, 200, 100);
   textSize(40);
  text('CRÉDITOS', 500, 100);
  textSize(30);
  text('Rummenigge e Filipe', 500, 150);
  textSize(20);
  text('EDUCADORES LOP', 500, 200);
  textSize(30);
  text('Jaylton Germano', 500, 250);
  textSize(20);
  text('GRADUANDO C&T', 500, 300);
  textSize(20);
  text('  A importância dos jogos no contexto educativo é uma estratégia para auxiliar o aluno na resolução de problemas, estimulando e motivando a criatividade, investigando situações para a melhor jogada, desenvolvendo assim o raciocínio lógico.', 50, 350, 900);
    text('  O presente trabalho discute o uso da informática no ensino da Matemática, propondo atividades para tornar mais significativas e prazerosas as aulas dessa disciplina. Os jogos matemáticos digitais e softwares como material pedagógico, no Ensino Fundamental séries finais, disponíveis podem ser para os alunos um recurso fundamental para que assimilem, ou seja, desenvolvam o processo de construção  do conhecimento, tornando o ensino-aprendizagem de Matemática uma atividade agradável, na apropriação dos diferentes conteúdos. O trabalho mostra a importância de se aprender por meio desse recurso, que é uma das tendências para o ensino da Matemática e aponta para uma proposta inovadora com a utilização da informática e poderá ser utilizada por Educadores no Ensino Fundamental séries finais, para tornarem as aulas mais dinâmicas, possibilitando uma maior participação e envolvimento dos alunos nessas atividades.', 50, 450, 900);
  
  textSize(40);
  text('R', 960, 720)
  image(ia, 20 , 100)
  image(ib, 670 , 80,300,250)
  
   //RET
      if(mouseX > xm && mouseX < xm + L1 && mouseY > ym && mouseY < ym + A1){
      stroke(100, 200, 100);
      fill(30);
      rect(xm, ym, L1, A1, 30);
      image(ie, 920 , 670, 70, 70)
      if (mouseIsPressed){
        tela = 1;}}
}

function TP(){
   textStyle(NORMAL);
   background(41, 189, 37);
    
    // PLAY
    textAlign (CENTER);
    textSize(50);
    image(ic, 20 , 20, 960, 710)
    
    if(mouseX > xM && mouseX < xM + L && mouseY > yM1 && mouseY < yM1 + A){
      stroke(200);
      fill(20);
      rect(xM, yM1, L, A, 20)
      if (mouseIsPressed){
        tela = 4;}}
  
    fill(240);
    noStroke();
    text("PLAY", 500, 150);
    
    //INF
    if(mouseX > xM && mouseX < xM + L && mouseY > yM2 && mouseY < yM2 + A){
      stroke(200);
      fill(20);
      rect(xM, yM2, L, A, 20);
      if (mouseIsPressed){
        tela = 2;}}    
  
    fill(240);
    noStroke();
    text("INFORMATION", 500, 400)

    //CRED
    if(mouseX > xM && mouseX < xM + L && mouseY > yM3 && mouseY < yM3 + A){
      stroke(200);
      fill(20);
      rect(xM, yM3, L, A, 20);
      if (mouseIsPressed){
        tela = 3;}} 
   
    fill(240);
    noStroke();
    text("CREDITS", 500, 600)
   }

function TJ(){
  background(100, 200, 100);
  textSize(30);
  fill(0);
  text('R', 960, 720)
  text("peça cartas ou mostre cartas", 500, 250);
  text(`Total: ${total}`, 60, 500);
  
  
  
  //RET
     if(mouseX > xm && mouseX < xm + L1 && mouseY > ym && mouseY < ym + A1){
     stroke(100, 200, 100);
     fill(30);
     rect(xm, ym, L1, A1, 30);
     image(ie, 920 , 760, 70, 70)
     if (mouseIsPressed){
       tela = 1;}}
  
   //drawing deck
  for (cardsDrawn = 0; cardsDrawn < 11; cardsDrawn++) {
    fill(250);
    rect(20, 300 - (cardsDrawn * 3), 100, 140);
    fill(220, 50, 50);
    rect(25, 305 - (cardsDrawn * 3), 90, 130);
  }
  //drawing your hand
  drawHand(210, 430, hand)
  //drawing dealer's hand
  textSize(30);
  if (hidden == true) {
    text(`Total: ??`, 60, 100);
    for (i = 0; i < 2; i++) {
      fill(250)
      rect(210 + (105 * i), 10, 100, 140);
      fill(220, 50, 50);
      rect(215 + (105 * i), 15, 90, 130);
    }
  } else {
    text(`Total: ${dealerTotal}`, 60, 100);
    //drawHand(210,10,dealer)/*
    let duplicateCheck = []
    for (const card of dealer) {
      textSize(20);
      fill(250);
      if (duplicateCheck.includes(card)) {
        let count = 0;
        for (const check of duplicateCheck) {
          if (check == card) {
            count += 1
          }
        }
        count *= 7
        rect(240 + (105 * dealer.indexOf(card)) - count, 38 - count, 100, 140);
      }
      rect(210 + (105 * dealer.indexOf(card)), 10, 100, 140);
      fill(0);
      text(card, 230 + (105 * dealer.indexOf(card)), 40);
      duplicateCheck.push(card);
    }
    fill(255, 0, 0);
    textSize(120)
    if (dealerTotal > 21) {
      text("WINNER", 500, 400);
    } else if (dealerTotal > total) {
      text("GAME OVER", 500, 400);
    } else if (dealerTotal == total) {
      text("DRAW", 500, 400);
    } else {
      text("WINNER", 500, 400);
    }
  }
  if (total > 21) {
    if (hand.includes("Ace")) {
      total -= 10;
      hand[hand.indexOf("Ace")] = "Ace\n(One)";
    } else {
      end = true
      fill(255, 0, 0);
      textSize(120)
      text("GAME OVER", 500, 400);
    }
  }

}
  

function drawHand(x, y, array) {
  let duplicateCheck = []
  for (const card of array) {
    textSize(20);
    fill(250);
    if (duplicateCheck.includes(card)) {
      let count = 0;
      for (const check of duplicateCheck) {
        if (check == card) {
          count += 1
        }
      }
      count *= 7
      rect(x + 30 + (105 * array.indexOf(card)) - count, y + 30 - count, 100, 140);
    }
    rect(x + (105 * array.indexOf(card)), 430, 100, 140);
    fill(0);
    text(card, x + 20 + (105 * array.indexOf(card)), y + 35);
    duplicateCheck.push(card);
  }


}

function newCard() {
  let card = Math.ceil(Math.random() * 13)
  switch (card) {
    case 1:
      return "Ace"
      break
    case 11:
      return "Jack"
      break
    case 12:
      return "Queen"
      break
    case 13:
      return "King"
      break
    default:
      return card
  }
}
function cardToInt(card) {
  switch (card) {
    case "Ace":
      return 11
      break
    case "Jack":
    case "Queen":
    case "King":
      return 10
      break
    default:
      return card
  }
}

function between(check, start, range) {
  if (check > start && check < start + range) {
    return true
  } else {
    return false
  }
}


function preload() {
  ia = loadImage('3.PNG');
  ib = loadImage('1.PNG');
  ic = loadImage('4.PNG');
  id = loadImage('bj.PNG');
  ie = loadImage('r.PNG');
  c = loadImage('c.PNG');
  d = loadImage('d.PNG');
  
i[0] = loadImage('10C.png');
i[1] = loadImage('10D.png');
i[2] = loadImage('10H.png');
i[3] = loadImage('10S.png');
    
}

function setup() {
  createCanvas(1000, 750);
}

function draw() {
 
  if (tela == 3){
    TC();}
  if (tela == 2){
    TI();}
  if (tela == 1){
    TP();}
  if (tela == 4){
    TJ();}
}

function mouseClicked() {
  if (end != true) {
    if (between(mouseX, 20, 100) && between(mouseY, 260, 180)) {
      let toAdd = newCard()
      total += cardToInt(toAdd)
      hand.push(toAdd)
    }
    if (between(mouseX, 210, 205) && between(mouseY, 10, 140)) {
      end = true;
      hidden = false;
    }
  }
}


