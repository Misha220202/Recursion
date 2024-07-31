const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    const sorted = leftIndex < left.length ? result.concat(left.slice(leftIndex)) : result.concat(right.slice(rightIndex));
    return sorted;
}

const arrA = [3, 2, 1, 13, 8, 5, 0, 1];
const arrB = [105, 79, 100, 110];
console.log('mergeSort');
console.log(mergeSort(arrA));
console.log(mergeSort(arrB));