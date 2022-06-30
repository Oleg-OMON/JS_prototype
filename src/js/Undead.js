import Character from "./character";

export default function Undead(name, type) {
  Character.call(this, name, type);
  this.attack = 25;
  this.deffence = 25;
}
Undead.prototype = Object.create(Character.prototype);
Undead.prototype.constructor = Undead;