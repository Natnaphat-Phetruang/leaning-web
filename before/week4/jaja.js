// for (let i = 0; i <= 10; i++) {
//   console.log(`cont number ${i}`);
// }

const numarr = [1, 2, 3, 4, 5];
// for (let i = 0; i < numarr.length; i++) {
//   console.log(`ยกน้ำหนัก ครั้งที่ ${numarr[i]}`);
// }
// let cont = 0;
// while (cont < numarr.length) {
//   console.log(`cont #${numarr[cont]}`);
//   cont++;
// }
// numarr.forEach(){
//     function(num){console.log(`show num${num}`);}
// }
// numarr.forEach(num) => console.log(`num=> ${num}`));

// const person = {
//   Name: "jason",
//   Age: 20,
//   gender: man,
// };
// for (const key in person) {
//   // console.log(key);
//   console.log(`${key} => ${person[key]}`);
// }

// for (const num in numarr) {
//   console.log(num);
// }

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumFor = 0;
// let somfForEach = 0;
// let sumForfor = 0;
// let somfForOf = 0;
// for (let i = 0; i < numbers.length; i++);
// {
//   numbers[i] % 3 == 0 ? (sumFor += numbers[i]) : null;
// }
// numbers.forEach((num) =>
//   numbers[i] % 3 == 0 ? (sumForEach += numbers[i]) : null
// );
// for (const i in numbers) {
//   numbers[i] % 3 == 0 ? (sumForin += numbers[i]) : null;
// }
// for (const num in numbers) {
//   num % 3 == 0 ? (sumForOf += num) : null;
// }

// console.log(
//   `sumFor ${somfFor}``sumForEach ${somfForEach}``sumForin ${somfForin}``sumForfor ${somfForOf}`
// );

//map,reduce ,sort,filter
//ให้สร้าง sqrnumber[] ที่เอาเเต่ละค่าใน numbers มายกกำลังสอง
const sqrNumber = [];
// for (let i = 0; i < numarr.length; i++) {
//   sqrNumber = numarr[i] ** 2;
//   //   sqrNumber.push(number[i]*number[i]);
// }

// const sqrNumber = numarr.map(num) => {return num*num;

// }

//หาผบรสมขอวnumber

// const sumNum = numarr.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, 0);

// // console.log(sqrNumber);
// console.log(sqrNumber.reduce((acc, cur) => acc + cur));

const rndnumber = [1, 2, 3, 4, 5, 6, 7];

const sortednum = rndnumber.sort((a, b) => a - b);
console.log(sortednum);

const evenum = sortednum.filter((num) => num % 2 === 0);
console.log(evenum);
const data = [
  { id: 1, value: 10 },
  { id: 2, value: 60 },
  { id: 3, value: 30 },
];

// let arr = data.map((item) => item.value);
// console.log(arr);
// let mod3 = arr.filter((item) => item % 3 === 0);
// console.log(mod3);
// let sum3 = mod3.reduce((acc, cur) => acc + cur, 20);
// console.log(sum3);
// let arra = data.map((item) => item.value).filter((item) => item % 3 == 0).reduce((pre, next) => pre + next, 0);
// console.log(arra);
let result = data
  .map((item) => item.value)
  .filter((value) => value % 3 === 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(result);
