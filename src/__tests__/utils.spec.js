import { calcTileType, calcHealthLevel } from '../js/utils';

describe('testing function utils calcTileType', () => {
  test('check in function return top-left', () => {
    const receiver = calcTileType(0, 8);
    expect(receiver).toBe('top-left');
  });
  test('check in function return top', () => {
    const receiver = calcTileType(1, 8);
    expect(receiver).toBe('top');
  });
  test('check in function  return top-right', () => {
    const receiver = calcTileType(7, 8);
    expect(receiver).toBe('top-right');
  });
  test('check in function return bottom-right', () => {
    const receiver = calcTileType(63, 8);
    expect(receiver).toBe('bottom-right');
  });
  test('check in function return left', () => {
    const receiver = calcTileType(8, 8);
    expect(receiver).toBe('left');
  });
  test('check in function return right', () => {
    const receiver = calcTileType(15, 8);
    expect(receiver).toBe('right');
  });
  test('check in function return bottom-left', () => {
    const receiver = calcTileType(56, 8);
    expect(receiver).toBe('bottom-left');
  });
  test('check in function return bottom', () => {
    const receiver = calcTileType(57, 8);
    expect(receiver).toBe('bottom');
  });
  test('check in function return center', () => {
    const receiver = calcTileType(25, 8);
    expect(receiver).toBe('center');
  });
});

describe('testing function utils calcHealthLevel', () => {
  test('check in function return critical', () => {
    const receiver = calcHealthLevel(14);
    expect(receiver).toBe('critical');
  });
  test('check in function return normal', () => {
    const receiver = calcHealthLevel(40);
    expect(receiver).toBe('normal');
  });
  test('check in function return high', () => {
    const receiver = calcHealthLevel(60);
    expect(receiver).toBe('high');
  });
});
