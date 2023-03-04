export default function getGames(gamesCategory) {
  let arrayTemp = [],
    key;
  for (key in gamesCategory) {
    arrayTemp.push(gamesCategory[key]);
  }
  return arrayTemp;
}
