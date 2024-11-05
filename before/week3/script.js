console.log("Hello, JS");
console.log("เริ่มเรียนรู้ JS กันเลย");

let title = "JavaScript";
console.log(title);

let firstname = "Natnaphat";
let age = 43;
let my_gpa = 3.25;

console.log(age);
age = 44;
console.log(age);

console.log(2023 - age);

const thisYear = 2023;
const birthYear = 2003;
console.log("I am " + thisYear - birthYear);

console.log("My birthyear is " + birthYear);
console.log("I am " + (thisYear - birthYear));

const Lastname = "Hengsathanakul";
console.log("My name is " + firstname + " " + Lastname + ".");

let scroe = 14;

console.log(
  "Hello \n\
    World"
);

console.log("I'm " + firstname + " " + Lastname + ".");
console.log(`I'm ${firstname} ${Lastname}.`);

const ageMax = 20;

if (ageMax >= 18) {
  console.log("He can drive a car.");
} else {
  console.log("He can't drive a car.");
}

const yrMoney = 75;
if (yrMoney >= 110) {
  console.log("Yes");
} else {
  console.log("You need to add another " + (110 - yrMoney) + " baht");
}

let stampPrice = 30;
let pillowPrice = stampPrice * 50 + 1;
let emmaStamp = 33 * 30;

if (emmaStamp >= pillowPrice) {
  console.log("emma got a pillow");
} else {
  console.log(
    "emma need to spend more money " +
      (pillowPrice - emmaStamp) +
      " baht to buy a piilow"
  );
}

console.log(typeof yrMoney);
console.log(typeof firstname);
console.log(typeof 3.1425);

age = 23;
console.log(thisYear - age);
console.log(thisYear + age);
const strYear = "2023";
console.log(strYear + age);
console.log(strYear - age);

console.log(Number(strYear) + age);
console.log(Number(firstname));
console.log(typeof NaN);
console.log(Number(strYear), strYear);

console.log("I am" + 18 + "year old");
console.log("2023" - 23);
console.log("2023" - "23" - 23); //202323 -23
console.log("14" * "7");
console.log("44" / "2");

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

if (firstname) {
  console.log("He has a name");
}
const noname = "";
console.log(Boolean);

/*โปรแกรม JavaScript เพื่อตรวจสอบว่าบุคคลหนึ่งสามารถเข้าชมสวนสนุกได้หรือไม่ โดยมีเงื่อนไขดังนี้:

อายุ age: ต้องมีอายุไม่น้อยกว่า 12 ปี และไม่เกิน 65 ปี
ส่วนสูง height: ต้องมีส่วนสูงไม่ต่ำกว่า 140 ซม.
ตั๋ว hasTicket: ต้องมีตั๋วเข้าชม
ให้สร้างตัวแปรเพื่อจำลองอายุ, ส่วนสูง, และสถานะการมีตั๋วของบุคคล และใช้ if statement ร่วมกับ boolean operators เพื่อตรวจสอบว่าบุคคลนั้นตรงตามเงื่อนไขทั้งหมดหรือไม่
ถ้าตรงตามเงื่อนไขทั้งหมดให้แสดงข้อความ "Welcome to the amusement park!" แต่ถ้าไม่ตรงตามเงื่อนไขใดเงื่อนไขหนึ่งให้แสดงข้อความ "Sorry, you cannot enter the amusement park."*/

age = 25;
const height = 165;
const hasTicket = true;

if (age >= 12 && age <= 65 && height >= 140 && hasTicket) {
  console.log("Welcome to the amusement park!");
} else {
  console.log("Sorry, you cannot enter the amusement park.");
}

const day = "wednesday";
switch (day) {
  case "monday":
    console.log("to day is monday");
    break;
  case "tuesday":
    console.log("I 😍 tuesday");
    "";
    break;
  default:
    console.log("Not a vaild day");
}

function convertemp(value, unit) {
  let result;

  switch (unit) {
    case "celsius":
      result = {
        fahrenheit: (value * 9) / 5 + 32,
        kelvin: value + 273.15,
      };
      break;

    case "fahrenheit":
      result = {
        celsius: ((value - 32) * 5) / 9,
        kelvin: ((value - 32) * 5) / 9 + 273.15,
      };
      break;

    case "kelvin":
      result = {
        celsius: value - 273.15,
        fahrenheit: ((value - 273.15) * 9) / 5 + 32,
      };
      break;

    default:
      result = "invalid unit";
      break;
  }

  return result;
}
console.log(convertemp(23, "celsius"));

function groot() {
  console.log("I am groot");
}
groot();

function calcAge(b_Year) {
  return 2024 - b_Year;
}
const age1 = calcAge2(1999);
console.log(age1);

const calage2 = function (b_Year) {
  return 2024 - b_Year;
};

const age2 = calcAge(1999);
console.log(age2);

const calage3 = (b_Year) => 2024 - b_Year;
const age3 = calage3(1999);
console.log(age3);

const calcCircmference = (redius) => 2 * Math.PI * radius;
const calcarea = (radius) => Math.PI * radius * radius;

const printCirclecalculations = (radius) => {
  const calcCircmference = calcCircmference(radius);
};
32;
