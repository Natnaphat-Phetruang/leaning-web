document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].valu;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const interests = Array.from(
      form.querySelectorAll('input[name="gender"]:checked')
    ).map((checkbox) => checkbox.valu);
    const country = form.elements["country"].value;

    resultDiv.innerHTML = `<p>Name: ${name}</p>
    <p>Gender ${gender}</p>
    <p>Interests: ${interests.join(",")} </p>
    <p>Country: ${country}</p>`;
  });
});
