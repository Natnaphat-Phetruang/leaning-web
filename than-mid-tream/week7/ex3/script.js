// //เชื่อม form,name,email,password,confirm
// //ดักจับ event summit ใน form
// //เขียน funtion checkpassword() เช็ค password เท่ากับ
// //confirm หรือไม่ ถ้าไม่ ให้เเสดง รหัสผ่านไม่่ตรง
// document.addEventListener("DOMContentLoaded", (e) => {
//   const Username = document.querySelector("username");
//   const Email = document.querySelector("email");
//   const Password = document.querySelector("password");
//   const Confirm = document.querySelector("confirm");
//   const form = document.getElementById("myForm");

//   form.addEventListener("summit", (e) => {
//     e.preventDefault();
//     checkpassword(Password, confirm);
//     checkUsername(6,10)
//   });
//   const checkpassword = (Password, Confirm) => {
//     if (Password !== Confirm) {
//       const confirmcontrol = Confirm.parentElement;
//       confirmcontrol.className = "frmDiv eror";
//       const small = confirmcontrol.querySelector("small");
//       small.innerText = "Eror massage";
//     } else {
//       console.log(wrong);
//     }
//   };
// });
// const checkUsername = (min,max) => {
//     //
//     //
//     if(Username.valule.length < min )
//     showErrMessage("ชื่อต้องยาวกว่า 6 ตัวอักษร")
// }else if {
//     (Username.valule.length > max )
//     showErrMessage("ชื่อต้องไม่เกิน 10 ตัวอักษร")
// };

const bt = document.querySelector(".bt");
const form = document.querySelector("#myForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

// function checkPassword(password, confirm){
//     if(password === confirm){
//         return true;
//     }
//     return false;
// }

function checkUsername(min, max) {
  if (username.value.length < min || username.value.length > max) {
    showErrMessage("Username must be 7 - 9", username);
  }
}

function checkPassword(password, confirm) {
  if (password !== confirm) {
    showErrMessage("Wrong password", confirm);
  }
}

function showErrMessage(message, input) {
  const formControl = input.parentElement;
  formControl.className = "frmDiv error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername(6, 10);
  checkPassword(password, confirm);
});

// if(checkPassword(password.value, confirm.value)){
//     console.log(password.value, confirm.value);
//     password_error.style.visibility = "hidden";
//     confirm_error.style.visibility = "hidden";
// }
// else{
//     password_error.style.visibility = "visible";
//     confirm_error.style.visibility = "visible";
// }
