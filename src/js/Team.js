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
    this.members = new Map();
  }

  addAll(...players) {
    players.forEach((obj) => {
      this.members.set(obj, 'teams');
    });
  }

  toArray() {
    return Array.from(this.members.keys());
  }
}

// const characters = [new Swordsman(2), new Bowman(1)];
// const character2 = [new Swordsman(2), new Bowman(1), new Magician(2)];
// const team = new Team();
// team.addAll(characters);
// team.addAll(characters);
// team.addAll(character2);
// console.log(team.members);
// console.log(team.members.keys());
