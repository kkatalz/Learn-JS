function HtmlElement() {
  this.click = function () {
    return console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  };

  this.render = function () {
    let options = [];
    for (let item of this.items) {
      options += `\n\t<option>${item}</option>`;
    }
    return `<select ${options}\n</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src = "${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://"),
];

for (let element of elements) console.log(element.render());
