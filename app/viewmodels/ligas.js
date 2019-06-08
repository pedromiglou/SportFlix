define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        displayName = 'Leagues';
        nextPage = ko.observable("#League");
        images =  ko.observableArray([{ name: "Bundesliga", flag: "./img/BundesLiga.png" }, 
        {name: "La Liga", flag: "./img/La_Liga.png"}, 
        {name: "Ligue 1", flag: "./img/Ligue_1.png"},
        {name: "Liga NOS", flag: "./img/Liga_NOS.png"},
        {name: "Premier League", flag: "./img/Premier.png"},
        {name: "Serie A", flag: "./img/Serie_A.png"},
        {name: "Eredivisie", flag: "./img/eredivisie.png"},
        {name: "Russian Premier", flag: "./img/Russian_Premier.png"}]);

        selectLeague = function(name) {
            localStorage.setItem("selectedLeague", name);
            nextPage("#League");
        }
    };
    return vm;
});
