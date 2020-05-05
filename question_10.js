const articles = [
    {
      caption: "Unemployment spikes and Congress moves ahead on $2 trillion in aid",
      keywords: ["stimulus", "unemployment", "congress", "coronavirus"],
      source: "Fox News",
      url: "http://www.foxnews.com",
      db_author: "Joe Mann",
      released: "2020-03-27 EST",
      story: "Washington (CNN) The Senate's historic $2 trillion stimulus package is set for debate on the House floor Friday. The chamber will convene at 9 a.m. to consider the largest emergency aid package in US history in response to the coronavirus outbreak and its economic fallout, following a remarkable 96-0 Senate vote late Wednesday. House Speaker Nancy Pelosi -- who turns 80 today -- has said she would prefer that the Senate measure is adopted by unanimous consent, which would spare members who are isolating or at risk from having to travel back to Washington. But Democratic Rep. Alexandria Ocasio-Cortez, the New York freshman, is leaving open the option of objecting, potentially forcing House members to return and delaying a vote. Pelosi, however, told reporters that won't happen. \"We will be passing the bill tomorrow,\" she said today, CNN\'s Haley Byrd and Clare Foran report. $250 billion set aside for direct payments to individuals and families, $350 billion in small business loans and $250 billion in unemployment insurance benefits. A major amount of funding for hard-hit hospitals -- $130 billion -- as well as $150 billion for state and local governments that are cash-strapped due to their response to coronavirus. A $500 billion fund for Treasury to provide loans and support for distressed industries. That includes $25 billion for passenger air carriers, $4 billion for cargo air carriers and $17 billion for businesses that work in national security. The rest of the funds, $454 billion, can be spent as loans to businesses, states and municipalities."
    },
    {
      caption: "Unemployment spikes and Congress moves ahead on $2 trillion in aid",
      keywords: ["stimulus", "unemployment", "congress", "coronavirus"],
      source: "Fox News",
      url: "http://www.foxnews.com",
      db_author: "Joe Mann",
      released: "2020-03-27 EST",
      story: "Washington (CNN) The Senate's historic $2 trillion stimulus package is set for debate on the House floor Friday. The chamber will convene at 9 a.m. to consider the largest emergency aid package in US history in response to the coronavirus outbreak and its economic fallout, following a remarkable 96-0 Senate vote late Wednesday. House Speaker Nancy Pelosi -- who turns 80 today -- has said she would prefer that the Senate measure is adopted by unanimous consent, which would spare members who are isolating or at risk from having to travel back to Washington. But Democratic Rep. Alexandria Ocasio-Cortez, the New York freshman, is leaving open the option of objecting, potentially forcing House members to return and delaying a vote. Pelosi, however, told reporters that won't happen. \"We will be passing the bill tomorrow,\" she said today, CNN\'s Haley Byrd and Clare Foran report. $250 billion set aside for direct payments to individuals and families, $350 billion in small business loans and $250 billion in unemployment insurance benefits. A major amount of funding for hard-hit hospitals -- $130 billion -- as well as $150 billion for state and local governments that are cash-strapped due to their response to coronavirus. A $500 billion fund for Treasury to provide loans and support for distressed industries. That includes $25 billion for passenger air carriers, $4 billion for cargo air carriers and $17 billion for businesses that work in national security. The rest of the funds, $454 billion, can be spent as loans to businesses, states and municipalities."
    }
];


function findInformation() {
    let results = [];
    articles.forEach(article => {
         results.push(article);
        
    });
    return results;
}


export {findInformation};
