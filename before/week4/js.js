const data = [
  { id: 1, value: 10 },
  { id: 2, value: 5 },
  { id: 3, value: 9 },
  { id: 4, value: 12 },
  { id: 5, value: 6 },
];
//สร้าง arr ที่มี เเต่ value จากนั้นให้กรองเฉพาะค่าที่ หารด้วย 3 ลงเเล้ว เเล้วจึงหาผลรวมขอวผลที่ได้
const arr = data.map((item) => item.value);
console.log(arr);
const mod3 = arr.filter((value) => value % 3 === 0);
console.log(mod3);
const summod3 = mod3.reduce((acc, cur) => acc + cur, 0);
console.log(summod3);

const result = data
  .map((item) => item.value)
  .filter((value) => value % 3 === 0)
  .reduce((acc, cur) => $[result]);

console.log(result);
