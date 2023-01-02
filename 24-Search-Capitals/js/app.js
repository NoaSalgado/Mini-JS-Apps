const countries = [];
const form = document.querySelector('form');
const input = document.querySelector('input');
const countriesList = document.querySelector('ul');
const notFoundText = document.querySelector('p');

const getCountries = async () => {
  await fetch('https://restcountries.com/v2/all')
    .then((response) => response.json())
    .then((data) => data.forEach((element) => countries.push(element)));
};

window.addEventListener('load', getCountries);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input.value.trim()) {
    return;
  }
  userSearch = input.value.toLocaleLowerCase();
  input.value = '';
  countriesList.innerHTML = '';
  notFoundText.classList.remove('display');
  const matchingCountries = countries.filter((country) =>
    country.name.toLocaleLowerCase().includes(userSearch)
  );

  if (matchingCountries.length) {
    matchingCountries.forEach((country) => {
      const countryElement = document.createElement('li');
      countryElement.innerHTML = `<span>${country.name}</span>: ${country.capital}`;
      countriesList.append(countryElement);
    });
  } else {
    notFoundText.classList.add('display');
  }
});
