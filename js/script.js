/*Bind the HEADER and the SECTION elements above to variables */
let header = document.querySelector('header');
let section = document.querySelector('section');

// Store JSON URL in a variable
let requestURL = 'https://tavaresdev.github.io/jsonTest/products.json'


// Create a new XHR object 
let request = new XMLHttpRequest();

// open a new request using the open method of XHR object 
request.open('GET', requestURL)

//set up the response type 
request.responseType = 'json';

//send the request 
request.send();

//set up an event handler to listen for onload, so we don't do anything until the data return 
request.onload = function () {
    let iScreamInc = request.response;
    console.log(iScreamInc);
    populateHeader(iScreamInc);
    topDeals(iScreamInc);
}

//create populateHeader and topDeals functions 
function populateHeader(iScreamInc) {
    let headerH1 = document.createElement('h1');
    headerH1.textContent = iScreamInc['companyName'];
    header.appendChild(headerH1);

    let headerPara = document.createElement('p');
    headerPara.textContent = iScreamInc['headOffice'];
    header.appendChild(headerPara);

}

function topDeals(iScreamInc) {
    let topDeals = iScreamInc['topDeals'];
    for (let i = 0; i < topDeals.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('li');

        img.setAttribute('src', 'images/' + topDeals[i].image);
        img.setAttribute('alt', topDeals[i].name)
        h2.textContent = topDeals[i].name;
        p1.textContent = "Price: $" + topDeals[i].price;
        p2.textContent = topDeals[i].description;


        let features = topDeals[i].features;
        for (let j = 0; j < features.length; j++) {

            let listIten = document.createElement('li');
            listIten.textContent = features[j];
            list.appendChild(listIten);

        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article);


    }


}


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON