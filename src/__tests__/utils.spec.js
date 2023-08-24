import calcTileType from '../js/utils';

describe('testing function utils', () => {
  test('check in function', () => {
    // const receiver = calcTileType(0, 8);
    expect(calcTileType(0, 8)).toBe('top-left');
  });
});
