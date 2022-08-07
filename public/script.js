
// Will execute myCallback every 0.5 seconds 
var intervalID = window.setInterval(myCallback, 3000);

var data;


async function myCallback() {
fetch('https://api.zora.co/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ query: `
  query { sales(where: {collectionAddresses: "0xe5e771bc685c5a89710131919c616c361ff001c6"}, sort: {sortKey: NONE, sortDirection: DESC}) {
    nodes {
      sale {
        tokenId
        sellerAddress
        saleType
        saleContractAddress
        price {
          chainTokenPrice {
            decimal
            currency {
              name
              address
              decimals
            }
          }
        }
        transactionInfo {
          blockTimestamp
        }
      }
      token {
        collectionName
        tokenUrl
        tokenUrlMimeType
        owner
        name
        description
        metadata
        lastRefreshTime
      }
    }
  }
}`
})
})
  .then(r => r.json())
  .then(data => { document.getElementById("price").innerHTML = "<img width='10%' height='10%' src='" + data["data"]["sales"]["nodes"][0]["token"]["metadata"]["image"] + "'>" + data["data"]["sales"]["nodes"][0]["sale"]["transactionInfo"]["blockTimestamp"] 
                  + ", #" + data["data"]["sales"]["nodes"][0]["sale"]["tokenId"] + ", " 
                  + data["data"]["sales"]["nodes"][0]["sale"]["price"]["chainTokenPrice"]["decimal"]
                  + "<br />"
                  + "<img width='10%' height='10%' src='" + data["data"]["sales"]["nodes"][1]["token"]["metadata"]["image"] + "'>" + data["data"]["sales"]["nodes"][1]["sale"]["transactionInfo"]["blockTimestamp"] 
                  + ", #" + data["data"]["sales"]["nodes"][1]["sale"]["tokenId"] + ", " 
                  + data["data"]["sales"]["nodes"][1]["sale"]["price"]["chainTokenPrice"]["decimal"]
                  + "<br />"
                  + "<img width='10%' height='10%' src='" + data["data"]["sales"]["nodes"][2]["token"]["metadata"]["image"] + "'>" + data["data"]["sales"]["nodes"][2]["sale"]["transactionInfo"]["blockTimestamp"] 
                  + ", #" + data["data"]["sales"]["nodes"][2]["sale"]["tokenId"] + ", " 
                  + data["data"]["sales"]["nodes"][2]["sale"]["price"]["chainTokenPrice"]["decimal"]
                  + "<br />"
                  + "<img width='10%' height='10%' src='" + data["data"]["sales"]["nodes"][3]["token"]["metadata"]["image"] + "'>" + data["data"]["sales"]["nodes"][3]["sale"]["transactionInfo"]["blockTimestamp"] 
                  + ", #" + data["data"]["sales"]["nodes"][3]["sale"]["tokenId"] + ", " 
                  + data["data"]["sales"]["nodes"][3]["sale"]["price"]["chainTokenPrice"]["decimal"]
                  + "<br />"
                  + "<img width='10%' height='10%' src='" + data["data"]["sales"]["nodes"][4]["token"]["metadata"]["image"] + "'>" + data["data"]["sales"]["nodes"][4]["sale"]["transactionInfo"]["blockTimestamp"] 
                  + ", #" + data["data"]["sales"]["nodes"][4]["sale"]["tokenId"] + ", " 
                  + data["data"]["sales"]["nodes"][4]["sale"]["price"]["chainTokenPrice"]["decimal"]
                  + "<br />";
                console.log(data);
                }
       );  
}

