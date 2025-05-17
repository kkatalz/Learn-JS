// Blog Post Object
let blogPost = {
  title: "Harry Potter",
  body: "tatatatta",
  author: "tatata",
  views: 2009,
  comments: [
    { author: "Maclaire Mc.Coffee", body: "Tatatatta" },
    { author: "Maclaire Mc.Coffee", body: "Tatatatta" },
  ],
  isLive: true,
};

console.log(blogPost);

// Constructor function for Blog Post Object

function BlogConstructor(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let blogPostConst = new BlogConstructor("McMurf", "nanna", "TAtta");
console.log(blogPostConst);
