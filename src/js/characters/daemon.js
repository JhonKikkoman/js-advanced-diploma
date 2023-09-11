import Character from '../Character';

export default class Daemon extends Character {
  constructor(level, health) {
    super(health);
    this.level = level;
    this.attack = 10;
    this.defence = 10;
    this.type = 'daemon';
  }
}
