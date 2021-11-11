export class Age {
  constructor(age) {
    this.earthAge = age;
  }

  toMercurial() {
    return this.earthAge / 0.24;
  }

  toVenusian() {
    return this.earthAge / 0.62;
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