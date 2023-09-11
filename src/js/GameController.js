import themes from './themes';
import Bowman from './characters/bowman';
import Swordsman from './characters/swordsman';
import Magician from './characters/magician';
import Vampire from './characters/vampire';
import Undead from './characters/undead';
import Daemon from './characters/daemon';
import { redrawPlayersTeam, redrawEnemiesTeam } from './redraw';

const playerTypes = [Bowman, Swordsman, Magician]; // массив с ТИПАМИ персонажей
const enemyTypes = [Vampire, Undead, Daemon];

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.redrawPositions(redrawPlayersTeam(playerTypes));
    this.gamePlay.redrawPositions(redrawEnemiesTeam(enemyTypes));
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
