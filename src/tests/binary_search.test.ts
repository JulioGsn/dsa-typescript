import { binary_search } from './../algorithms';

test('Find the target in binary search', () => {
    const arr = [4, 8, 12, 13, 22, 80];
    const target = 22;
    
    const result = binary_search(arr, target);
    expect(result).toBe(true);
});
