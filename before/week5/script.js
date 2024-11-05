document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elments["name"].value;
    const email = form.elments["email"].value;

    resultDiv.innerHTML = `<p>Name: ${name}</p><p>Name: ${email}</p>`;
  });
});
