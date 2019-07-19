function Person(name, title, quote, born, awards, about, foundation, pictures, information) {
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

let walker = new Person(
    "Madam C.J. Walker",
    "Entrepreneur, Philanthropist, Self-made Millionaire, and a Political, Social and Civil Rights Activist.",
    "Do Not Sit and Wait for <br> the Opportunities to Come <br> Get Up and Make Them",
    "December 23, 1867 – May 25, 1919",
    "Junior Achievement U.S. Business Hall of Fame and National Women’s Hall of Fame for Cosmetology and Direct Sales.",
    "Madam C. J. Walker was born in 1867 to two sharecroppers, her given name was Sarah Breedlove. She is best known for inventing, manufacturing and marketing her own line of hair care products. By 1917, the Madam C.J. Walker Manufacturing Company was the largest black-owned business in the country with a revenue of over $500,000. Her company allowed black women to be financially independent, educate their children and own their own homes. Madam Walker was also a philanthropist. She bequeathed 2/3 of her estate and future profits to charity and supportedseveral organizations and causes such as the National Association of Colored People (NAACP),the Tuskegee Institute and anti-lynching legislation, to name a few. When Madam C. J. Walker died in 1919, she left an estate worth over $1 million.",
    '<a href = "https://www.mcjwbeautyculture.com/" target = _blank>Madam C. J. Walker Beauty Culture</a>', ['<a href="https: //urbanbeautyex.com/foreverbeautiful-madame-c-j-walker/" target=_blank>https://urbanbeautyex.com/foreverbeautiful-madame-c-j-walker/</a>', '<a href="https://www.timetoastcom/timelines/madam-cj-walker-black-history-project" target=_blank> https://www.timetoast.com/timelines/madam-cj-walker-black-history-project</a>'], ['<a href="https://en.wikipedia.org/wiki/Madam_C._J._Walker" target=_blank> https://en.wikipedia.org/wiki/Madam_C._J._Walker</a>', '<a href="http://www.madamcjwalker.com" target=_blank> http://www.madamcjwalker.com</a>']

)

document.getElementById("walker-name").innerHTML = walker.name;
document.getElementById("walker-title").innerHTML = walker.title;
document.getElementById("walker-quote").innerHTML = walker.quote;
document.getElementById("walker-born").innerHTML = walker.born;
document.getElementById("walker-awards").innerHTML = walker.awards;
document.getElementById("walker-about").innerHTML = walker.about;
document.getElementById("walker-foundation").innerHTML = "Buy Madam C. J. Walker products at" + " " + walker.foundation;
document.getElementById("walker-pictures").innerHTML = walker.pictures[0] + "<br>" + walker.pictures[1];
document.getElementById("walker-information").innerHTML = walker.information[0] + "<br>" + walker.information[1];
