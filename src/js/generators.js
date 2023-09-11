/* eslint-disable max-len */
/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
import Character from './Character';
import Bowman from './characters/bowman';
import Magician from './characters/magician';
import Swordsman from './characters/swordsman';
import Daemon from './characters/daemon';
import Team from './Team';

export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const randomIndex = Math.floor(Math.random() * allowedTypes.length);
    const instance = new allowedTypes[randomIndex](Math.round((Math.random() * (maxLevel - 1) + 1)));
    yield instance;
  }
}
// const playerTypes = [Bowman, Swordsman, Magician, Daemon];
// const playerGenerator = characterGenerator(playerTypes, 3);
// const character1 = playerGenerator.next().value;
// console.log(character1);
// const character2 = playerGenerator.next().value;
// console.log(character2);
/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 // eslint-disable-next-line max-len
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = new Team();
  const playerGenerator = characterGenerator(allowedTypes, maxLevel);
  for (let i = 1; i <= characterCount; i += 1) {
    const character = playerGenerator.next().value;
    team.add(character);
  }
  return team.toArray();
}

// const playerTypes = [Bowman, Swordsman, Magician];
// console.log(generateTeam(playerTypes, 3, 1));
// console.log(generateTeam(playerTypes, 4, 4));
