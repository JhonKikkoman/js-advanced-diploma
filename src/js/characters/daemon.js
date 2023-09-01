import Character from '../Character';

export default class Daemon extends Character {
  constructor(level, health, type) {
    super(level, health, type);
    this.attack = 10;
    this.defence = 10;
  }
}
