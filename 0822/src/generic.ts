//실습 1
//중복 제거 가능
// interface Person <T, A> {
//     type: 'human',
//     race: 'yellow',
//     name : T,
//     age: A,
// }

// interface Lee extends Person<'Lee', 25>{}
// interface Kim extends Person<'Kim', 20>{}

//실습 2
//타입 간 중복되는 부분을 없애고, 하나의 타입을 여러 방법으로 재사용 가능
// interface Array<T> {
//     [key:number] : T,
//     length : number
// }

// const numbers: Array<number> = [1,2,3,4]

// const personE = <N, A> (name: N, age: A) => ({
//     type: 'human',
//     race: 'yellow',
//     name,
//     age,
// })

//실습 3
//타입과 인터페이스 교차 사용 가능
// interface PersonI<N, A> {
//     type : 'human',
//     race : 'yellow',
//     name : N,
//     age : A
// }

// type PersonT<N, A> = {
//     type : 'human',
//     race : 'yellow',
//     name : N,
//     age : A
// }

// type Kim = PersonI<'kim', 20>
// interface Lee extends PersonT<'Lee', 25>{}

//실습 4
//객체나 클래스의 메서드에 따로 제너릭 표기 가능
// class Person<N, A>{
//     name: N;
//     age : A;
//     constructor(name: N, age:A) {
//         this.name = name;
//         this.age = age;
//     }
//     method<B>(param : B) {}
// }

// interface PersonI<N, A> {
//     type: 'human',
//     race : 'yellow',
//     name: N,
//     age: A,
//     method: <B>(param:B) => void
// }

//실습 5
// interface Person<N = string, A = number> {
//     type: 'human',
//     race : 'yellow',
//     name: N,
//     age: A,
// }
// type Person1 = Person;
// type Person2 = Person<number> //type Person2 = Person<number, number>
// type Person3 = Person<number, boolean> //type Person3 = Person<number, boolean>

//실습 6
// interface Person<N = string, A = number> {
//     type: 'human',
//     race : 'yellow',
//     name: N,
//     age: A,
// }
// const personE = <N, A = unknown>(name: N, age: A) : Person<N, A> => ({
//     type: 'human',
//     race : 'yellow',
//     name,
//     age,
// })

// const names = personE('lee', 25) //unknown 보다 number가 좁은 타입이므로 numver로 추론


//실습 7
// function values<T>(initial : T[]) {
//     return {
//         hasValue(value: T) {
//             return initial.includes(value)
//         }
//     }
// }

// const savedValues = values(['a', 'b', 'c']);
// savedValues.hasValue('x'); // string으로 추론되므로 오류 없음

//실습 8
//컨디셔널 타입. 특정 타입 extends 다른 타입? 참일 때 타입 : 거짓일 때 타입
// type A1 = string;
// type B1 = A1 extends string ? number : boolean; //type B1 = number

// type A2 = number;
// type B2 = A2 extends string ? number : boolean; //type B2 = boolean

//실습 9
// interface X {
//     x : number;
// }

// interface XY {
//     x: number;
//     y : number;
// }

// interface YX extends X {
//     y : Number;
// }

// type A = XY extends X ? string : number; //type A = string
// type B = YX extends X ? string : number; //type B = string

//실습 10
//타입 검사를 위해 사용됨
// type result = [1] extends [string] ? true : false; //type result = false


//실습 11
// type Start = string | number;
// type New = Start extends string | number ? Start[] : never; //type New = Start[]
// //string, number이면 배열로, 아니면 never
// let n : New = ['hi'];
// n = [123];

//실습 12
// type New<A> = A extends string | number ? string[] : never;
// type Never = New<number> //type Never = string[]
// type Arr= New<string> //type Arr = string[]


//문제 1
// function values<T>(arr : T[]) {
//     return arr[0];
// }
// const fn = values ([1, false, 'abc']) 
// console.log(fn)

//문제 1 - 풀이
// function firstEl<T>(arr : T[]) : T{
//     return arr[0];
// }
// console.log(firstEl([1,2,3]))


//문제 2
// type obj = {length : number}
// function func2<T extends obj>(obj1 : T) : T {
//     return obj1;
// }

// const arr = [1, 2, 3]
// const a= 1;
// console.log(func2(arr))
// // console.log(func2(a))

//문제 2 - 풀이
// function leng<T extends {length : number}>(item : T) {
//     console.log(item.length)
// }

// leng('Hello');


//문제 3
// const func3 = <N = number>(x: N, y : N) : N => {
//     return x > y ? x : y;
// }

// console.log(func3(5,2))

//문제 3 - 풀이
// function numBig<T>(a : T, b : T) : T{
//     return a > b ? a : b;
// }
// console.log(numBig(2, 3))

//문제 4
type IsString<T> = T extends string ? true : false;
type result1 = IsString<'hello'>;


//문제 5
type StringS<T> = T extends string ? T : never;
type result2 = StringS<'abc' | 123 | 'aaaa'>