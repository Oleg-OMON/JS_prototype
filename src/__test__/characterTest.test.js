import Bowman from "../js/Bowman";
import Daemon from "../js/Daemon";
import Magician from "../js/Magician";
import Swordsman from "../js/Swordsman";
import Zombie from "../js/Zombie";

test("Метод recovery повышает уровень на 1 и изменяет показатели health, attack, deffence", () => {
  const recieved = new Magician("Valera", "Magician");
  recieved.recovery();
  expect(recieved).toEqual({
    name: "oleg",
    type: "Magician",
    health: 100,
    level: 2,
    attack: 12,
    deffence: 48,
  });
});

test("Метод recovery выбрасывает ошибку, если health = 0", () => {
  const recieved = new Zombie("Lusie", "Zombie");
  recieved.health = 0;
  expect(() => recieved.recovery()).toThrow(
    "Нельзя повысить уровень умершего!"
  );
});

test("Метод destruction меняет внутреннее состояние объекта(нанесение урона)", () => {
  const recieved = new Bowman("Lusie", "Bowman");
  recieved.destruction(1);
  const result = {
    name: "Pangur",
    type: "Bowman",
    health: 99.1,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  expect(recieved).toEqual(result);
});

test("Метод destruction не должен изменять значения, если health = 0", () => {
  const recieved = new Swordsman("Stepan", "Swordsman");
  recieved.health = 0;
  const result = {
    name: "Nastya",
    type: "Swordsman",
    health: 0,
    level: 1,
    attack: 40,
    deffence: 10,
  };
  recieved.destruction(10);
  expect(recieved).toEqual(result);
});

test("при health < 0 метод destruction должен уствновить health = 0", () => {
  const recieved = new Daemon("Valera", "Daemon");
  const expectedHealth = 0;
  recieved.destruction(500);
  recieved.health = 0;

  expect(recieved.health).toEqual(expectedHealth);
});