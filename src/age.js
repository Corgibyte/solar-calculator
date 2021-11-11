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

  mercurialYearsLeft(earthLifeExp) {
    return 1;
  }

  venusianYearsLeft(earthLifeExp) {
    return 1;
  }

  martianYearsLeft(earthLifeExp) {
    return 1;
  }

  jovianYearsLeft(earthLifeExp) {
    return 1;
  }
}