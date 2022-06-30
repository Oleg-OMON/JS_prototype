import Character from "./Character";

export default function Daemon(name, type) {
  Character.call(this, name, type);

  this.attack = 10;
  this.deffence = 40;
}

Daemon.prototype = Object.create(Character.prototype);
Daemon.prototype.constructor = Daemon;