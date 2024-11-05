document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.getElementById("container");
  const bt = document.createElement("button");
  const table = document.getElementById("myTable");
  const name = document.querySelector("name");
  const age = document.querySelector("name");

  bt.textContent = "Click me";
  bt.id = "myButton";
  container.appendChild(bt);

  bt.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const myRow = table.insertRow();
    const cel1 = myRow.insertCell(0);
    const cel2 = myRow.insertCell(1);
    // cel1.textContent = "Natnaphat";
    // cel2.textContent = "20";
    cel1.textContent = name.value;
    cel2.textContent = age.value;
  });
});
