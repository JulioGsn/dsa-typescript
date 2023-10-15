import { ternary_search } from './../algorithms';

test('Find the target index in ternary search', () => {
    const arr = [4, 8, 12, 13, 22, 80];
    const target = 22;
    
    const result = ternary_search(arr, target);
    expect(result).toBe(4);
});

test('Target index not found in ternary search', () => {
    const arr = [4, 8, 12, 13, 22, 80];
    const target = 10;
    
    const result = ternary_search(arr, target);
    expect(result).toBe(-1);
});
