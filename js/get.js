'use strict';

function get(url) {
    return fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        updateBody(data.value);
        return data;
    })
    .catch(function (error) {
        console.error("ERROR:", error);
        return error;
    });

}
