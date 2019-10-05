//when user clicks returns to main html page
function gohome() {
  window.location.href = "../main.html"
}

function next() {
  window.location.href = "./Cooper/cooper.html"
}

// When the user scrolls down 95px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("footer").style.display = "block";
  } else {
    document.getElementById("footer").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --------NAVIGATION TEMPLATE MAIN PAGE---------
class MyTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container">
    <div class="btn-toolbar">
      <div class="btn-group btn-group-sm">
        <button class="btn btn-default"><a href="
        Coming-Soon/ComingSoon.html">A</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">B</a></button>
        <button class="btn btn-default"><a href="./cpage/c.html">C</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">D</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">E</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">F</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">G</a></button>
        <button class="btn btn-default"><a href="./hpage/h.html">H</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">I</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">J</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">K</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">L</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">M</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">N</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">O</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">P</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">Q</a></button>
        <button class="btn btn-default"><a href="./rpage/r.html">R</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">S</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">T</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">U</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">V</a></button>
        <button class="btn btn-default"><a href="./wpage/w.html">W</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">X</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">Y</a></button>
        <button class="btn btn-default"><a href="Coming-Soon/ComingSoon.html">Z</a></button>
    </div>
  </div>
</div>`;
  }
}

customElements.define('nav-template', MyTemplate);

// --------NAVIGATION TEMPLATE LETTER PAGES---------
class LettersTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML =`<div class="container">
    <div class="btn-toolbar">
      <div class="btn-group btn-group-sm">
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">A</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">B</a>
        </button>
        <button class="btn btn-default">
          <a href="../cpage/c.html">C</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">D</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">E</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">F</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">G</a>
        </button>
        <button class="btn btn-default">
          <a href="../hpage/h.html">H</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">I</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">J</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">K</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">L</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">M</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">N</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">O</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">P</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">Q</a>
        </button>
        <button class="btn btn-default">
          <a href="../rpage/r.html">R</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">S</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">T</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">U</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">V</a>
        </button>
        <button class="btn btn-default">
          <a href="../wpage/w.html">W</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">X</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">Y</a>
        </button>
        <button class="btn btn-default">
          <a href="../Coming-Soon/ComingSoon.html">Z</a>
        </button>
        <button class="btn btn-default">
          <a id="home" href="javascript:gohome();">Home</a>
        </button>
      </div>
    </div>
  </div>`;
  }
}

customElements.define('nav-letters', LettersTemplate);

// -------------BODY TEMPLATE-----------------

class BodyTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="button">
  <button type="button" class="btn btn">
  <a id="home" href="javascript:gohome();">Home</a>
  </button>
</div>
 <br><br>
<p id="demo"></p>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4">
        <div id="image"></div>
        <div class="desc" id="image-cit"></div>
      </div>

    <div class="col-sm-8">
      <h1 id="name"></h1>
      <p id="quote"></p>
    </div>
    </div>
  </div>
  <br>
  <div class="container-fluid">
    <p id="title"></p>
    <h3>Sunrise - Sunset</h3>
      <p id="born"></p>

  <h3>Awards & Honors</h3>
    <p id="awards"></p>

  <h3>About</h3>
    <p id="about"></p>

  <h4 id="foundation"></h4><br>
  <h5>Citation Information</h5>
  <h6>Pictures</h6>
    <p id="pictures"></p><br>
  <h6>Information</h6>
    <p id="information"></p>`;
  }
}

customElements.define('body-template', BodyTemplate);

// ------------FOOTER INDIVIDUAL PAGES----------

class FooterTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer id="foot-cont">
    <a target="_blank" href="https://github.com/DanyaleCW">
    <i class="fa fa-github-alt" style="font-size:36px"></i>
    </a>
    <a target="_blank" href="https://twitter.com/DanyaleCWalker">
    <i class="fa fa-twitter w3-hover-opacity" style="font-size:36px"></i>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/danyale-c-walker-b9385816">
    <i class="fa fa-linkedin w3-hover-opacity" style="font-size:36px"></i>
    </a>

    <!-- <button class="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button> -->
    <p>Written, Coded, and Designed by Danyale C. Walker</p>

    <button onclick="topFunction()" id="footer" title="Go to top">Top</button>
