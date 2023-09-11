import Character from '../Character';

export default class Swordsman extends Character {
  constructor(level, health) {
    super(health);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    this.type = 'swordsman';
  }
}
