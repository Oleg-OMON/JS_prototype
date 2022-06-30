import Character from "./character";

export default function Magician(name, type) {
  Character.call(this, name, type);
  this.attack = 10;
  this.deffence = 40;
}

Magician.prototype = Object.create(Character.prototype);
Magician.prototype.constructor = Magician;