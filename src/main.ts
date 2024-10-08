let name: string = "jon";

let friends: string[] = [name, "peter", "jon"];
console.log(friends);

let person: {
  name: string;
  age: number;
  city: string;
} = { name: "jon", age: 12, city: "lagos" };
// console.log(person);

function greet(message: string): string {
  console.log(message);
  return message;
}
// console.log(greet(`hello`).length);

// typing call back functions and methods
function callback(cb: (name: string) => void) {
  cb("bello");
}
function random(name: string) {
  console.log(`hello ${name}`);
}
callback(random);

let greetPerson: {
  name: string;
  add: (num1: number, num2: number) => number;
} = {
  name: "paskkal",
  add(num1, num2) {
    return num1 + num2;
  },
};

const total = greetPerson.add(1, 2);
console.log(total);

// type Aliases

type Person = {
  name: string;
  age: number;
  city: string;
};

let mainPerson: Person = {
  name: "jon",
  age: 12,
  city: "lagos",
};
console.log(mainPerson);

// union types
let item: string | number;
item = "jon";
item = 400;

type stringNum = (string | number)[];
let arr: stringNum = [];
arr.push(10, "jon");
console.log(arr);

// type User = {
//   name: string;
//   age: number;
//   city: string;
//   address: {
//     country: string;
//     strName: string;
//     hausNumber: number;
//   };
// };
// const getUser = (id: string): User | null => {
//   // fetch user from db
//   return {
//     name: "jon",
//     age: 12,
//     city: "lagos",
//     address: {
//       country: "Nigeria",
//       strName: "123 street",
//       hausNumber: 23,
//     },
//   };
// };

// discriminating union.

type UserDetails = {
  username: string;
  id: string;
};
type Res =
  | { status: "success"; data: UserDetails }
  | { status: "error"; error_msg: string }
  | { status: "pending"; expiry_date: Date };
let response: Res = {
  status: "pending",
  expiry_date: new Date("2025-12-31"),
};
console.log(response);

//  intersection type

type User = {
  name: string;
  age: number;
  city: string;
};
type Address = {
  country: string;
  strName: string;
  houseNumber: number;
};

type UserInfo = User & Address;
const user: UserInfo = {
  name: "jon",
  age: 12,
  city: "lagos",
  country: "Nigeria",
  strName: "123 street",
  houseNumber: 23,
};
// literal types
let course: "js" | "css" | "html" = "css";
course = "html";

type User1 = {
  name: string;
  age: number;
  email?: string; // optional property
  address: {
    street: string;
    city: string;
    country: string;
  };
};
const user2: User1 = {
  name: "jon",
  age: 55,
  address: {
    street: "123 street",
    city: "lagos",
    country: "Nigeria",
  },
};
type Key = "age" | "name" | "address";

let key: Key = "age";
let value = user2[key];
console.log(value);

// any type
let number: any = "4";
number = Boolean(4);
console.log(number);

// type assertion

const element: HTMLElement | null = document.getElementById(
  "app"
) as HTMLElement;

console.log(element);

// interface

interface UserInterface {
  name: string;
  age: number;
  city: string;
}
interface Userproto extends UserInterface {
  email: string;
}

const user3: Userproto = {
  name: "jon",
  age: 55,
  city: "lagos",
  email: "jon@example.com",
};

// type generics

// const getRandom = (arr: number[] | string[]): number | string => {
//   const random = arr[Math.floor(Math.random() * arr.length)];
//   return random;
// };
// function getRandom<Type>(arr: Type[]): Type {
//   return arr[Math.floor(Math.random() * arr.length)];
// }
const getRandom = <Type>(arr: Type[]): Type =>
  arr[Math.floor(Math.random() * arr.length)];
const fruits = ["mango", "banana", "pawpaw"];
const numbers = [1, 2, 3];

getRandom<string>(fruits);
let randomNumber = getRandom<number>(numbers);
console.log(randomNumber);

interface StorageItem<T> {
  key: string;
  data: T;
}

const itemsToStore: StorageItem<string> = {
  key: "fruit",
  data: "mango",
};

type StorageItem2<Data, Key> = {
  key: Key;
  data: Data;
};

const itemsToStore2: StorageItem2<{ name: string }, string> = {
  key: "number",
  data: { name: "" },
};

type MyArray<T> = T;

let num: MyArray<{ name: string }> = { name: "jon" };

console.log(num);

// utility types

type User4 = {
  id: string;
  username: string;
  email: string;
  password: string;
  age: number;
};
// type UserWithoutPassword = Pick<User4, "id" | "username" | "email" | "age">;
type UserWithoutPassword = Omit<User4, "password">;
type Useroptional = Partial<User4>;
type userRequired = Required<User4>;
