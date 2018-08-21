var rudolph = {
    name: "Wilma Glodean Rudolph",
    image: '<img src="rudolph.jpg" alt="Wilma Rudolph holding her medals" class="img-fluid"/>',
    imageCitation: '<a href="https://janellenorman94.wordpress.com/2015/02/09/black-history-month-wilma-rudolph/" target=_blank>https://janellenorman94.wordpress.com/2015/02/09/black-history-month-wilma-rudolph/</a>',
    quote: 'My doctor told me I would never walk again. <br> My mother told me I would. <br> I believed my mother',
    description: "Olympic Champion",
    born: "June 23, 1940 - November 12, 1994",
    awardsHonors: ["First American Woman to win three Olympic gold medals",
        "1956 Bronze medal, 4 X 100-meter relay, Olympic Games, Melbourne, Australia", "1960 World record in the 200-meter race at the Olympic Trials at Texas Christian University", "1960 Gold medals, 100-meter dash,  200-meter dash, and 4 × 100-meter relay, Olympic Games, Rome, Italy", "1961 Received Sullivan Award and Associated Press Female Athlete of the Year Award", "1962 Received Babe Didrikson Zaharias Award", "1973 Inducted into Black Athletes Hall of Fame", "1974 Inducted into National Track and Field Hall of Fame", "1980 Inducted into Women's Sports Foundation Hall of Fame", "1983 Inducted into U.S. Olympic Hall of Fame", "1987 Received National Collegiate Athletic Association's Silver Anniversary Award", "1993 Honored as one of the National Sports Awards 'Great Ones'"],
    about: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Spare ribs pork chop venison short loin meatloaf tail andouille alcatra ribeye meatball landjaeger sausage pork belly burgdoggen shoulder. Ham hock drumstick swine fatback flank t-bone. Picanha ham ham hock bresaola. Buffalo ground round jowl, doner tail boudin burgdoggen shoulder shank."],
    foundation: "Please visit the  <a href='https://www.womenssportsfoundation.org/programs/awards/wilma-rudolph-courage-award/'>Women's Sports Foundation</a> to find out about and donate to the William Rudolph Courage Award.",
    picture: ['<a   href="http://robinmork.com/2017/05/lioness-project-wilma-rudolph/">http://robinmork.com/2017/05/lioness-project-wilma-rudolph/</a>',
        '<a href="http://sports.jrank.org/pages/4098/Rudolph-Wilma-Awards-Accomplishments.html">http://sports.jrank.org/pages/4098/Rudolph-Wilma-Awards-Accomplishments.html</a>',
        '<a href="https://myhero.com/W_rudolph_dnhs_US_2010_ul  ">https://myhero.com/W_rudolph_dnhs_US_2010_ul</a>'],
    information: '<a href="https://www.biography.com/people/dolores-rudolph-188850"  target=_blank>https://www.biography.com/people/dolores-rudolph-188850</a>',

    fullName: function () {
        return this.name;
    },
    images: function () {
        return this.image;
    },
    imageCitations: function () {
        return this.imageCitation;
    },
    quotes: function () {
        return this.quote;
    },
    descriptions: function () {
        return this.description;
    },
    dates: function () {
        return this.born;
    },
    awards: function () {
        return this.awardsHonors[0] + "<br>" + this.awardsHonors[1] + "<br>" + this.awardsHonors[2] + "<br>" + this.awardsHonors[3] + "<br>" + this.awardsHonors[4] + "<br>" + this.awardsHonors[5] + "<br>" + this.awardsHonors[6] + "<br>" + this.awardsHonors[7] + "<br>" + this.awardsHonors[8] + "<br>" + this.awardsHonors[9] + "<br>" + this.awardsHonors[10] + " <br>" + this.awardsHonors[11];
    },
    abouts: function () {
        return this.about[0] + " <br>" + "<br>" + this.about[1] + "<br>";
    },
    foundations: function () {
        return this.foundation;
    },
    pictures: function () {
        return "Pictures" + "<br>" + this.picture[0] + "<br>" + " " + this.picture[1] + "<br>" + " " + this.picture[2];
    },
    informations: function () {
        return "Information" + "<br>" + " " + this.information;
    }
};

// Display data from the object:
document.getElementById("name").innerHTML = rudolph.fullName();
document.getElementById("image").innerHTML = rudolph.images();
document.getElementById("image-cit").innerHTML = rudolph.imageCitations();
document.getElementById("quote").innerHTML = rudolph.quotes();
document.getElementById("description").innerHTML = rudolph.descriptions();
document.getElementById("born").innerHTML = rudolph.dates();
document.getElementById("awards").innerHTML = rudolph.awards();
document.getElementById("about").innerHTML = rudolph.abouts();
document.getElementById("foundation").innerHTML = rudolph.foundations();
document.getElementById("pictures").innerHTML = rudolph.pictures();
document.getElementById("information").innerHTML = rudolph.informations();