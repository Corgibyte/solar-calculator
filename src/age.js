export class Age {
  constructor(birthday) {
    this.birthday = birthday;
    this.earthAge = (Date.now() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365);
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

  earthYearsLeft(earthLifeExp) {
    return Math.abs(earthLifeExp - this.earthAge);
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

  earthYearsToBirthday() {
    const nowDate = new Date();
    let nextYear;
    if (this.birthday.getMonth() < nowDate.getMonth()) {
      nextYear = nowDate.getFullYear() + 1;
    } else if (this.birthday.getMonth() === nowDate.getMonth()) {
      if (this.birthday.getDate() <= nowDate.getDate()) {
        nextYear = nowDate.getFullYear() + 1;
      } else {
        nextYear = nowDate.getFullYear();
      }
    } else {
      nextYear = nowDate.getFullYear();
    }
    const nextBirthday = new Date(nextYear, this.birthday.getMonth(), this.birthday.getDate());
    return (nextBirthday.getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 365);

  }

  mercurialYearsToBirthday() {
    return -1;
  }

  venusianYearsToBirthday() {
    return this.earthYearsToBirthday() / 0.62;
  }

  martianYearsToBirthday() {
    return -1;
  }

  jovianYearsToBirthday() {
    return -1;
  }
}

