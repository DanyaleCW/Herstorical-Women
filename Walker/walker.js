var walker = new Person(
    "Madam C.J. Walker",
    "Do Not Sit and Wait for <br> the Opportunities to Come <br> Get Up and Make Them",
    "Entrepreneur, philanthropist, self-made millionaire, and a political, social and civil rights activist.",
    "December 23, 1867 – May 25, 1919",
    "Junior Achievement U.S. Business Hall of Fame and National Women’s Hall of Fame for Cosmetology and Direct Sales.",
    "Madam C. J. Walker was born in 1867 to two sharecroppers, her given name was Sarah Breedlove. She is best known for inventing, manufacturing and marketing her own line of hair care products. By 1917, the Madam C.J. Walker Manufacturing Company was the largest black-owned business in the country with a revenue of over $500,000. Her company allowed black women to be financially independent, educate their children and own their own homes. Madam Walker was also a philanthropist. She bequeathed 2/3 of her estate and future profits to charity and supportedseveral organizations and causes such as the National Association of Colored People (NAACP),the Tuskegee Institute and anti-lynching legislation, to name a few. When Madam C. J. Walker died in 1919, she left an estate worth over $1 million.",
    '<a href = "https://www.mcjwbeautyculture.com/" target = _blank>Madam C. J. Walker Beauty Culture</a>',
    ['<a href="https: //urbanbeautyex.com/foreverbeautiful-madame-c-j-walker/" target=_blank>https://urbanbeautyex.com/foreverbeautiful-madame-c-j-walker/</a>', '<a href="https://www.timetoastcom/timelines/madam-cj-walker-black-history-project" target=_blank> https://www.timetoast.com/timelines/madam-cj-walker-black-history-project</a>'],
    ['<a href="https://en.wikipedia.org/wiki/Madam_C._J._Walker" target=_blank> https://en.wikipedia.org/wiki/Madam_C._J._Walker</a>', '<a href="http://www.madamcjwalker.com" target=_blank> http://www.madamcjwalker.com</a>']

)

document.getElementById("name").innerHTML = walker.name;
document.getElementById("quote").innerHTML = walker.quote;
document.getElementById("title").innerHTML = walker.title;
document.getElementById("born").innerHTML = walker.born;
document.getElementById("awards").innerHTML = walker.awards;
document.getElementById("about").innerHTML = walker.about;
document.getElementById("foundation").innerHTML = "Buy Madam C. J. Walker products at" + " " + walker.foundation;
document.getElementById("pictures").innerHTML = walker.pictures[0] + "<br>" + walker.pictures[1];
document.getElementById("information").innerHTML = walker.information[0] + "<br>" + walker.information[1];