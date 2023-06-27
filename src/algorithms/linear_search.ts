export function linear_search(arr: number[], target: number): boolean {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        if(target === arr[i]) {
            found = true;
            break;
        }
    }
    return found
}
