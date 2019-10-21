let streetNumber = ["23", "17", "39", "13", "11", "71"];

let streetName = [
  "King Fahad Road",
  "King Khalid Road",
  "King Abdullah Road",
  "Prince Mohammed bin Abdulaziz",
  "Madinah Street",
  "Olaya Street"
];

let cityName = ["Riyadh", "AlKhober", "Taif", "Hail", "Qassim", "Abha"];

let regionName = [
  "Central Region",
  "Eastern Region",
  "Makkah Region",
  "Hail Region",
  "Qassim Region",
  "Assir Region"
];

let zipCode = ["11314", "13479", "12647", "16284", "16984", "17335"];

function createAddress(ad) {
  return ad[Math.floor(Math.random() * 6)];
}

let newAddress = `${createAddress(streetNumber)} ${createAddress(
  streetName
)}, ${createAddress(cityName)} ${createAddress(regionName)}, ${createAddress(
  zipCode
)}`;

console.log(newAddress);