</footer>`;
  }
}

customElements.define('footer-template', FooterTemplate);

// --------------------CLASS---------------------

class Person {
  constructor(image, imageCit, name, title, quote, born, awards, about, foundation, pictures, information) {
    this.image = image;
    this.imageCit = imageCit;
    this.name = name;
    this.title = title;
    this.quote = quote;
    this.born = born;
    this.awards = awards;
    this.about = about;
    this.foundation = foundation;
    this.pictures = pictures;
    this.information = information;
  }

  lady() {
    return this.image +
    this.imageCit +
    this.name +
    this.title +
    this.quote +
    this.born +
    this.awards +
    this.about +
    this.foundation +
    this.pictures +
    this.information
  }
}

const walker = new Person(
  '<img class="wonderful" src="../Walker/tin.jpg">',
  "Photographer Unknown",
  "Madam C.J. Walker",
  "Entrepreneur, Philanthropist, Self-made Millionaire, and a Political, Social and Civil Rights Activist",
  ["&#8220;Do Not Sit and Wait for", "the Opportunities to Come", "Get Up and Make Them&#8221;"],
  "December 23, 1867 – May 25, 1919",
  "Junior Achievement U.S. Business Hall of Fame and National Women’s Hall of Fame for Cosmetology and Direct Sales.",
  "Madam C. J. Walker was born in 1867 to two sharecroppers, her given name was Sarah Breedlove. She is best known for inventing, manufacturing and marketing her own line of hair care products. By 1917, the Madam C.J. Walker Manufacturing Company was the largest black-owned business in the country with a revenue of over $500,000. Her company allowed black women to be financially independent, educate their children and own their own homes. Madam Walker was also a philanthropist. She bequeathed 2/3 of her estate and future profits to charity and supportedseveral organizations and causes such as the National Association of Colored People (NAACP), the Tuskegee Institute and anti-lynching legislation, to name a few. When Madam C. J. Walker died in 1919, she left an estate worth over $1 million.",
  ['<a href="https://www.mcjwbeautyculture.com/" target=_blank>Madam C. J. Walker Beauty Culture</a>'],
  ['<a href="https://nmaahc.si.edu/explore/stories/collection/sizzle" target=_blank>National Museum of African American History & Culture</a>',
    '<a href="http://www.madamcjwalker.com" target=_blank>MadamCJWalker.com</a>'
  ],
  ['<a href="https://en.wikipedia.org/wiki/Madam_C._J._Walker" target=_blank>Wikipedia</a>', '<a href="http://www.madamcjwalker.com" target=_blank>MadamCJWalker.com</a>']
)

const cooper = new Person(
    "<img src='cooper.jpg' alt='picture of j california cooper' class='img-fluid'/>",
    "Photographer Unknown",
    "J. California Cooper",
    "&#8220;Some people don't even recognize real love when it comes without being called or sought.&#8221;",
    "Playwright and Author",
    "Nov 10, 1931-September 20, 2014",
    "American Book Award, James Baldwin Writing Award, San Francisco’s Black Playwright Award, and Literary Lion Award from the American Library Association.",
    ["Joan Cooper, known by her pen name, J. California Cooper, was an American playwright and author. She wrote 17 plays and was named Black Playwright of the Year in 1978 for her play Strangers. She is an award-winning writer whose black female characters confront a world of indifference and betrayal, but find kinship there in unexpected places.",],
    ["<a href='https://aalbc.com/authors/author.php?author_name=J.+California+Cooper' target=_blank>African American Literature Book Club</a>", "<a href='https://www.mahoganybooks.com/search.php?search_query=%20california%20cooper&section=product' target=_blank>Mahogany Books</a>"],
    '<a href="https://aalbc.com/authors/author.php?author_name=J.+California+Cooper" target=_blank>African American Literature Book Club</a>',
    ['<a href = "https://en.wikipedia.org/wiki/J._California_Cooper" target = _blank >Wikipedia</a>', '<a href = "https://www.nytimes.com/2014/09/26/arts/j-california-cooper-award-winning-writer-dies-at-82.html" target = _blank >NY Times</a>']
)
const rudolph = new Person(
    "Wilma Glodean Rudolph",
    '<img src="rudolph.jpg" alt="Wilma Rudolph holding her medals" class="img-fluid"/>',
    "Wilma Rudolph hold her Gold Medals",
    '&#8220;My doctor told me I would never walk again. <br> My mother told me I would. <br> I believed my mother&#8221;',
    "Olympic Champion",
   "June 23, 1940 - November 12, 1994",
    ["First American Woman to win three Olympic gold medals",
    "1956 Bronze medal, 4 X 100-meter relay, Olympic Games, Melbourne, Australia", "1960 World record in the 200-meter race at the Olympic Trials at Texas Christian University", "1960 Gold medals, 100-meter dash,  200-meter dash, and 4 × 100-meter relay, Olympic Games, Rome, Italy", "1961 Received Sullivan Award and Associated Press Female Athlete of the Year Award", "1962 Received Babe Didrikson Zaharias Award", "1973 Inducted into Black Athletes Hall of Fame", "1974 Inducted into National Track and Field Hall of Fame", "1980 Inducted into Women's Sports Foundation Hall of Fame", "1983 Inducted into U.S. Olympic Hall of Fame", "1987 Received National Collegiate Athletic Association's Silver Anniversary Award", "1993 Honored as one of the National Sports Awards 'Great Ones'"],
    ["In 1960, Wilma Rudolph became the first American woman to win three gold medals in track and field at a single Olympics. This is even more impressive if you consider she suffered from several early childhood illnesses, including pneumonia and scarlet fever, and contracted infantile paralysis (caused by the polio virus) at the age of four. She recovered from polio, but lost strength in her left leg and foot. Physically disabled for much of her early life, Rudolph wore a leg brace until she was eight years old.", "Eight years later, at the age of sixteen, she attended the 1956 Olympics and won her first Olympic medal. She went on to compete in the 1959 Pan America games and the 1960 Olympics where she became the first American woman to win three gold medals in a single Olympiad.", "Rudolph is remembered as one of the fastest women in track and as a source of great inspiration for generations of athletes. She once stated, 'Winning is great, sure, but if you are really going to do something in life, the secret is learning how to lose. Nobody goes undefeated all the time. If you can pick up after a crushing defeat, and go on to win again, you are going to be a champion someday.' In 2004, the United States Postal Service honored the Olympic champion by featuring her likeness on a 23-cent stamp. Wilma Rudolph died from complications of brain and throat cancer in 1994."
    ],
    "Please visit the <a href='https://www.womenssportsfoundation.org/programs/awards/wilma-rudolph-courage-award/' target=_blank>Women's Sports Foundation</a> to find out about and donate to the William Rudolph Courage Award.",
    ['<a   href="http://robinmork.com/2017/05/lioness-project-wilma-rudolph/" target=_blank>http://robinmork.com/2017/05/lioness-project-wilma-rudolph/</a>',
    '<a href="https://myhero.com/W_rudolph_dnhs_US_2010_ul" target=_blank>https://myhero.com/W_rudolph_dnhs_US_2010_ul</a>',
    '<a href="https://janellenorman94.wordpress.com/2015/02/09/black-history-month-wilma-rudolph/"  " target=_blank>https://janellenorman94.wordpress.com/2015/02/09/black-history-month-wilma-rudolph/</a>'],
    ['<a href="https://www.biography.com/people/wilma-rudolph-9466552"  target=_blank>https://www.biography.com/people/wilma-rudolph-9466552</a>',
    '<a href="http://sports.jrank.org/pages/4098/Rudolph-Wilma-Awards-Accomplishments.html" target=_blank>http://sports.jrank.org/pages/4098/Rudolph-Wilma-Awards-Accomplishments.html</a>',
    '<a href="https://en.wikipedia.org/wiki/Wilma_Rudolph" target=_blank>https://en.wikipedia.org/wiki/Wilma_Rudolph</a>'],
)

walker.lady('<img class="wonderful" src="../Walker/tin.jpg">',
"Photographer Unknown",
"Madam C.J. Walker");
rudolph.lady();
cooper.lady();



// window.addEventListener('load', () => { document.getElementById("image").innerHTML = cooper.image;
// });
//
// window.addEventListener('load', () => { document.getElementById("walker-image").innerHTML = walker.image;
// });
