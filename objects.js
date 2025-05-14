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

//Factory function
function adrressFactory(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let addressFactory = adrressFactory("Saint Laures, 12", "Kyiv", 1233);

// Constructor function
function AddressConstructor(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let addressConstructor1 = new AddressConstructor("b", "b", 12);
let addressConstructor2 = new AddressConstructor("b", "b", 12);
let addressConstructor3 = addressConstructor1;

console.log(areEqual(addressConstructor1, addressConstructor2));
console.log(areSame(addressConstructor1, addressConstructor3));

function areEqual(address1, address2) {
  for (let key in address1) {
    if (address1[key] !== address2[key]) return false;
  }
  return true;
}

function areSame(address1, address2) {
  return address1 === address2;
}

// Blog Post Object
// let blogPost = {
//   title: "Harry Potter",
//   body: "tatatatta",
//   author: "tatata",
//   views: 2009,
//   comments: [
//     { author: "Maclaire Mc.Coffee", body: "Tatatatta" },
//     { author: "Maclaire Mc.Coffee", body: "Tatatatta" },
//   ],
//   isLive: true,
// };
// console.log(blogPost);

// Constructor function for Blog Post Object

function BlogConstructor(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let blogPost = new BlogConstructor("McMurf", "nanna", "TAtta");
console.log(blogPost);

// Price Range Object
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPrice: 0, maxPrice: 10 },
  { label: "$$", tooltip: "Moderate", minPrice: 11, maxPrice: 20 },
  { label: "$$$", tooltip: "Expensive", minPrice: 21, maxPrice: 50 },
];

let restaurants = [{ averagePerPerson: 5 }];
