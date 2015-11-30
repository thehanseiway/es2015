var $ = require('jquery');

window.onload = function () {

    alertStart('HELLO!');
    $.each(['Welcome', 'my name is Wlad'], function (i, message) {
        $('<p/>').html(message).appendTo('body');
    });

    $('<button/>').html('colors').click(function () {
        $('p').toggleClass('active');
    }).appendTo('body');
};