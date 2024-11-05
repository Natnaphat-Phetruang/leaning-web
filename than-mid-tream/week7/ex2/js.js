const container = document.getElementById("container");
const img = document.createElement("img");

// img.src = "https://mpics.mgronline.com/pics/Images/556000004929401.JPEG";
// img.alt = "อุลต้าเเมน";
// container.appendChild(img);
const fruits = ["Apple", "Banana", "Mango", "strwbery"];
const fruitslist = document.getElementById(fruitslist);

fruits.forEach((fruits) => {
  const li = document.createElement("li");
  li.textContent = fruits;
  fruitslist.appendChild(li);
});
