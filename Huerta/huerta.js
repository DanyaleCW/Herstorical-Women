var huerta = {
    name: "Dolores Clara Fernández Huerta",
    image: '<img src="Dolores-Huerta1.jpg" alt="picture of Dolores Huerta" class="img-fluid"/>',
    imageCitation: "Barbara Carrasco. Silkscreen 1999. National Portrait Gallery, Smithsonian Institution.",
    quote: '<img alt="si se puede" src="si se puede.jpg" class="img-fluid" />',
    description: "Creator of the Agricultural Workers Association (AWA), Co-founded of the United Farm Workers (UFW), Civil Rights Activist and Organizer",
    born: "April 10, 1930 - Her birthday has been designated as Dolores Huerta Day in the great state of California.",
    awardsHonors: "The Ellis Island Medal of Freedom Award, Eleanor Roosevelt Award, Puffin/Nation Prize for Creative Citizenship, and she was inducted in the National Women’s Hall of Fame",
    about: ['<!--class="lead"-->Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Ut etiam sit amet nisl purus in mollis nunc sed. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Scelerisque in dictum non consectetur a erat nam. Turpis massa sed elementum tempus egestas sed sed risus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Consectetur purus ut faucibus pulvinar. Sed nisi lacus sed viverra tellus in. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Cras sed felis eget velit aliquet sagittis id consectetur. Id faucibus nisl tincidunt eget nullam. Nisi quis eleifend quam adipiscing vitae. Proin sagittis nisl rhoncus mattis.", "Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Tellus orci ac auctor augue mauris augue. Purus faucibus ornare suspendisse sed nisi. Facilisis gravida neque convallis a cras semper auctor neque vitae. Sapien eget mi proin sedlibero. Nec feugiat nisl pretium fusce id velit ut tortor. Tristique nulla aliquet enim tortor at. Viverra ipsum nunc aliquet bibendum enim facilisis. Donec ac odio tempor orci dapibus. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Quam lacus suspendisse faucibus interdum. Massa tincidunt dui ut ornare lectus sit amet. Massa sapien faucibus et molestieac."],
    foundation: 'Please visit the <a href="http://doloreshuerta.org/" target=_blank>Dolores Huerta Foundation</a> to donate and find out more about the amazing work she has done and continues to do.',
    picture: '<a href="https://insider.si.edu/2018/04/dolores-huerta-a-latina-civil-rights-icon" target=_blank>https://insider.si.edu/2018/04/dolores-huerta-a-latina-civil-rights-icon</a>',
    information: '<a href="https://www.biography.com/people/dolores-huerta-188850"  target=_blank>https://www.biography.com/people/dolores-huerta-188850 </a>',

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
        return this.awardsHonors;
    },
    abouts: function () {
        return this.about;
    },
    foundations: function () {
        return this.foundation;
    },
    pictures: function () {
        return "Pictures" + "<br>" + " " + this.picture;
    },
    informations: function () {
        return "Information" + " <br>" + " " + this.information;
    }
};

// Display data from the object:
document.getElementById("name").innerHTML = huerta.fullName();
document.getElementById("image").innerHTML = huerta.images();
document.getElementById("image-cit").innerHTML = huerta.imageCitations();
document.getElementById("quote").innerHTML = huerta.quotes();
document.getElementById("description").innerHTML = huerta.descriptions();
document.getElementById("born").innerHTML = huerta.dates();
document.getElementById("awards").innerHTML = huerta.awards();
document.getElementById("about").innerHTML = huerta.abouts();
document.getElementById("foundation").innerHTML = huerta.foundations();
document.getElementById("pictures").innerHTML = huerta.pictures();
document.getElementById("information").innerHTML = huerta.informations();