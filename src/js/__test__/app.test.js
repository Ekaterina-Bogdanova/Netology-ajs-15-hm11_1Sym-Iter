import Team from '../app';

test('check iterator', () => {
  const char1 = {
    name: 'Лучник1',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const char2 = {
    name: 'Лучник2',
    type: 'Bowman',
    health: 70,
    level: 3,
    attack: 80,
    defence: 10,
  };

  const heroes = new Team(char1, char2);
  const result = [];

  for (const item of heroes) {
    result.push(item);
  }
  expect(result[1]).toEqual({
    name: 'Лучник2',
    type: 'Bowman',
    health: 70,
    level: 3,
    attack: 80,
    defence: 10,
  });
});
