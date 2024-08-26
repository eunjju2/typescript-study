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

// 문자열 할당. 할당한 뒤로는 다 할당해줘야 함
// enum Level {
//     NOVICE,
//     INTERMEDIATE = 'hello',
//     ADVANCED = 'world',
//     MASTER = "hi",
// }

// const a = Level.NOVICE; //const a: Level.NOVICE
// const b = Level[Level.NOVICE]; //const b: string

//실습 7
// enum Level {
//     NOVICE,
//     INTERMEDIATE,
//     ADVANCED,
//     MASTER,
// }

// function yourlevel(level : Level) {
//     console.log(Level[level]) 
// } 
// const mylevel = Level.ADVANCED;
// yourlevel(mylevel) //ADVANCED

//실습 8
//infer : 조건부 타입 내에서 타입 추론 기능을 높일 대 사용하는 키워드
// type El<T> = T extends (infer E)[] ? E : never;
// type str = El<string[]>; //type str = string
// type NumNool = El <(number | boolean)[]>; //type NumNool = number | boolean
 
// type ElementType<T> = T extends (infer E)[] ? E : never;
// type NumArray = number[]; //type NumArray = number[]
// type Ele =  ElementType<NumArray>; //type Ele = number

//실습 9
//재귀 타입
// type Rec = {
//     name: string;
//     children: Rec[];
// }

// const rec1 : Rec = {
//     name : 'test',
//     children: []
// }

// const rec2 : Rec = {
//     name : 'test',
//     children : [
//         {name: 'test2', children: []}
//     ]
// }

//문제 1
// function removeD<T>(arr : T[]) : T[]{
//     const set = new Set(arr);

//     const newArr = [...set];
//     return newArr;
// }

// const arr1 = removeD([1,1,2,3,4,5])
// console.log(arr1)
// const arr2 = removeD(['a', 'a', 'b'])
// console.log(arr2)


//문제 1 - 풀이
// function removeD<T>(arr: T[]) : T[] {
//     return Array.from(new Set(arr));
// }

// const arr1 = [1,1,2,3,4,5,5,6,7,8]
// console.log(removeD(arr1))



//문제 2
// function returnLen (arr: number[]) : number;
// function returnLen (arr: string) : number;
// function returnLen(arr : any) : any {
//     return arr.length;
// }

// console.log(returnLen([1,2,3]))
// console.log(returnLen("abc"))

//문제2 - 풀이
// function getLen(arr: number[]) : number;
// function getLen(arr: string) : number;
// function getLen(arr: any) : number {
//     return arr.length;
// };

// const arr1 = getLen([1,1,2,3,4,5])
// console.log(arr1)
// const arr2 = getLen(['a', 'a', 'b'])
// console.log(arr2)


//실습 10
// class Person {
//     name : string;
//     age : number;
//     married : boolean;

//     constructor(name : string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

// const Person = class {
//     name : string;
//     age : number;
//     married : boolean;

//     constructor(name : string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

//실습 11
// interface Human {
//     name : string;
//     age : number;
//     married : boolean;
// }

// class Person implements Human{
//     name;
//     age;
//     married;

//     constructor(name : string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

// const person1 : Person = new Person('zero', 28, false);
// const person2 : typeof Person = Person;
//실습 12
// class Parent{
//     name? : string;
//     readonly age: number;
//     protected married : boolean;
//     private value : number;

//     constructor(name : string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//         this.value = 0;
//     }
//     changeAge(age : number) {
//         this.age = age; //읽기 전용 속성이므로 'age'에 할당할 수 없습니다.
//     }
// }

// class Child extends Parent {
//     constructor(name: string, age: number, married: boolean) {
//         super(name, age, married); 
//     }
//     sayName() {
//         console.log(this.name);
//     }
//     sayMarried() {
//         console.log(this.married);
//     }
//     sayValue() {
//         console.log(this.value) //'value' 속성은 private이며 'Parent' 클래스 내에서만 액세스할 수 있습니다.
//     }
// }


// const child = new Child('lee', 25, false);
// child.name;
// child.married; //'married' 속성은 보호된 속성이며 'Parent' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
// child.value; //'value' 속성은 private이며 'Parent' 클래스 내에서만 액세스할 수 있습니다.


//실습 13
//implements 하는 인터페이스의 속성은 전부 public이어야함
// interface Human {
//     name: string;
//     age: number;
//     married : boolean;
// }

// class Person implements Human {
//     name;
//     age;
//     married;
//     constructor(name : string, age : number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

//실습 14
//"noImplicitOverride": true 체크
// class Human{
//     play() {
//         console.log('play');
//     }
//     study() {
//         console.log('study');
//     }
// }

// class Employee extends Human {
//     work() {
//         console.log('work');
//     }
//     override study() {
//         console.log('study2');
//     }
// }

