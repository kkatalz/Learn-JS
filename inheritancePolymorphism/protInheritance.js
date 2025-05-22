function HtmlElement() {
  this.click = function () {
    return console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

function HtmlSelectElement(...items) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
