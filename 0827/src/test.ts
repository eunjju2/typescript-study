//실습 1
//forEach
//tsconfig.json에 "declaration": true추가
// let nameStr: string = "Kim"
// let age = 20
// interface Person {name: string}
// let loPerson : Person = {name : "lee"}

//실습2
//tsconfig.json에 "lib" : ["es5", "dom"]추가
// [1, 2, 3].myForEach(() => {});
// [1, 2, 3].myForEach((v, i, a) => {console.log(v, i, a)});
// [1, 2, 3].myForEach((v, i) => {console.log(v)});
// [1, 2, 3].myForEach((v) => 3);

// // ['1', '2', '3'].myForEach((v) => {
// //     console.log(v.slice(0))
// // })

// [true, 2, '3'].myForEach((v) => {
//     if(typeof v === 'string') {
//         v.slice(0);
//     }else{
//         v.toFixed();
//     }
// })

// // interface Array<T> {
// //     myForEach(callback : (v: number, i :number , a: number[]) => void) : void;
// // }

// interface Array<T> {
//     myForEach(callback : (v: T, i :number , a: T[]) => void) : void;
// }

//실습3
// [1, 2, 3].myForEach(function() {
//     console.log(this);
// }, {a: 'b'});
// interface Array<T> {
//     myForEach<K = Window>(callback : (this: K, v : T, i : number, a : T[]) => void, thisArg? : K) : void;
// }

//실습4
//Map
// const r1 = [1, 2, 3].myMap(() => {}) //const r1: void[]
// const r2 = [1, 2, 3].myMap((v, i, a) => v) //const r2: number[]
// const r3 = ['1','2', '3'].myMap((v) => parseInt(v)) //const r3: number[]
// const r4 = [{num: 1}, {num : 2}, {num : 3}].myMap(function(v) { //const r4: number[]
//     return v.num;
// })

// interface Array<T> {
//     myMap<R>(callback : (v : T, i: number, a: T[]) => R) : R[]
// }

//실습5
//Filter
// const r1 = [1, 2, 3].myFilter((v) => v < 2) //const r1: number[]
// const r2 = [1, 2, 3].myFilter((v, i, a) => {}) //const r2: number[]
// const r3 = ['1', 2, '3'].myFilter((v) => typeof v === 'string') //const r3: (string | number)[]
// const r4 = [{num: 1}, {num : 2}, {num : 3}].myFilter(function(v) { 
//     return v.num % 2;
// })

// /*
// const r4: {
//     num: number;
// }[]
// */

// interface Array<T> {
//     myFilter<S extends T>(callback : (v : T, i: number, a: T[]) => void, thisArg?: any) : S[]
// }

//실습6
// const r1 = [1, 2, 3].myFilter((v) : v is number => v < 2) 
// const r2 = [1, 2, 3].myFilter((v, i, a) : v is number => false) 
// const r3 = ['1', 2, '3'].myFilter((v) : v is string => typeof v === 'string') 
// const r4 = [{num: 1}, {num : 2}, {num : 3} ].myFilter(function(v) : v is {num : number} { 
//     return v.num % 2 === 1;
// })

// interface Array<T> {
//     myFilter<S extends T>(callback : (v : T, i: number, a: T[]) => void, thisArg?: any) : S[]
    
// }

//실습7
// const r1 = [1, 2, 3].myFilter((v) => v < 2) 
// const r2 = [1, 2, 3].myFilter((v, i, a) : v is number => false) 
// const r3 = ['1', 2, '3'].myFilter((v) : v is string => typeof v === 'string') 
// const r4 = [{num: 1}, {num : 2}, {num : 3} ].myFilter(function(v){ 
//     return v.num % 2 === 1;
// })

// interface Array<T> {
//     myFilter<S extends T>(callback : (v : T, i: number, a: T[]) => void, thisArg?: any) : S[]
//     myFilter(callback : (v : T, i: number, a: T[]) => void, thisArg?: any) : T[]
    
// }

//실습8
// const r1 = [1, 2, 3].myReduce((a, c) => a + c) 
// const r2 = [1, 2, 3].myReduce((a, c, i ,arr)  => a+ c, 10) 
// const r3 = [{num: 1}, {num : 2}, {num : 3} ].myReduce(
//     function(a, c) {
//         return {...a, [c.num] : 'hi'}
//     },
//     {},
// ) 
// const r4 = [{num: 1}, {num : 2}, {num : 3} ].myReduce(
//     function(a, c) {
//         return a+ c.num
//     },
//     '',
// )

// interface Array<T> {
//     myReduce(callback: (a : T, c: T, i : number, arr: T[]) => T, iV?: T) :  T; 
//     myReduce<S>(callback: (a : S, c: T, i : number, arr: T[]) => S, iV?: S) :  S; 
// }

