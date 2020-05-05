const addresses = [
    {
      street_number: 22,
      street: "Crescent Street",
      city: "Cambridge",
      state: "Massachusetts",
      sold: true,
      date_sold: "2018-05-22T19:25:42.511Z",
      comments: "Nice urban house but small."
    },
    {
      street_number: 36,
      street: "Everest Street",
      city: "Montreal",
      state: "Quebec",
      sold: false,
      date_sold: "N/A",
      comments: "Very spacious house with yard."
    }
];


function findInformation() {
    let results = [];
    addresses.forEach(address => {
         results.push(address);
        
    });
    return results;
}


export {findInformation};
