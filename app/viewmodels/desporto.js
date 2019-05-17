define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
    displayName = 'Sports';

    images =  ko.observableArray([{ name: "Football", flag: "./img/Futebol.png" }, 
        {name: "Basketball", flag: "./img/Basketball.png"}, 
        {name: "Tennis", flag: "./img/Tennis.png"},
        {name: "Baseball", flag: "./img/Baseball.png"},
        {name: "Handball", flag: "./img/Handball.png"},
        {name: "Swimming", flag: "./img/Swimming.png"},
        {name: "Golf", flag: "./img/Golf.png"},
        {name: "Track and Field", flag: "./img/Track_and_Field.png"}]);

    games = ko.observableArray([
        {'team1' : 'Benfica', 'team2' : 'Braga', 'sport' : 'Football', 'country' : 'Portugal', 'year': 2019},
        {'team1' : 'Sporting', 'team2' : 'Guimarães', 'sport' : 'Football', 'country' : 'Portugal', 'year' : 2018},
        {'team1' : 'Porto', 'team2' : 'Belenenses', 'sport' : 'Football', 'country' : 'Portugal', 'year' : 2018},
        {'team1' : 'Real Madrid', 'team2' : 'Barcelona', 'sport' : 'Football', 'country' : 'Spain', 'year' : 2017},
        {'team1' : 'Alexander Zverev' , 'team2' : 'Matteo Berrettini', 'sport' : 'Tennis' , 'country' : 'Italy' , 'year' : 2019} ,
        {'team1' : 'Benoit Paire' , 'team2' : 'Diego Shwartzman', 'sport' : 'Tennis' , 'country' : 'Germany' , 'year' : 2019}
    ]);

    filteredGames = ko.observableArray([]);

    setSport = function(name) {
        localStorage.setItem("selectedSport", name);
        filteredGames = ko.observableArray([]);
        for (i = 0; i < games().length; i++) {
            if (games()[i].sport == name) {
                filteredGames.push(games()[i]);
            }
        }
        localStorage.setItem("gamesFilteredBySport", JSON.stringify(filteredGames()));
    }

    
    };
    return vm;
});