//실습 15
// class Signature {
//     [propName : string] : string | number | undefined;
//     static[propName : string] : boolean;
// }

// const sig = new Signature();
// sig.hello = 'world';
// Signature.isGood = true;


//실습 16
// class Person {
//     name : string;
//     age : number;
//     married : boolean;

//     constructor(name : string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }  
//     sayMarried(this : Person) {
//         console.log(this.married);
//     }
//     sayCallback(callback : (this: this) => void) {
//         callback.call(this);
//     }
// }

//실습 17
//추상 클래스
//반드시 abstract 속성이나 메서드를 구현해야 함
// abstract class Person {
//     name : string;
//     age : number;
//     married : boolean;
//     abstract value : number;

//     constructor(name : string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;

//     }  
//     changeAge(age : number) {
//         this.age = age;
//     }
//     abstract sayAge() : void;
//     abstract sayMarried() : void;
// }

// class RealPerson extends Person {
//     value : number = 0;
//     sayAge(): void {
//         console.log(this.age);
//     }
//     sayMarried(): void {
//         console.log(this.married);
//     }
// }


//문제 3
// type FirstElement<T> = T extends (infer E)[] ? E : never;

// type Tuple1 = [string, number, boolean];
// type Tuple2 = [boolean, number];

// type result1 = FirstElement<Tuple1>;
// type result2 = FirstElement<Tuple2>;

//문제3 풀이
// type FirstElement<T> = T extends [infer E, ...any[]] ? E : never;

// type Tuple1 = [string, number, boolean];
// type Tuple2 = [boolean, number];

// type result1 = FirstElement<Tuple1>;
// type result2 = FirstElement<Tuple2>;





//문제4
// class Animal {
//     private name : string;
//     protected age : number;
//     constructor (name : string, age : number) {
//         this.name =name;
//         this.age = age;
//     } 

//     private getName() :string {
//         return this.name;
//     }

//     protected getAge() :number {
//         return this.age;
//     }
// }

// class Dog extends Animal {
//     breed : string;
//     constructor (name : string, age : number, breed: string) {
//         super(name, age);
//         this.breed = breed;
//     }
//     bark() {
//         console.log("Woof!")
//     }
// }

// const pori = new Dog('pori', 4, 'false');
// pori.bark()

//문제 4 풀이
// class Animal {
//     private name : string;
//     protected age : number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     getName() : string {
//         return this.name;
//     }
//     getAge() : number {
//         return this.age;
//     }
// }

// class Dog extends Animal {
//     breed : string;
//     constructor(name : string, age: number, breed: string){
//         super(name, age);
//         this.breed = breed;
        
//     }
//     bark() : string {
//         return "woof!"
//     }
// }


//실습 18
// Partial : 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있음
// interface Address {
//     email : string;
//     address : string;
// }

// const me : Partial<Address>= {};
// const you : Partial<Address> = {email : 'abc@abc.com'}
// const all : Partial<Address> = {email : 'abc@abc.com', address : 'abc'}


//실습 19
// interface Todo {
//     title : string;
//     description : string;
//     completed : boolean;
// }

// type TodoPreview = Pick<Todo, 'title' | 'completed'>
// const todo : TodoPreview = {
//     title : 'clean',
//     completed : false
// }

//실습 20
// interface Todo {
//     title : string;
//     description : string;
//     completed : boolean;
// }

// type TodoPreview = Omit<Todo, 'description'>
// const todo : TodoPreview = {
//     title : 'clean',
//     completed : false
// }

//실습 21
// type User = {
//     firstName : string;
//     lastName?: string;
// }

// let firstUser : User = {
//     firstName : 'Eunjju'
// }
// let secondUser : Required<User> = {
//     firstName : 'Eunjju',
//     lastName : "Lee"
// }

//실습 22
// interface Cat {
//     age: number;
//     breed : string;
// }

// type CatName = "a" | "b" | "c"
// const cats : Record<CatName, Cat> = {
//     a : {age : 10, breed : 'a'},
//     b : {age : 10, breed : 'b'},
//     c : {age : 10, breed : 'c'},
// }


//실습 23
// type T0 = ReturnType<() => string>
// type T1 = ReturnType<(s : string) => void>

// function fn(str : string) {
//     return str;
// }

// const a : ReturnType<typeof fn> = "Hello"
// // const b : ReturnType<typeof fn> = true //'boolean' 형식은 'string' 형식에 할당할 수 없습니다.


//실습 24
type Users = 'kim' | 'lee' | 'park'
type UserName = {[K in Users] : string}
const userNameInfo : UserName = {
    kim : 'kim',
    lee : 'lee',
    park : 'park'
}

type UserAge = {[K in Users] : number}
const userAgeInfo : UserAge = {
    kim : 25,
    lee : 22,
    park : 27
}