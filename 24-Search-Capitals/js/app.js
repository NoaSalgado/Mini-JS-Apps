const countries = [];
const form = document.querySelector('form');
const input = document.querySelector('input');
const countriesList = document.querySelector('ul');

const getCountries = async () => {
  await fetch('https://restcountries.com/v2/all')
    .then((response) => response.json())
    .then((data) => data.forEach((element) => countries.push(element)));
};

window.addEventListener('load', getCountries);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  userSearch = input.value.toLocaleLowerCase();
  countries.forEach((country) => {
    if (country.name.toLocaleLowerCase().includes(userSearch)) {
      const countryElement = document.createElement('li');
      countryElement.innerHTML = `<span>${country.name}</span>: ${country.capital}`;
      countriesList.append(countryElement);
    }
  });
});
