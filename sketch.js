let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("yellow");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(500, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(35);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Piratas do Caribe: A Maldição do Pérola Negra";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Thor:Amor e trovão"       
        } else{
         return "Hulk";
        }
      } else {
        if (gostaDeFantasia) {
          return "Valentin";
        } else {
          return "rei leão";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A Vida é Bela";
    } else {
      return "miracolous: as aventuras de ladybug";
    }
  }
}
