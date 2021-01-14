'use strict';
const modalButton = document.querySelector('#getQuote');
let category = "dev";

function getQuote(category) {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    get(url).then(function (response) {
        updateBody(response.value);
    });
}

function getCategories() {
    const url = 'https://api.chucknorris.io/jokes/categories';
    get(url).then(function (response) {
        buildCategoryList(response);
    })
}
modalButton.addEventListener('click', function(e) {
    e.preventDefault();
    getQuote(category);

});



function updateBody(quote) {
    const paragraph = document.querySelector('#chuckSays');
    paragraph.innerHTML = quote;
    
}

function buildCategoryList(categoryList) {
    // Filter out the 'explicit', 'religion', and 'political' categories
    const filteredList = categoryList.filter(function (category) {
        if (category !== 'explicit' && category !== 'political' && category !== 'religion') {
            return category;
        }
    });

    const form = document.querySelector('#changeQuote');
    const categorySelect = document.createElement('select');
    filteredList.map(function (category) {
        const categoryOption = document.createElement('option');
        categoryOption.value = category;
        categoryOption.text = category;
        categorySelect.appendChild(categoryOption);
    });
    form.appendChild(categorySelect);

    categorySelect.addEventListener('change', function (event) {
        getQuote(event.target.value);
    })
}



// function toggleModal() {
//     const modalOverlay = document.querySelector('#overlay');
//     modalOverlay.classList.toggle('visible');
// }

getCategories();
getQuote('career');