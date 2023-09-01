import Character from '../Character';

export default class Vampire extends Character {
  constructor(level, health, type) {
    super(level, health, type);
    this.attack = 25;
    this.defence = 25;
  }
}
