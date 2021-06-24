import Character from './basic';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.deffence = 10;
  }
}
