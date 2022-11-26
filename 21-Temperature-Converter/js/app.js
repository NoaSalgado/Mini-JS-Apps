const celsiusInpunt = document.querySelector("#celsius");
const farenheitInput = document.querySelector("#farenheit");
const kelvinInput = document.querySelector("#kelvin");
const inputs = document.querySelectorAll("input");

const convertToCelsius = (temperature, scale) => {
  let celsius;
  if (scale === "farenheit") {
    celsius = (5 / 9) * (temperature - 32);
  } else if (scale === "kelvin") {
    celsius = temperature - 273;
  }
  return celsius.toFixed(1);
};

const convertToFarenheit = (temperature, scale) => {
  let farenheit;
  if (scale === "celsius") {
    farenheit = (9 / 5) * temperature + 32;
  } else if (scale === "kelvin") {
    farenheit = (9 / 5) * (temperature - 273) + 32;
  }
  return farenheit.toFixed(1);
};

const convertToKelvin = (temperature, scale) => {
  let kelvin;
  if (scale === "celsius") {
    kelvin = temperature + 273;
  } else if (scale === "farenheit") {
    kelvin = (5 / 9) * (temperature - 32) + 273;
  }
  return kelvin.toFixed(1);
};

//Inputs event
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const temperature = parseInt(e.target.value);
    const scale = e.target.id;

    if (isNaN(temperature)) {
      inputs.forEach((input) => (input.value = ""));
      return;
    }

    if (scale === "celsius") {
      farenheitInput.value = convertToFarenheit(temperature, scale);
      kelvinInput.value = convertToKelvin(temperature, scale);
    } else if (scale === "farenheit") {
      celsiusInpunt.value = convertToCelsius(temperature, scale);
      kelvinInput.value = convertToKelvin(temperature, scale);
    } else if (scale === "kelvin") {
      celsiusInpunt.value = convertToCelsius(temperature, scale);
      farenheitInput.value = convertToFarenheit(temperature, scale);
    }
  });
});
