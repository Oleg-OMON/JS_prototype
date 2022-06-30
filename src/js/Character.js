export default function Character(name,type) {
   
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.deffence = 10;

    const typeHero = [
        "Bowman",
        "Daemon",
        "Magician",
        "Swordsman",
        "Undead",
        "Zombie",
    ];

    if(typeof name !== 'string') {
        throw new Error('Имя должно быть строкой!');
    }

    if(name.length < 2 || name.length > 10) {
        throw new Error("Ошибка! количество символов в имени от 2 до 10!");
    }

    if (!typeHero.includes(type)) {
        throw new Error("Ошибка! Такой персонаж не существует!");
        }
}   


Character.prototype.recovery = function levelUp() {
    if(this.health !== 0) {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
    }else {
        throw new Error("Нельзя повысить уровень умершего!");
        }
        return 1;
}

Character.prototype.destruction = function damage(points) {
if (this.health > 0) {
    this.health -= points * (1 - this.deffence / 100);
    // console.log('Не сегодня!');
}
if (this.health < 0) {
    this.health = 0;
    
}
}

