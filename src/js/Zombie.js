import Character from "./Character";

export default function Zombie(name, type) {
  Character.call(this, name, type);

  this.attack = 40;
  this.deffence = 10;
}
Zombie.prototype = Object.create(Character.prototype);
Zombie.prototype.constructor = Zombie;