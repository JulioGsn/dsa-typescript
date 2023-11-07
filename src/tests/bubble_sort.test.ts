import { bubble_sort } from './../algorithms';

test('Sort the array in ascending order', () => {
    const arr = [1, 2, 4, 3, 2, 1];
    
    bubble_sort(arr);
    console.log("Sorted array: ", arr);

    expect(arr).toEqual([1, 1, 2, 2, 3, 4]);
});
