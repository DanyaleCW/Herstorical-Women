let truth = {
    name: "Sojourner Truth",
    image: '<img src="truth.png" alt="painting of Sojourner Truth" class="img-fluid"/>',
    imageCitation: '<a href="https://pixels.com/featured/sojourner-truth-linda-ruiz-lozito.html" target=_blank>Painting By Linda Ruiz Lozito</a>',
    quote: '&#8220;I feel safe in the midst of my enemies, <br> for the truth is all powerful and will prevail.&#8221;',
    description: "Abolitionist, Author, Human Rights Activist",
    born: "c. 1797 - November 26, 1883",
    awardsHonors: " insert information &$^$&$&!!!!!!",
    about: ["Sojourner Truth was born Isabella Baumfree in Swartekill, N.Y. to James and Elizabeth Baumfree, she is one of 12 children. James was a captured in what is modern day Ghana and Elizabeth was the daughter of Guineas slaves. The family was owned by Colonel Hardenbergh, and lived in Esopus, NY, a Dutch settled colony. Truth and her family spoke Dutch - fix the wording!!!!!", "Sojourner Truth was sold at least three times during her lifetime. The final sale was to John Dumont who resided in West Park, N.Y. This is were Truth learned to speak English. say something about 'Ain't I a Woman being added and attributed to her falsley because she grew up speaking Dutch and then learned English, in upstate NY so she would not have spoken in Southern locution "],
    foundation: "Please visit and donate to <a href='https://www.sojournertruthhouse.org' target=_blank>The Sojourner Truth House</a> which is a nonprofit organization that serves homeless and at-risk women and their children.",
    picture: ['<a   href="https://pixels.com/featured/sojourner-truth-linda-ruiz-lozito.html" target=_blank>https://pixels.com/featured/sojourner-truth-linda-ruiz-lozito.html</a>',
    '<a href="https://myhero.com/W_truth_dnhs_US_2010_ul" target=_blank>https://myhero.com/W_truth_dnhs_US_2010_ul</a>',
    '<a href="https://janellenorman94.wordpress.com/2015/02/09/black-history-month-wilma-truth/"  " target=_blank>https://janellenorman94.wordpress.com/2015/02/09/black-history-month-wilma-truth/</a>'],
    information: ['<a https://www.biography.com/people/sojourner-truth-9511284"  target=_blank>https://www.biography.com/people/sojourner-truth-9511284</a>',
    '<a href="http://sports.jrank.org/pages/4098/truth-Wilma-Awards-Accomplishments.html" target=_blank>http://sports.jrank.org/pages/4098/truth-Wilma-Awards-Accomplishments.html</a>',
    '<a href="https://en.wikipedia.org/wiki/Wilma_truth" target=_blank>https://en.wikipedia.org/wiki/Wilma_truth</a>'],

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
        return this.about[0] + " <br>" + "<br>" + this.about[1] + "<br>" + "<br>" + this.about[2];
    },
    foundations: function () {
        return this.foundation;
    },
    pictures: function () {
        return "Pictures" + "<br>" + this.picture[0] + "<br>" + " " + this.picture[1] + "<br>" + " " + this.picture[2];
    },
    informations: function () {
        return "Information" + "<br>" + " " + this.information[0] + "<br>" + " " + this.information[1] + "<br>" + " " + this.information[2];
    }
};

// Display data from the object:
document.getElementById("name").innerHTML = truth.fullName();
document.getElementById("image").innerHTML = truth.images();
document.getElementById("image-cit").innerHTML = truth.imageCitations();
document.getElementById("quote").innerHTML = truth.quotes();
document.getElementById("description").innerHTML = truth.descriptions();
document.getElementById("born").innerHTML = truth.dates();
document.getElementById("awards").innerHTML = truth.awards();
document.getElementById("about").innerHTML = truth.abouts();
document.getElementById("foundation").innerHTML = truth.foundations();
document.getElementById("pictures").innerHTML = truth.pictures();
document.getElementById("information").innerHTML = truth.informations();
