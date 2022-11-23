function tomarBanho() {
  return "Tomar banho!";
}

function comerCafeDaManha() {
  let refeicao = cozinharComida();

  return `Comendo ${refeicao}`;
}

function cozinharComida() {
  let items = ["Aveia", "Ovos", "Shake de Proteína"];

  return items[Math.floor(Math.random() * items.length)];
}

function despertar() {
  tomarBanho()

  comerCafeDaManha();

  console.log("Ok, pronto para trabalhar!");
}

despertar();