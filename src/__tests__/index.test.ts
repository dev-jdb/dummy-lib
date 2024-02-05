import { add, subtract } from '../index';

describe('add', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should return 0 when adding zero to zero', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
  });

  it('should handle negative numbers correctly', () => {
    const result = add(-5, 3);
    expect(result).toBe(-2);
  });
});

describe('subtract', () => {
  it('should subtract two numbers correctly', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should return 0 when subtracting zero from zero', () => {
    const result = subtract(0, 0);
    expect(result).toBe(0);
  });

  it('should handle negative numbers correctly', () => {
    const result = subtract(-5, 3);
    expect(result).toBe(-8);
  });
});
