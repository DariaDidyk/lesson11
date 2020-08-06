// // const arr = [];
// // arr[0] = 1;
// // arr[1] = 2;
// // arr[2] = 3;

// // console.log(arr);


// // const str = '17/01/1994';
// // const arr = str.split('/');

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = Number(arr[i]);
// // }

// // console.log(arr);

// // const ingridients = ['a', 'b', 'c'];
// // const ingridients2 = ['d', 'e', 'f'];
// // // const accOfIngridients = [].concat(ingridients, ingridients2);
// // const acc = ingridients.concat(ingridients2);

// // console.log(acc, ingridients, ingridients2);
// // console.log(accOfIngridients);
// //infinite scroll

// // const n = 5; // 5 * 4 * 3 * 2 * 1

// const fac = (n) => (n <= 1 ? 1 : fac(n - 1) * n);
// // console.log(fac(5));

// const variants = (n, m) => fac(n) / fac(n - m);
// // console.log(variants(10, 3));
// const devide = (n) => n / 2;
// const multiply = (n) => n * n;

// const calcFac = () => {
//     console.log(fac(100));
// };

// // const timeLog = (callback) => {
// //     console.time('fnc');
// //     callback();
// //     console.timeLog('fnc');
// // };

// const arrOfTask = [
//     () => {
//     console.log('Task1');   
//     }, 
//     () => {
//     console.log('Task2');
//     },
// ];

// // for (let i = 0; i < arrOfTask.length; i++) {
// //     timeLog(arrOfTask[i]);
// // };

// // timeLog(calcFac);

// // for (let i = 0; i < arrOfTask.length; i++) {
// //     const element = arrOfTask[i];
// //     element();
// // }

// // for (let i = 0; i < arrOfTask.length; i++) {
// //         const element = arrOfTask[i];
// //         finishTask(element);
// //     }

// const mutate = (n, manipulation) => manipulation(n);

// const multipliedNumber = mutate(2, multiply); // 4
// const factorialNumber = mutate(5, fac);  //120
// const dividedNumber = mutate(6, devide);  //3

// console.log(multipliedNumber, factorialNumber, dividedNumber);

const arr = [1, 2 ,3];
const arr2 = [4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

const forEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
};

// const deed1 = (value, i) => {
//     console.log(`${i}.${value}`);
// };

// const deed2 = (value) => {
//     console.log(value * 10);
// };

// forEach(arr, (value, i) => console.log(`${i}.${value}`));
// forEach(arr2, (value) => console.log(value * 10));

const testFunction = function(value, i) {
    console.log(`${i}.${value}`);
    };

    forEach(arr, testFunction);
    arr.forEach(testFunction);

// forEach(arr, function(value, i) {
//     console.log(`${i}.${value}`)
//     }
// );
// forEach(arr2, function(value) {
//     console.log(value * 10)
//     }
// );