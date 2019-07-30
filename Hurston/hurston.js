let hurston = {
  image: '<img src="ZoraPainting.png" alt="painting of Zora Hurston" class="img-fluid"/>',
  imageCit: "Eye Of The Watched Divine / Zora Neale Hurston a painting by Martel Chapman",
  name: "Zora Neale Hurston",
  quote: '<img src="quote.png" class="quote" alt="tell me, then again show me, so I can know" alt="img-responsive" class="center" class="img-fluid"/>',
  description: "Anthropologist, Activist, Civil Rights Activist, Author",
  born: "January 7, 1891 - January 28, 1960",
  awardsHonors: "Bethune-Cookman College Award for Education and Human Relations and the English Department remains dedicated to preserving her cultural legacy.",
  about: "In 1925 as the Harlem Renaissance gained momentum, Zora Neale Hurston headed to New York City. By the time of its height in the 1930s,Hurston was a preeminent Black female writer in the United States. It’s said that her apartment was a popular spot for social gatherings with the well-known artists of the time like Countee Cullen and Langston Hughes. Of Hurston’s more than 50 published novels, short stories, plays and essays, she wrote her most famous work Their Eyes Were Watching Godin 1937. Unlike the style of contemporaries Richard Wright and Ralph Ellison, Hurston did not write explicitly about Black people in the context of white America. <br> <br> She focused on the culture and traditions of African Americans through the poetry of their speech. Despite her earlier literary success, Hurston would suffer later in her career. Having difficulty getting published, she died poor and alone. Years later, Alice Walker would help revive interest in Hurston’s work with her essay, 'In Search of Zora Neale Hurston,' published in Ms. magazine in 1975. This essay, alongside her edits of notable works like “I Love Myself When I am Laughing and Then Again When I am Looking Mean and Impressive,” brought Hurston to the attention of a new generation of readers.",
  foundation: 'To find out more about Zora Neale Hurston, please visit the <a target="_blank" href="http://www.hurstonwright.org/">Hurston/Wright Foundation</a> which honors "the best in Black literature in the United States and around the globe."',
  picture: ['<a href="https://evettedionne.com/2012/03/23/shero-zora-neale-hurston/" target=_blank>EvetteDionne.com</a>',
  '<a href="https://pixels.com/featured/eye-of-the-watched-divine-zora-neale-hurston-martel-chapman.html" target=_blank>Pixels.com</a>'
  ],
  information: ['<a href="https://en.wikipedia.org/wiki/Zora_Neale_Hurston" target=_blank>Wikipedia</a>',
    '<a href="https://www.zoranealehurston.com/" target=_blank>ZoraNealeHuston.com</a>'
  ],

  names: function() {
    return this.name;
  },
  images: function() {
    return this.image;
  },
  imageCits: function() {
    return this.imageCit;
  },
  quotes: function() {
    return this.quote;
  },
  descriptions: function() {
    return this.description;
  },
  dates: function() {
    return this.born;
  },
  awards: function() {
    return this.awardsHonors;
  },
  abouts: function() {
    return this.about;
  },
  foundations: function() {
    return this.foundation;
  },
  pictures: function() {
    return this.picture[0] + "<br>" + this.picture[1];
  },
  informations: function() {
    return this.information[0] + " <br>" + this.information[1];
  }
};

// Display data from the object:
document.getElementById("image").innerHTML = hurston.images();
document.getElementById("image-cit").innerHTML = hurston.imageCits();
document.getElementById("name").innerHTML = hurston.names();
document.getElementById("quote").innerHTML = hurston.quotes();
document.getElementById("title").innerHTML = hurston.descriptions();
document.getElementById("born").innerHTML = hurston.dates();
document.getElementById("awards").innerHTML = hurston.awards();
document.getElementById("about").innerHTML = hurston.abouts();
document.getElementById("foundation").innerHTML = hurston.foundations();
document.getElementById("pictures").innerHTML = hurston.pictures();
document.getElementById("information").innerHTML = hurston.informations();
