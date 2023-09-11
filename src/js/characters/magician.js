import Character from '../Character';

export default class Magician extends Character {
  constructor(level, health, type) {
    super(health, type);
    this.level = level;
    this.attack = 10;
    this.defence = 40;
    this.type = 'magician';
  }
}
