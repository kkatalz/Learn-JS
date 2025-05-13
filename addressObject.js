const address = {
  street: "Saint Laures, 12",
  city: "New-York",
  zipCode: 167898,
};

function showAddress(addressList) {
  for (let key in addressList) {
    console.log(key, addressList[key]);
  }
}

// showAddress(address);

//Factory function
function adrressFactory(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let addressFactory = adrressFactory("Saint Laures, 12", "Kyiv", 1233);
// console.log(addressFactory);

// Constructor function
function AddressConstructor(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let addressConstructor = new AddressConstructor(
  "Saint Laures, 12",
  "Kyiv",
  1233
);
console.log(addressConstructor);
