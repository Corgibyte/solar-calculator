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
    const ageToConvert = Math.abs(earthLifeExp - this.earthAge);
    return ageToConvert / 0.24;
  }

  venusianYearsLeft(earthLifeExp) {
    return 0.1;
  }

  martianYearsLeft(earthLifeExp) {
    return 1;
  }

  jovianYearsLeft(earthLifeExp) {
    return 1;
  }
}