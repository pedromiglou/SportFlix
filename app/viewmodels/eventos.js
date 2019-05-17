define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        displayName = 'Events';
        eventos =  ko.observableArray([
            {title: "Evento 1", text: "Vai haver este evento incrivel q n vais querer faltar!!", data: "May 29, 2019", imagem: "./img/Futebol.png" }, 
            {title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Basketball.png"}, 
            {title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Tennis.png"},
            {title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Baseball.png"},
            {title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Handball.png"},
            {title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Swimming.png"}]);

    };
    return vm;
});