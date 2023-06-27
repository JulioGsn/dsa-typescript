import { linear_search } from './../algorithms';

test('Find the target in linear search', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    
    const result = linear_search(arr, target);
    expect(result).toBe(true);
});
