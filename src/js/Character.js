export default class Character {
  constructor(name) {
    this.name = name;
    this.attack = undefined;
    this.stoned = false;
  }

  get attack() {
    return (distance) => {
      let attackas = this._attack - 10 * (distance - 1);
      if (this.stoned) {
        attackas -= Math.log2(distance) * 5;
      }
      attackas = Math.round(attackas);
      return attackas;
    };
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}