import {ANCESTRY_FILE} from './lib/ancestry';

const data = JSON.parse(ANCESTRY_FILE);
const $ = require('jquery');

let overNinety = function (person) {
    return person.died - person.born > 90;
};

let tranform =  function (person) {
    return person.name;
};

window.onload = function () {    

    $('<button/>').html('Find Person').click(function () {
        let result = data.filter( overNinety );
        let byName = result.map( tranform );

       $.each(byName, function showPerson(i, person) {
            $('<p/>').html(`You found ${person}`).appendTo('body');
        });

    }).appendTo('body');
};
