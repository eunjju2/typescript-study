//0822

//실습 1
// {} 타입
// const str: {} = 'hello'; //str: {}
// const num: {} = 123; //num: {}
// const bool: {} = true; //bool: {}
// const obj: {} = {name: 'Lee'}; //obj: {}
// const arr: {} = []; //arr: {}
// const func: {} = () => {}; //func: {}
// const n: {} = null; //'null' 형식은 '{}' 형식에 할당할 수 없습니다.t
// const u: {} = undefined; //'undefined' 형식은 '{}' 형식에 할당할 수 없습니다.

// // obj.name='Lee' // 타입은 지정할 수 있지만 할당은 X
// // arr[0]; //실제로 사용하려고 하면 에러 발생

//실습 2
//never 타입
//함수 선언 방식에 따라 달라짐. 선언문과 표현식 차이
// function func1() {
//     throw new Error('error');
// }
// const result1 : never = func1(); //'void' 형식은 'never' 형식에 할당할 수 없습니다.

// const func2 = () => {
//     throw new Error('error');
// }
// const result2 : never = func2(); //result2: never


//실습 3
//무한 반복문
// const infinite = () => { //infinite: () => never
//     while(true) {
//         console.log('반복');
//     }
// }
// function infinite2() : never { //infinite2(): never
//     while(true) {
//         console.log('반복');
//     }
// }


//실습 4
// function strNum(param: string | number) { //else문이 실행될 일이 없기 때문에 never
//     if(typeof param ==='string'){

//     }else if (typeof param === 'number') {

//     }else {
//         param;
//     }
// }

//실습 5
//특정 타입을 저장
// type Person = {
//     name: string,
//     age: number,
//     married : boolean
// }

// const person1 : Person = {
//     name : 'Lee',
//     age : 25,
//     married : false
// }

//실습 6
//객체 타입에 이름을 붙임
// interface Person {
//     name: string,
//     age: number,
//     married : boolean
// }

// const person1 : Person= {
//     name : 'Lee',
//     age : 25,
//     married : false
// }

// interface Func {
//     (x: number, y: number) : number; //x, y, 반환값 모두 number
// }
// const add: Func = (x, y) => x + y

// interface Arr {
//     length : number
//     [key: number]: string
// }
// const arr: Arr= ['1', '2', '3']

//실습 7
//객체 속성 키는 문자열과 심볼만 가능. 다른 자료형의 값이 속성 키로 들어오면 문자열로 반환
// const obj = {}
// obj[123] = '숫자 키';

//{}은 null과 undefined 를 제외한 값 대입이 가능한 interface
// interface NoProp{}
// const obj2 = {
//     txt : '에러 안남',
// }

// const result: NoProp = '안녕';
// const result2 : NoProp = undefined //'undefined' 형식은 'NoProp' 형식에 할당할 수 없습니다.

//실습 8
// interface Animal  {
//     name : string
// }

// interface Animal {
//     honey : boolean
// }
// const bear1 : Animal = {
//     name: 'bear',
//     honey: true
// }


//변하게 되는 것들은 interface 이용할 것. type 쓰면 에러
// type Animal = {
//     name : string
// }

// type Animal = {
//     honey : boolean
// }
// const bear1 : Animal = {
//     name: 'bear',
//     honey: true
// }

//실습 9
// type Animal = {
//     name : string;
// }

// //Animal을 포함하고 있는 타입 생성
// type Bear = Animal& {
//     honey : boolean;
// }
// const bear1 : Bear = {
//     name: 'bear',
//     honey: true
// }

// interface Animal  {
//     name : string
// }

// interface Bear extends Animal { //타입 상속
//     honey : boolean
// }
// const bear1 : Bear = {
//     name: 'bear',
//     honey: true
// }

// type Animal =  {
//     name : string;
// }

// //타입 별칭이 인터페이스를 상속할 수도 있고, 인터페이스가 타입 별칭을 상속할 수도 있다
// //한번에 여러 타입 상속 가능
// interface Bear extends Animal {
//     honey : boolean;
// }

// interface Tiger extends Animal {
//     stripe : boolean;
// }

// interface BearTiger extends Bear , Tiger {}

// type honey = BearTiger['honey'];
// type stripe = BearTiger['stripe'];
// const bear1: Bear = {
//     name: 'bear',
//     honey: true
// }

//실습 10
//상속 시 부모 속성의 타입 변경 가능
// interface Merge {
//     one: string;
//     two: string;
// }

// interface Merge2 extends Merge {
//     one: 'h' | 'w';
//     two: '123';
// }

//문제 1 
// type Name = string;

// const firstName : Name = 'Eunsoo';

// const lastName : Name =  'Lee';

//문제 2
// type MathO = (x: number, y: number) => number;


// const add : MathO = (x, y) => x + y
// const multifly : MathO = (x, y) => x * y

//문제 3
// interface Shape {
//     color : string
// }

// interface Circle extends Shape {
//     radius : number
// }

// const circle : Circle = {
//     color: 'black',
//     radius : 5
// }


//문제 4
// interface Animal {
//     name: string,
//     age: number
// }

// interface Dog extends Animal {
//     breed : boolean
// }

// const dog : Dog = {
//     name : 'pori',
//     age : 4,
//     breed : false
// }

//실습 11
// namespace Exam {
//     export interface Inner {
//         test: string,
//     }
//     export type test2 = number;
// }

// const ex1 : Exam.Inner = {
//     test: 'hello'
// }
// const ex2 : Exam.test2 = 123;

//실습 12
//?옵셔널 : 해당 속성이 있어도 되고 없어도 된다. undefined 허용
// interface Exam {
//     hello : string;
//     world? : number; //number 또는 undefined
//     readonly check : boolean;
//     readonly multifly?: symbol; //readonly와 옵셔널 동시에 가능
// }

