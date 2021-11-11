export class Age {
  constructor(age) {
    this.earthAge = age;
  }

  toMercurial() {
    return this.earthAge / 0.24;
  }

  toVenusian() {
    //TODO
    return 1;
  }

  toMartian() {
    //TODO
    return 1;
  }

  toJovian() {
    //TODO
    return 1;
  }
}