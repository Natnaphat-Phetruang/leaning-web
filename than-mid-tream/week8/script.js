"use strict";

// const emptyspace = document.querySelector(".space");
// const html = `<h2>New Massage</h2><p> this is massage form script</p>`;

// emptyspace.insertAdjacentHTML("beforeend", html);
const countries = document.querySelector(".countries");

const getCountry = function (country) {
  console.log(country);
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();
  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const languages = Object.values(data.languages).join(", ");
    const currencyKeys = Object.keys(data.currencies);
    const currencies = currencyKeys
      .map(
        (currency) =>
          `${data.currencies[currency].name} (${data.currencies[currency].symbol})`
      )
      .join(", ");

    const html = `<article class="country">
<img
  src="${data.flags.png}"
  alt="ไทย"
  class="conutry_img"
/>
<div class="country_data">
  <h3 class="country_name">${data.name.common}</h3>
  <h4 class="country_region">${data.region}</h4>
<p class="country_row"><span>🥠</span>${languages}</p>
<p class="country_row"><span>💵</span>${currencies}</p>
<p class="country_row"><span>💵</span>${data.borders ? data.borders : "---"}</p>
<p class="country_row"><span>💵</span>${data.population}</p>
<p class="country_row"><span>💵</span>${data.capital}</p>
</div>
</div>

</article>`;

    countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};
getCountry("japan");
getCountry("usa");
getCountry("thailand");
