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
