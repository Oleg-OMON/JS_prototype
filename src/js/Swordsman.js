import Character from "./character";

export default function Swordsman(name, type) {
  Character.call(this, name, type);
  this.attack = 40;
  this.deffence = 10;
}

Swordsman.prototype = Object.create(Character.prototype);
Swordsman.prototype.constructor = Swordsman;