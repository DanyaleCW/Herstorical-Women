


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

var cooper = new Person(
    "J. California Cooper",
    "Some people don't even recognize real love when it comes without being called or sought.",
    "Playwright and author",
    "Nov 10, 1931-September 20, 2014",
    "American Book Award, James Baldwin Writing Award, San Francisco’s Black Playwright Award, and Literary Lion Award from the American Library Association.", ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Well we are movin' on up to the east side. To a deluxe apartment in the sky. So get a witch's shawl on a broomstick you can crawl on. Were gonna pay a call on the Addams Family.  And if you threw a party - invited everyone you knew.You would see the biggest gift would be from me and the card attached would say thank you for being a friend.They call him Flipper Flipper faster than lightning.No one you see is smarter than he."
    ],
    "<a href='https://www.thriftbooks.com/a/j-california-cooper/203707/' target=_blank>Thrift Books</a>",
    '<a href="https://aalbc.com/authors/author.php?author_name=J.+California+Cooper" target=_blank>https://aalbc.com/authors/author.php?author_name=J.+California+Cooper</a>',
    '<a href = "https://en.wikipedia.org/wiki/J._California_Cooper" target = _blank > https://en.wikipedia.org/wiki/J._California_Cooper</a>'
);

document.getElementById("name").innerHTML = cooper.name;
document.getElementById("quote").innerHTML = cooper.quote;
document.getElementById("title").innerHTML = cooper.title;
document.getElementById("born").innerHTML = cooper.born;
document.getElementById("awards").innerHTML = cooper.awards;
document.getElementById("about").innerHTML = cooper.about[0] + "<br>" + "<br>" + cooper.about[1];
document.getElementById("foundation").innerHTML = "Please visit" + " " + cooper.foundation + " to purchase her books and plays."
document.getElementById("pictures").innerHTML = cooper.pictures;
document.getElementById("information").innerHTML = cooper.information;
