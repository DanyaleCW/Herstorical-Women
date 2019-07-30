let rudolph = {
    name: "Wilma Glodean Rudolph",
    image: '<img src="rudolph.jpg" alt="Wilma Rudolph holding her medals" class="img-fluid"/>',
    imageCit: "Photographer Unknown",
    quote: '&#8220;My doctor told me I would never walk again. <br> My mother told me I would. <br> I believed my mother&#8221;',
    title: "Olympic Champion and Civil Rights Pioneer",
    born: "June 23, 1940 - November 12, 1994",
    awardsHonors: ["First American Woman to win three Olympic gold medals",
    "1956 Bronze medal, 4 X 100-meter relay, Olympic Games, Melbourne, Australia", "1960 World record in the 200-meter race at the Olympic Trials at Texas Christian University", "1960 Gold medals, 100-meter dash,  200-meter dash, and 4 × 100-meter relay, Olympic Games, Rome, Italy", "1961 Received Sullivan Award and Associated Press Female Athlete of the Year Award", "1962 Received Babe Didrikson Zaharias Award", "1973 Inducted into Black Athletes Hall of Fame", "1974 Inducted into National Track and Field Hall of Fame", "1980 Inducted into Women's Sports Foundation Hall of Fame", "1983 Inducted into U.S. Olympic Hall of Fame", "1987 Received National Collegiate Athletic Association's Silver Anniversary Award", "1993 Honored as one of the National Sports Awards 'Great Ones'"],
    about: ["In 1960, Wilma Rudolph became the first American woman to win three gold medals in track and field at a single Olympics. This is even more impressive if you consider she suffered from several early childhood illnesses, including pneumonia and scarlet fever, and contracted infantile paralysis (caused by the polio virus) at the age of four. She recovered from polio, but lost strength in her left leg and foot. Physically disabled for much of her early life, Rudolph wore a leg brace until she was eight years old.", "Eight years later, at the age of sixteen, she attended the 1956 Olympics and won her first Olympic medal. She went on to compete in the 1959 Pan America games and the 1960 Olympics where she became the first American woman to win three gold medals in a single Olympiad.", "Rudolph is remembered as one of the fastest women in track and as a source of great inspiration for generations of athletes. She once stated, 'Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose. Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday.' In 2004, the United States Postal Service honored the Olympic champion by featuring her likeness on a 23-cent stamp. Wilma Rudolph died from complications of brain and throat cancer in 1994."
    ],
    foundation: "Please visit the <a href='https://www.womenssportsfoundation.org/programs/awards/wilma-rudolph-courage-award/' target=_blank>Women's Sports Foundation</a> to find out about and donate to the William Rudolph Courage Award.",
    picture: ['<a href="https://www.gettyimages.com/photos/wilma-rudolph?family=editorial&sort=mostpopular&phrase=wilma%20rudolph" target=_blank>Getty Images</a>'],
    information: ['<a href="https://www.biography.com/people/wilma-rudolph-9466552"  target=_blank>Biography</a>',
    '<a href="http://sports.jrank.org/pages/4098/Rudolph-Wilma-Awards-Accomplishments.html" target=_blank>JRank</a>',
    '<a href="https://en.wikipedia.org/wiki/Wilma_Rudolph" target=_blank>Wikipedia</a>'],

    fullName: function () {
        return this.name;
    },
    images: function () {
        return this.image;
    },
    imageCit: function () {
        return this.imageCit;
    },
    quotes: function () {
        return this.quote;
    },
    titles: function () {
        return this.title;
    },
    dates: function () {
        return this.born;
    },
    awards: function () {
        return this.awardsHonors[0] + "<br>" + this.awardsHonors[1] + "<br>" + this.awardsHonors[2] + "<br>" + this.awardsHonors[3] + "<br>" + this.awardsHonors[4] + "<br>" + this.awardsHonors[5] + "<br>" + this.awardsHonors[6] + "<br>" + this.awardsHonors[7] + "<br>" + this.awardsHonors[8] + "<br>" + this.awardsHonors[9] + "<br>" + this.awardsHonors[10] + " <br>" + this.awardsHonors[11];
    },
    abouts: function () {
        return this.about[0] + " <br>" + "<br>" + this.about[1] + "<br>" + "<br>" + this.about[2];
    },
    foundations: function () {
        return this.foundation;
    },
    pictures: function () {
        return this.picture[0];
    },
    informations: function () {
        return  this.information[0] + "<br>" + " " + this.information[1] + "<br>" + " " + this.information[2];
    }
};

// Display data from the object:
document.getElementById("name").innerHTML = rudolph.fullName();
document.getElementById("image").innerHTML = rudolph.images();
document.getElementById("image-cit").innerHTML = rudolph.imageCit();
document.getElementById("quote").innerHTML = rudolph.quotes();
document.getElementById("title").innerHTML = rudolph.titles();
document.getElementById("born").innerHTML = rudolph.dates();
document.getElementById("awards").innerHTML = rudolph.awards();
document.getElementById("about").innerHTML = rudolph.abouts();
document.getElementById("foundation").innerHTML = rudolph.foundations();
document.getElementById("pictures").innerHTML = rudolph.pictures();
document.getElementById("information").innerHTML = rudolph.informations();
