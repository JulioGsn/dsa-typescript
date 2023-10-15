export function ternary_search(arr: number[], target: number): number {
    let ho = 0;
    let hi = arr.length - 1;
    let mid1 = ho + Math.floor((hi-ho)/3)
    let mid2 = hi - Math.floor((hi-ho)/3)

    while (ho <= hi) {
        if(arr[mid1] === target) {
            return mid1;
        }
        if(arr[mid2] === target) {
            return mid2;
        }
        if(target < arr[mid1]) {
            hi = mid1 - 1;
        } else if(target > mid2) {
            ho = mid2 + 1;
        } else {
            ho = mid1 + 1;
            hi = mid2 - 1;
        }

        mid1 = ho + Math.floor((hi-ho)/3)
        mid2 = hi - Math.floor((hi-ho)/3)
    } 

    return -1;
}
