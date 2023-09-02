import Character from './Character';
import Bowman from './characters/bowman';
import Swordsman from './characters/swordsman';
import GamePlay from './GamePlay';

export default class PositionedCharacter {
  constructor(character, position) {
    if (!(character instanceof Character)) {
      throw new Error('character must be instance of Character or its children');
    }

    if (typeof position !== 'number') {
      throw new Error('position must be a number');
    }

    this.character = character;
    this.position = position;
  }
}

const character = [new Swordsman(2), new Bowman(3)];
const position = 8; // для поля 8x8 лучник будет находиться слева на второй строке
const positionedCharacter = new PositionedCharacter(character, position);
const gamePlay = new GamePlay();
gamePlay.redrawPositions(positionedCharacter);