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

// ------NAVIGATION TEMPLATE MAIN PAGE-------
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

// ------NAVIGATION TEMPLATE LETTER PAGES------
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

// -----------BODY TEMPLATE---------------

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

// ----------FOOTER INDIVIDUAL PAGES--------

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

// ------------------CLASS-------------------

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

  walker () {
    
  }
}
