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
    const ageToConvert = Math.abs(earthLifeExp - this.earthAge);
    return ageToConvert / 0.62;
  }

  martianYearsLeft(earthLifeExp) {
    const ageToConvert = Math.abs(earthLifeExp - this.earthAge);
    return ageToConvert / 1.88;
  }

  jovianYearsLeft(earthLifeExp) {
    const ageToConvert = Math.abs(earthLifeExp - this.earthAge);
    return ageToConvert / 11.86;
  }
}