export function binary_search(arr: number[], target: number): boolean {
    let lo = 0;
    let hi = arr.length;
    let m = Math.floor((hi - lo) / 2);
    
    while (lo <= hi) {
        if(arr[m] == target) {
            return true;
        } else if(arr[m] < target) {
            lo = m + 1;
        } else {
            hi = m - 1;
        }

        m = Math.floor((hi - lo) / 2) + lo;
    }

    return false;
}

