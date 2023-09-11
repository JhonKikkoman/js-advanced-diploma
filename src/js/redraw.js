import PositionedCharacter from './PositionedCharacter';
import { generateTeam } from './generators';

// eslint-disable-next-line import/prefer-default-export
export function redrawPlayersTeam(arrTypes) {
  const team = generateTeam(arrTypes, 3, 3); //  функция генерация команды
  const arrPositioned = []; // массива для хранения готовых инстансов
  const randomIndexArr = []; // массив для хранения ячеек поля
  for (let i = 0; i <= 57; i += 8) { // цикл для формирования допустимых ячеек
    randomIndexArr.push(i, i + 1);
  }
  for (const item of team) {
    const randomIndex = randomIndexArr.splice(Math.floor(Math.random()
            * randomIndexArr.length), 1)[0];
    const positionedTeam = new PositionedCharacter(item, randomIndex);
    arrPositioned.push(positionedTeam);
  }
  return arrPositioned;
}

export function redrawEnemiesTeam(arrTypes) {
  const team = generateTeam(arrTypes, 3, 3);
  const arrPositioned = [];
  const randomIndexArr = [];
  for (let i = 6; i <= 63; i += 8) {
    randomIndexArr.push(i, i + 1);
  }
  for (const item of team) {
    const randomIndex = randomIndexArr.splice(Math.floor(Math.random()
              * randomIndexArr.length), 1)[0];
    const positionedTeam = new PositionedCharacter(item, randomIndex);
    arrPositioned.push(positionedTeam);
  }
  return arrPositioned;
}
