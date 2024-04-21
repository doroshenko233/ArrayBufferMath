import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}