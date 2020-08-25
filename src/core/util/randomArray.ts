/**
 *  随机生成n*n 在(0,n*n)的数组
 * @param n n*n队列
 */
export function randomArray(n: number): Array<number> {
    let arr: number[] = [];
    for (let index = 0; index < n * n; index++) {
        arr.push(index);
    }
    for (let i = 0; i < n * n; i++) {
        const rand = Math.floor(Math.random() * 100) % (n * n);
        const temp = arr[i];
        arr[i] = arr[rand];
        arr[rand] = temp;
    }
    return arr;
}