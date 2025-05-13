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

showAddress(address);
