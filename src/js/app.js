export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let index = -1;
    const entries = Object.values(this)[0];

    return {
      next() {
        index += 1;

        return {
          value: entries[index],
          done: index >= entries.length,
        };
      },
    };
  }
}
