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
import Team from './Team';

export function* characterGenerator(allowedTypes, maxLevel) {
  for (const Index of allowedTypes) {
    const instance = new Index();
    if (instance.level <= maxLevel) {
      yield instance;
    }
  }
}
// const playerTypes = [Bowman, Swordsman, Magician];
// const playerGenerator = characterGenerator(playerTypes, 2);
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
  const counter = characterCount;
  const team = new Team();
  const obj = characterGenerator(allowedTypes, maxLevel);
  const ch1 = obj.next().value
  console.log(ch1);
  team.addAll(obj);
  return team.members.keys();
}

const playerTypes = [Bowman, Swordsman, Magician];
generateTeam(playerTypes, 1, 3);