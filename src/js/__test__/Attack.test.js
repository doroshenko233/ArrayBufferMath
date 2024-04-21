import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('Должен создаваться объект', () => {
  expect(new Character('Nick', 'Daemon')).toBeDefined();
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

