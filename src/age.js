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
    return this.earthAge / 1.88;
  }

  toJovian() {
    return this.earthAge / 11.86;
  }

  getMercurialLifeExp(earthLifeExp) {
    return 1;
  }

  getVenusianLifeExp(earthLifeExp) {
    return 1;
  }

  getMartianLifeExp(earthLifeExp) {
    return 1;
  }

  getJovianLifeExp(earthLifeExp) {
    return 1;
  }
}