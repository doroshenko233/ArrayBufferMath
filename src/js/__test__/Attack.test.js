import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('Должен создаваться объект', () => {
  expect(new Character('Nick', 'Daemon')).toBeDefined();
});

test('Проверка выбора типа героя', () => {
  const hero = new Daemon('Nick');
  expect(hero.type).toBe('Daemon'); 
});

test('Атака в зависимости от растояния', () => {
  const magician = new Magician();
  magician.attack = 100;
  const result = magician.attack;
  expect(result(2)).toEqual(90);
  expect(result(3)).toEqual(80);
  expect(result(4)).toEqual(70);
  expect(result(5)).toEqual(60);
});

test("Атака под дурманом", () => {
  const daemon = new Daemon();
  daemon.attack = 100;
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result(2)).toEqual(85);
  expect(result(3)).toEqual(72);
  expect(result(4)).toEqual(60);
  expect(result(5)).toEqual(48);
});

test('Расстояние не должно быть меньше 1', () => {
  const daemon = new Daemon();
  expect(() => daemon.attack(0)).toThrow(new Error('Расстояние не должно быть меньше 1 и больше 10'));
})

test('Расстояние не должно быть больше 10', () => {
  const magician = new Magician();
  expect(() => magician.attack(11)).toThrow(new Error('Расстояние не должно быть меньше 1 и больше 10'));
})

