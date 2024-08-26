//실습1
// function add(a : number,b : number) : number {
//     return a + b
// }
// function add2(a:string, b:string) : string {
//     return a + b
// }
// //함수 오버로딩. 두 함수를 하나로 만들기 
// function add(a : number,b : number) : number;
// function add(a:string, b:string) : string;
// function add(a: any, b: any) : any {
//     return a + b;
// }
// add('hello', 'world');
// add(1, 1);
//실습2
//오버로딩 선언 하는 순서는 타입 추론에 영향을 미침
// function example(param: string) : string;
// function example(param: string | null) : number;
// function example(param: string | null) : string | number {
//     if(param) {
//         return 'string';
//     }else {
//         return 123;
//     }
// }
// const result = example('what');
//실습 3
//인터페이스 오버로딩
// interface Add {
//     (x: number, y: number) : number;
//     (x: string, y: string) : string;
// }
// const add: Add= (x: any, y: any) => x + y;
// add(1,2);
// add('1', '2');
// add(1, '2');
// add('1', 2);
//실습 4
//타입 별칭 오버로딩
// type Add1 = (x: number, y: number) => number;
// type Add2 = (x: string, y: string) => string;
// type Add = Add1 & Add2;
// const add : Add = (x: any, y: any) => x + y;
// add(1,2);
// add('1', '2');
// add(1, '2');
// add('1', 2);
//실습 5
//함수 오버로딩
// function saySomething(word: string) : string;
// function saySomething(word: string[]) : string;
// function saySomething(word: any) : any {
//     if(typeof word === 'string') {
//         return word;
//     }else if(Array.isArray(word)){
//         return word.join("");
//     }
//     throw new Error('error');
// }
// saySomething(['hello', 'world'])
//실습 6
//enum : 여러 상수를 나열하는 목적
//숫자 할당 가능. 할당한 뒤로는 1을 더한 값
// enum Level {
//     NOVICE = 3,
//     INTERMEDIATE, //4
//     ADVANCED =7,
//     MASTER, //8
// }
//문자열 할당. 할당한 뒤로는 다 할당해줘야 함
var Level;
(function (Level) {
    Level[Level["NOVICE"] = 0] = "NOVICE";
    Level["INTERMEDIATE"] = "hello";
    Level["ADVANCED"] = "world";
    Level["MASTER"] = "hi";
})(Level || (Level = {}));
var a = Level.NOVICE; //const a: Level.NOVICE
var b = Level[Level.NOVICE]; //const b: string
