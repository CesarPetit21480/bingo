const score = document.querySelector("#score");
const scores = [];
const url = "../JSON/score.json";

const llamadasScores = async () => {
  const res = await fetch(url);

  res.forEach((element) => {
    const Nuevoscore = new score(
      element.posicion,
      element.nombre,
      element.BolasJugadas
    );
    scores.push(Nuevoscore);
  });
};

console.log(scores);