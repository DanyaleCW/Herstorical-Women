let huerta = {
    name: "Dolores Clara Fernández Huerta",
    image: '<img src="Dolores-Huerta1.jpg" alt="picture of Dolores Huerta" class="img-fluid"/>',
    imageCitation: "Barbara Carrasco. Silkscreen 1999. National Portrait Gallery, Smithsonian Institution.",
    quote: '<img alt="si se puede" src="si se puede.jpg" class="img-fluid" />',
    description: "Creator of the Agricultural Workers Association (AWA), Co-founded of the United Farm Workers (UFW), Civil Rights Activist and Organizer",
    born: "April 10, 1930 - Her birthday has been designated as Dolores Huerta Day in the great state of California.",
    awardsHonors: "The Ellis Island Medal of Freedom Award, Eleanor Roosevelt Award, Puffin/Nation Prize for Creative Citizenship, and she was inducted in the National Women’s Hall of Fame",
    about: ['<!--class="lead"-->In the late 1950s Dolores Huerta became interested in the conditions of farmworkers and met Cesar Chavez, a CSO official who shared that interest. Their attempts to focus the CSO&#8217;s attention on the inequities plaguing rural workers failed, and both eventually left that organization. By 1962 they had cofounded the National Farm Workers Association, forerunner of the United Farm Workers (UFW), an influential union whose grape boycott in the late 1960s forced grape producers to improve working conditions for migrant farmworkers. As coordinator of nationwide lettuce, grape, and Gallo wine boycotts in the 1970s, Huerta helped create the national climate that led to the passage in 1975 of the Agricultural Labor Relations Act, the first law recognizing the rights of California farm workers to bargain collectively.', "In the 1980s Huerta co-founded the UFW&#8217;s radio station and continued to speak and raise funds on behalf of a variety of causes, including immigration policy and farm labourers&#8217; health. From 1988 to 1993, Huerta served on the U.S.Commission on Agricultural Workers, established by Congress to evaluate special worker provisions and labour markets in the agriculture industry. In 2002 she founded the Dolores Huerta Foundation, which was involved in community organizing. Her numerous honours include induction(1993) into the National Women&#8217;s Hall of Fame.", "In 2012, President Obama bestowed Dolores with her most prestigious award, The Presidential Medal of Freedom, the highest civilian award in the United States. Upon receiving this award Dolores said, 'The freedom of association means that people can come together in organization to fight for solutions to the problems they confront in their communities. The great social justice changes in our country have happened when people came together, organized, and took direct action. It is this right that sustains and nurtures our democracy today. The civil rights movement, the labor movement, the women&#8217;s movement, and the equality movement for our LGBT brothers and sisters are all manifestations of these rights. I thank President Obama for raising the importance of organizing to the highest level of merit and honor.",
    ],
    foundation: 'Please visit the <a href="http://doloreshuerta.org/" target=_blank>Dolores Huerta Foundation for Community Organizing</a> to donate and find out more about the amazing work she has done and continues to do.',
    picture: ['<a href="https://insider.si.edu/2018/04/dolores-huerta-a-latina-civil-rights-icon" target=_blank>Smithsonian</a>', '<a href="http://npg.si.edu/exhibition/one-life-dolores-huerta" target=_blank>National Portrait Gallery</a>', '<a href="http://doloreshuerta.org/" target=_blank>Dolores Huerta Foundation for Community Organizing</a>'],
    information: ['<a href="https://www.biography.com/people/dolores-huerta-188850"  target=_blank>Biography</a>',
    '<a href="http://doloreshuerta.org/dolores-huerta/" target=_blank>Dolores Huerta Foundation for Community Organizing</a>', '<a href="https://www.britannica.com/biography/Dolores-Huerta" target=_blank>Encyclopedia Britannica</a>'],

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
        return this.about[0] + "<br>" + "<br>" + this.about[1] + "<br>" + "<br>" + this.about[2];
    },
    foundations: function () {
        return this.foundation;
    },
    pictures: function () {
        return "Pictures" + "<br>" + this.picture[0] + "<br>" + this.picture[1] + "<br>" + this.picture[2];
    },
    informations: function () {
        return "Information" + " <br>" + this.information[0] + "<br>" + this.information[1] + "<br>" + this.information[2];
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
