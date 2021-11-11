import { testPathPatternToRegExp } from 'jest-util';
import { Age } from './../src/age.js';

describe('Age', () => {
  let testAge1;
  let testAge2;

  beforeEach(() => {
    testAge1 = new Age(1);
    testAge2 = new Age(10);
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
    expect(testAge2.toMartian()).toBeCloseTo(0.188);
  });

  test('should correctly convert age of 1 to Jovian age', () => {
    expect(testAge1.toJovian()).toBeCloseTo(0.084);
  });

  test('should correctly convert age of 10 to Jovian age', () => {
    expect(testAge2.toJovian()).toBeCloseTo(0.843);
  });
});