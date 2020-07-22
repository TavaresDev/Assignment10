//
let apiBtn = document.getElementById('apiBtn')
let imgSection = document.getElementById('pics')

apiBtn.addEventListener('click', makeRequest)


function makeRequest() {
    //using requestAPI XMLH
    var requestAPI = new XMLHttpRequest();

    let catURL = 'https://api.thecatapi.com/v1/images/search?size=full';

    // Open a new connection, using the GET requestAPI on the URL endpoint
    requestAPI.open('GET', catURL, true);

    //set up the response type 
    requestAPI.responseType = 'json';

    //send the requestAPI 
    requestAPI.send();

    requestAPI.onload = function () {
        // Begin accessing JSON data here
        let responseAPI = requestAPI.response;
        console.log(responseAPI);
        showImg(responseAPI);
    };

    function showImg(responseAPI) {
        console.log(responseAPI['0'].url);
        let article = document.createElement('article');

        let img = document.createElement('img');
        img.setAttribute('class', 'catImg');


        img.setAttribute('src', responseAPI['0'].url);



        article.appendChild(img);
        imgSection.appendChild(article);
        imgSection.setAttribute('class', 'section2');
    }

}