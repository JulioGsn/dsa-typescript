export function linear_search(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if(target === arr[i]) {
            return true;
        }
    }
    return false;
}
