let truth = new Person(
  '<img src="truth.png" alt="painting of Sojourner Truth" class="img-fluid"/>',
  "Image Citation",
  "Sojourner Truth",
  "Abolitionist, Author, Human Rights Activist",
  '&#8220;I feel safe in the midst of my enemies, <br> for the truth is all powerful and will prevail.&#8221;',
  "c. 1797 - November 26, 1883",
  " insert information &$^$&$&!!!!!!",
  "Sojourner Truth was born Isabella Baumfree in Swartekill, N.Y. to James and Elizabeth Baumfree, she is one of 12 children. James was a captured in what is modern day Ghana and Elizabeth was the daughter of Guineas slaves. The family was owned by Colonel Hardenbergh, and lived in Esopus, NY, a Dutch settled colony. Truth and her family spoke Dutch - fix the wording!!!!!",
  "Please visit and donate to <a href='https://www.sojournertruthhouse.org' target=_blank>The Sojourner Truth House</a> which is a nonprofit organization that serves homeless and at-risk women and their children.",
  ['<a href="https://pixels.com/featured/sojourner-truth-linda-ruiz-lozito.html" target=_blank>Pixels</a>',
  '<a href="https://myhero.com/W_truth_dnhs_US_2010_ul" target=_blank>MyHero</a>',
  ],
  ['<a href="https://www.biography.com/people/sojourner-truth-9511284" target=_blank>Biography</a>',
  '<a href="http://sports.jrank.org/pages/4098/truth-Wilma-Awards-Accomplishments.html" target=_blank>JRank</a>',
  '<a href="https://en.wikipedia.org/wiki/Wilma_truth" target=_blank>Wikipedia</a>'
  ]
);


// Display data from the object:
document.getElementById("image").innerHTML = truth.image;
document.getElementById("image-cit").innerHTML = truth.imageCit;
document.getElementById("name").innerHTML = truth.name;
document.getElementById("quote").innerHTML = truth.quote;
document.getElementById("title").innerHTML = truth.title;
document.getElementById("born").innerHTML = truth.born;
document.getElementById("awards").innerHTML = truth.awards;
document.getElementById("about").innerHTML = truth.about;
document.getElementById("foundation").innerHTML = truth.foundation;
document.getElementById("pictures").innerHTML = truth.pictures[0] + "<br>" + truth.pictures[1];
document.getElementById("information").innerHTML = truth.information[0] + "<br>" + truth.information[1] + "<br>" + truth.information[2];
