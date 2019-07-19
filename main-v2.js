var quotes = ['cooper-quote.png', 'maeJemison.png'];

// var img = document.getElementById('imageToChange');
// img.addEventListener("onload", function() {
//   this.src = quotes[Math.floor(Math.random() * quotes.length)];
// });

function getQuotes(array, path) {
  path = path || 'Quotes/';
  var num = Math.floor(Math.random() * array.length);
  var img = array[num];
  var imgStr = '<img src=" ' + path + img + '" alt = "">';
  // document.getElementById('imageToChange'); document.write(imgStr); document.close();
}


function Person(name, quote, title, born, awards, about, foundation, pictures, information) {
    this.name = name;
    this.quote = quote;
    this.title = title;
    this.born = born;
    this.awards = awards;
    this.about = about;
    this.foundation = foundation;
    this.pictures = pictures;
    this.information = information;
}

let cooper = new Person(
    "J. California Cooper",
    "&#8220;Some people don't even recognize real love when it comes without being called or sought.&#8221;",
    "Playwright and Author",
    "Nov 10, 1931-September 20, 2014",
    "American Book Award, James Baldwin Writing Award, San Francisco’s Black Playwright Award, and Literary Lion Award from the American Library Association.",
    ["Joan Cooper, known by her pen name, J. California Cooper, was an American playwright and author. She wrote 17 plays and was named Black Playwright of the Year in 1978 for her play Strangers. She is an award-winning writer whose black female characters confront a world of indifference and betrayal, but find kinship there in unexpected places.",],
    ["<a href='https://www.thriftbooks.com/a/j-california-cooper/203707/' target=_blank>Thrift Books</a>", "<a href='https://www.goodreads.com/author/list/20702.J_California_Cooper' target=_blank>Good Reads</a>"],

    '<a href="https://aalbc.com/authors/author.php?author_name=J.+California+Cooper" target=_blank>https://aalbc.com/authors/author.php?author_name=J.+California+Cooper</a>',

    ['<a href = "https://en.wikipedia.org/wiki/J._California_Cooper" target = _blank > https://en.wikipedia.org/wiki/J._California_Cooper</a>', '<a href = "https://www.nytimes.com/2014/09/26/arts/j-california-cooper-award-winning-writer-dies-at-82.html" target = _blank > https://www.nytimes.com/2014/09/26/arts/j-california-cooper-award-winning-writer-dies-at-82.html</a>']
);

document.getElementById("name").innerHTML = cooper.name;
document.getElementById("quote").innerHTML = cooper.quote;
document.getElementById("title").innerHTML = cooper.title;
document.getElementById("born").innerHTML = cooper.born;
document.getElementById("awards").innerHTML = cooper.awards;
document.getElementById("about").innerHTML = cooper.about;
document.getElementById("foundation").innerHTML = "Please visit" + " " + cooper.foundation[0] + " " + " or" + " " + cooper.foundation[1] + " to purchase her books and plays."
document.getElementById("pictures").innerHTML = cooper.pictures;
document.getElementById("information").innerHTML = cooper.information[0] + "<br>" + cooper.information[1];
