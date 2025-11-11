const array = [1,2,3,4];

// console.log(array.length);

// const pushRes = array.push(5);
// const popRes = array.pop();

// const sliceRes = array.slice(0,2)

// console.log(sliceRes);
// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (el of array) {
//     console.log(el);
// }

// for (i in array) {
//     console.log(i);
// }

const forEachRes = array.forEach((el, index) => {
    console.log(el, index);
    return el * 2;
})

const mapRes = array.map((el, index) => {
    console.log(el, index);
    return el * 2;
})

console.log('forEachRes', forEachRes);
console.log('mapRes', mapRes);