// const example: Exam = {
//     hello: 'hi',
//     world : 123,
//     check: true
// }

// example.first; //선언하지 않은 속성에 대해서 에러 발생
// example.check = false; //읽기 전용 속성이므로 값 변경 불가

//실습 13
//인덱스 접근 타입. 객체 속성의 타입에 접근하는 방식
// const obj = {
//     hello: 'world',
//     name: 'kim',
//     age: 28
// }

// type Keys = keyof typeof obj; // 키 : keyof 객체 타입 (객체 obj의 키들로 구성된 유니온 타입). type Keys = 'hello' | 'name' | 'age';
// type Values = typeof obj[Keys] //값 : 객체 타입[키 타입](해당 키들에 대응하는 값들의 타입(string 또는 number)으로 구성된 유니온 타입). type Values = string | number;


//실습 14
// type Arr = [1, 2, 3];
// type first = Arr[0]; //first = 1
// type Length = Arr['length']; //Length = 3
// type Arr2 = (string | boolean)[]; //Arr2 = (string | boolean)[]
// type El = Arr2[number]; //El = string | boolean [number] 인덱스 접근 타입으로 배열 요소들의 타입을 모두 가져올 수 있음

// const obj = {
//     hello: 'world',
//     name: 'kim',
//     age: 28
// }

// type Values = typeof obj['hello' | 'age']; //특정 키들의 값 타입만 추릴 수 있음. Values = string | number

//실습 15
//매핑된 객체 타입. 기존의 다른 타입으로부터 새로운 객체 속성을 만들어내는 타입
//인터페이스에서는 사용 불가. 타입 별칭에서만 사용 가능
//객체가 특정 키와 타입을 반드시 준수하도록 강제. 객체의 키(key)가 hello 또는 hi 중 하나여야 한다는 의미
// type HelloHi = {
//     // [key: 'hello' | 'hi'] : string; //인덱스 시그니처 매개 변수 형식은 리터럴 유형이나 제네릭 형식일 수 없습니다. 대신 매핑된 개체 형식을 사용하세요.
//     [key in 'hello' | 'hi'] : string; //in 연산자를 사용해서 인덱스 시그니처가 표현하지 못하는 타입을 표현. 연산자 오른쪽에는 유니언 타입
// }


//실습 16
//매핑된 객체 타입. 튜플과 배열에도 사용 가능
// type Tuple = [1, 2, 3];
// type CopyTuple = {
//     [key in keyof Tuple] : Tuple[key];
// }

// const copyTuple : CopyTuple = [1, 2, 3]

//실습 17
// type A = string | boolean;
// type B = boolean | number;
// type C = A & B; //type C = boolean

// type D = {} & (string | null); //{}는 null, undefined를 제외한 것. type D = string
// // 전체집합과의 합집합은 전체집합
// //공집합과의 교집합은 공집합
// type F = unknown | {}; //unknown = 전체집합. type F = unknown
// type G = never & {}; //never = 공집합. type G = never

// //예외
// type H = {a: 'b'} & number; //type H = {a: 'b'} & number;. 겹치는 부분이 없지만 never가 아님
// type I = null & {a: 'b'}; //type I = never
// type J = {} & string; //type J = {} & string


//실습 18
//객체 간 대입
// let a: ['hi', 'readonly'] = ['hi', 'readonly'];
// let b: string[] = ['hi', 'normal'];

// a = b; // 튜플은 배열보다 좁은 타입이라 대입 불가
// b = a;

// let a: readonly string[] = ['hi', 'readonly'];
// let b: string[] = ['hi', 'normal'];

// a = b;
// b = a; //readonly 수식어가 붙은 배열이 더 넓은 타입


//실습 19
//객체 간 대입
// type Optional = {
//     a?: string;
//     b?: string;
// }

// type Essential = {
//     a: string;
//     b: string;
// }

// const o : Optional = {
//     a: 'hello',
// }

// const e : Essential = {
//     a: 'hello',
//     b: 'world'
// }

// //두 객체가 있고 속성이 동일할 때, 속성이 옵셔널인 객체가 옵셔널이지 않은 객체보다 더 넓은 타입
// const o2 : Optional = e;
// const e2 : Essential = o; //'Optional' 형식은 'Essential' 형식에 할당할 수 없습니다.


//실습 20
//구조적 타이핑
//모든 속성이 동일하면 객체 타입의 이름이 다르더라도 동일한 타입으로 취급
//구조가 같으면 같은 객체로 인식하는 것 = 구조적 타이핑
// interface Money {
//     amount : number;
//     unit : string;
// }

// interface Liter {
//     amount : number;
//     unit : string;
// }

// const liter: Liter = {amount : 1, unit : 'liter'};
// const circle : Money = liter;

//서로 대입되지 못하게 하려면 객체를 구분할 수 있는 속성 추가
// interface Money {
//     _type : 'money',
//     amount : number;
//     unit : string;
// }

// interface Liter {
//     _type : 'liter'
//     amount : number;
//     unit : string;
// }

// const liter: Liter = {amount : 1, unit : 'liter', _type: 'liter'};
// const circle : Money = liter; //'Liter' 형식은 'Money' 형식에 할당할 수 없습니다.


//문제 5
interface Product {
    name : string,
    price : number,
    description? : string
}

const product1 : Product = {
    name : 'a',
    price : 1000
}

const product2 : Product = {
    name: 'b',
    price : 2000,
    description : 'hello'
}

//문제 6
interface Dictionary {
    [key : string] : string;
}

const dictionary : Dictionary = {
    'name' : 'Lee'
}
dictionary['book'] = 'abc'