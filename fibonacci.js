const errorMessage = 'invalid length';
const nextFib = (fibs) => fibs[fibs.length - 1] + fibs[fibs.length - 2];

const fibs = (length) => {
    const fibs = [0, 1];
    if (length < 0 || !Number.isInteger(length)) {
        console.log(errorMessage);
    } else if (length <= 2) {
        return fibs.slice(0, length);
    } else {
        for (i = 3; i <= length; i++) {
            fibs.push(nextFib(fibs));
        }
        return fibs;
    }
}
console.log('fibs');
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));

const fibsRec = (length, fibs = [0, 1]) => {
    if (length < 0 || !Number.isInteger(length)) {
        console.log(errorMessage);
        return;
    } else if (length <= 2) {
        return fibs.slice(0, length);
    } else if (fibs.length >= length) {
        return fibs;
    } else {
        return fibsRec(length, [...fibs, nextFib(fibs)]);
    }
}
console.log('fibsRec');
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(8));