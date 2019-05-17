define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        displayName = localStorage.getItem("selectedSport");

        games = ko.observableArray(JSON.parse(localStorage.getItem("gamesFilteredBySport")));
    };
    return vm;
});

//ESTA PAGINA É DOS JOGOS!

/*
    {'jogador1' : 'Alexander Zverev' , 'jogador2' : 'Matteo Berrettini' , 'country' : 'Italy' , 'year' : 2019} ,
    {'jogador1' : 'Benoit Paire' , 'jogador2' : 'Diego Shwartzman' , 'country' : 'Germany' , 'year' : 2019}

ISTO É DE TENIS

//CRIA uma seccao para as "equipas" q sao apenas pessoas individuais plz e mete uma hiperligacao destes nomes para lá
*/