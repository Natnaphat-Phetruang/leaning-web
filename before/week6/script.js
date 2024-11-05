const acc1={
    owner:"yaba yaba narok",
    user:"yuth",
    pss:"1111"
}
const acc2={
    owner:"yaba yaba yasokkapok",
    user:"wuho",
    pss:"2222"
}
const acc=[acc1 ,acc2]
//reduce suose filter map 
let cerrentAcc

const btnlogin = document.querySelector(".login_btn");
const inputLoginUser = document.querySelector(".login_input login_input--user");
const inputLoginPsw = document.querySelector(".pass_input pass_input--psw");
const IblWelcome = document.querySelector(".welcome");
let name = admin;
let pass = 1234;
acc
btnlogin.addEventListener("click", (e) => {
  e.preventDefault;
  const user = inputLoginUser.value;
  const pass = inputLoginPsw.value;

  cerrentAcc= acc.find((acc)=>acc.user===user);
  console.log(cerrentAcc);
  
  if(user ==="admin"&& pass==="1234"){
    IblWelcome.textContent = "ยินดีต้อนรับนะเว้ย" ${user};
    inputLoginUser.value = inputLoginPsw.value="";
  }
});
