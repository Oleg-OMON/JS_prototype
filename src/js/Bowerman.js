import Character from "./Character";

export default function Bowerman(name,type) {
    Character.call(this, name, type);
    this.attack = 40;
    this.deffence = 10;

}

Bowerman.prototype = Object.create(Character.prototype);
Bowerman.prototype.constructor = Bowerman;
