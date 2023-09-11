/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */
// import Swordsman from './characters/swordsman';
// import Bowman from './characters/bowman';
// import Magician from './characters/magician';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    // this.members.forEach((obj) => {
    this.members.add(character);
    // });
  }

  addAll(...characters) {
    characters.forEach((obj) => {
      this.members.add(obj);
    });
  }

  toArray() {
    return Array.from(this.members.values());
  }
}

// const characters = [new Swordsman(2), new Bowman(1)];
// const character2 = [new Swordsman(2), new Bowman(1), new Magician(2)];
// const character3 = new Magician(2);
// const team = new Team();
// team.addAll(characters);
// team.add(character3);
// team.addAll(character2);
// console.log(team.toArray());
// console.log(team.members);
// console.log(team.members.keys());
