import { testPathPatternToRegExp } from 'jest-util';
import { Age } from './../src/age.js';

describe('Age', () => {
  let testAge1;
  let testAge2;

  beforeEach(() => {
    const msPerYear = 1000 * 60 * 60 * 24 * 365;
    const nowDate = new Date();
    testAge1 = new Age(new Date(nowDate.getTime() - msPerYear));
    testAge2 = new Age(new Date(nowDate.getTime() - 10 * msPerYear));
  });

  test('should create age object with given age as Earth age', () => {
    expect(testAge1.earthAge).toEqual(1);
  });

  test('should correctly convert age of 1 to Mercurial age', () => {
    expect(testAge1.toMercurial()).toBeCloseTo(4.167);
  });

  test('should correctly convert age of 10 to Mercurial age', () => {
    expect(testAge2.toMercurial()).toBeCloseTo(41.667);
  });

  test('should correctly convert age of 1 to Venusian age', () => {
    expect(testAge1.toVenusian()).toBeCloseTo(1.612);
  });

  test('should correctly convert age of 10 to Venusian age', () => {
    expect(testAge2.toVenusian()).toBeCloseTo(16.129);
  });

  test('should correctly convert age of 1 to Martian age', () => {
    expect(testAge1.toMartian()).toBeCloseTo(0.532);
  });

  test('should correctly convert age of 10 to Martian age', () => {
    expect(testAge2.toMartian()).toBeCloseTo(5.319);
  });

  test('should correctly convert age of 1 to Jovian age', () => {
    expect(testAge1.toJovian()).toBeCloseTo(0.084);
  });

  test('should correctly convert age of 10 to Jovian age', () => {
    expect(testAge2.toJovian()).toBeCloseTo(0.843);
  });

  test('should get correct Mercurial years left if younger than life exp', () => {
    expect(testAge1.mercurialYearsLeft(3)).toBeCloseTo(8.333);
  });

  test('should get correct Mercurial years past LE if older than LE', () => {
    expect(testAge2.mercurialYearsLeft(7)).toBeCloseTo(12.5);
  });

  test('should get correct Earth years left if younger than life exp', () => {
    expect(testAge1.earthYearsLeft(3)).toBeCloseTo(2);
  });

  test('should get correct Earth years past LE if older than LE', () => {
    expect(testAge2.earthYearsLeft(7)).toBeCloseTo(3);
  });

  test('should get correct Venusian years left if younger than life exp', () => {
    expect(testAge1.venusianYearsLeft(3)).toBeCloseTo(3.226);
  });

  test('should get correct Venusian years past LE if older than LE', () => {
    expect(testAge2.venusianYearsLeft(7)).toBeCloseTo(4.839);
  });

  test('should get correct Martian years left if younger than life exp', () => {
    expect(testAge1.martianYearsLeft(3)).toBeCloseTo(1.064);
  });

  test('should get correct Martian years past LE if older than LE', () => {
    expect(testAge2.martianYearsLeft(7)).toBeCloseTo(1.596);
  });

  test('should get correct Jovian years left if younger than life exp', () => {
    expect(testAge1.jovianYearsLeft(3)).toBeCloseTo(0.169);
  });

  test('should get correct Jovian years past LE if older than LE', () => {
    expect(testAge2.jovianYearsLeft(7)).toBeCloseTo(0.253);
  });

  test('should get correct Earth years to next birthday', () => {
    expect(testAge1.earthYearsToBirthday()).toBeCloseTo(1);
  });

  test('should get correct Mercurial years to next birthday', () => {
    expect(testAge1.mercurialYearsToBirthday()).toBeCloseTo(4.167);
  });

  test('should get correct Venusian years to next birthday', () => {
    expect(testAge1.venusianYearsToBirthday()).toBeCloseTo(1.613);
  });

  test('should get correct Martian years to next birthday', () => {
    expect(testAge1.martianYearsToBirthday()).toBeCloseTo(0.532);
  });

  test('should get correct Jovian years to next birthday', () => {
    expect(testAge1.jovianYearsToBirthday()).toBeCloseTo(0.0843);
  });
});