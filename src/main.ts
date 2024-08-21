//실습 1
// const add = function(a: number, b: number) : number {
//     return a + b
// }

//실습 2
// function add2(a: number ,b: number) : number {
//     return a + b
// }

// const result1 = add2(1,2); //number

//실습 3
// const str = "hello";
// const num = 123;
// const bool = false;
// const n = null; //null
// const u = undefined; //undefined
// const sym = Symbol('sym'); //typeof sym
// const obj = {hello: 'world'}; //hello: string;

// let str = "hello";
// let num = 123;
// let bool = false;
// let n = null; //n: any
// let u = undefined; //u: any
// let sym = Symbol('sym'); //sym: symbol
// let obj = {hello: 'world'}; //hello: string;

//실습 4
// let str : 'hello' = 'hello'; //타입 자리에 리터럴 값 표기. 표기한 타입과 일치하는 값만 대입 가능
// str = 'world'; //'"world"' 형식은 '"hello"' 형식에 할당할 수 없습니다.

//실습 5
//객체는 값을 수정할 수 있으므로 타입을 넓게 추론
// const obj = {name: 'lee'}; //obj: {name: string;}
// const arr = [1,  2, 'three']; //arr: (string | number)[]

// //as const 접미사를 붙여 값이 변하지 않는 것이 확실하다는 것을 표현
// const obj = {name: 'lee'} as const; //obj: {readonly name: "lee";}
// const arr = [1,  2, 'three'] as const; //arr: readonly [1, 2, "three"]

// //readonly 이므로 불가능
// obj.name = 'lee'; 
// arr.push(4);


//실습 6
//배열 타입 지정
// const arr1: string[] = ['1', '2', '3'];
// const arr2: Array<number> = [1, 2, 3];

// const arr3 = [1, '2', 3]; //arr3: (string | number)[]
// const arr4 = []; //빈 배열은 any[]로 추론

//실습 7
//튜플 타입. 각 요소 자리에 타입이 고정되어 있는 배열
// const tuple : [number , boolean, string] = [1, true, 'hello']
// tuple[0] = 3;
// // tuple[2] = 1; //해당 인덱스에는 문자열만 가능
// tuple.push('hello') //배열 요소 추가 및 제거 가능
// console.log(tuple); //순서 고정 X

// const tuple : readonly[number , boolean, string] = [1, true, 'hello'] //readonly 붙이면 push 사용 막음. 튜플 수정 불가
// // tuple.push('hello')
// console.log(tuple);

//실습 8
// const strNumbools : [string, number, ...boolean[]] = ['hello', 1, false, true, false] //스프레드 문법 사용하여 타입 추론 가능

// const[a, ...rest] = ['hello', 1, 2, 3]
// const[b, ...rest2] : [string, ...number[]] = ['hello', 1, 2, 3]


//실습 9 
//내장 객체 타입 
// function add(x : Number, y: Number) { 
//     return x + y;
// }
// function add(x : number, y: number) {
//     return x + y;
// }
// const str1: String = 'hello';
// const st2 : string = str1;


//실습 10 
//함수 호출은 타입으로 사용할 수 없음
//연산자 왼쪽에 함수 호출이 올 수 없음
//add는 값이지만 typeof를 앞에 붙여 타입으로 사용 가능
// function add(x : number, y: number) {return x + y}
// const result1 = add(1, 2);
// const result1 : add(1, 2) = add(1, 2);
// const result2 : typeof add(1, 2) = add(1, 2);

// const add2 : typeof add = (x: number , y : number) => x + y



//실습 11
//유니언 타입
//하나의 변수가 여러 타입을 가질 수 있는 가능성을 표현
// let strNum : string | number = 'hello';
// strNum = 1;
// const arr = [1, '2', 3];


//실습 12
//타입 좁히기
// function unionType(value: string | number) : number {
//     if(typeof value === 'string') {
//         return parseInt(value);
//     }
//     return value;
// }

// unionType(1);
// unionType('1');


//실습 13
//push() 요소를 추가할 때마다 추론하는 타입 변함
// const arr = [];
// arr.push('1');
// arr;
// arr.push(3);
// arr;

//실습 14
//숫자와 문자열 연산할 때 타입이 변함
// const a : any = '123'; //any
// const any1 = a + 1; //any
// const any2 = a - 1; //number
// const any3 = a * 1; //number
// const any4 = a + '1'; //string
// const any5 = a / 1; //number

//실습 15
//타입스크립트가 명시적으로 any를 반환 => 모든 타입이 any가 되는 것 방지
//JSON.parse와 fetch 함수
// fetch('url').then < {data : string} > ((response) => {
//     return response.json();
// }).then((result) => {

// })
// const result : {hello : string} = JSON.parse(`{"hello" : "json"}`)


//실습 16
//unknown 타입. as로 타입 주장
// try{

// }catch(e) {
//     const error = e as Error;
//     console.log(error.message);
// }



//문제 1
let userName : string = 'Lee';

function add(a : number, b : number) : number {
    return a + b
}

function isEven(num : number) : boolean {
    return num % 2 === 0;
}