define(['knockout'], function (ko) {
    var vm = function () {
        var self = this;
        self.displayName = localStorage.getItem("selectedSport");
        conta = ko.observable(JSON.parse(localStorage.getItem("ativa")));
        self.games = ko.observableArray(JSON.parse(localStorage.getItem("gamesFilteredBySport")));
        self.filteredGames = ko.observableArray([]);
        
        self.isFavorito = function(game) {
            for (i = 0; i < conta().favouriteGames.length; i++) {
                if (conta().favouriteGames[i].id == game.id) {
                    return true;
                }
            }
            return false;
        }

        self.isWatchLater = function(game) {
            for (i=0; i < conta().watchLater.length; i++) {
                if (conta().watchLater[i].id == game.id) {
                    return true;
                }
            }
            return false;
        }
        
        // adicionar campos extra a lista de jogos

        self.update = function() {
            var temp1 = ko.observableArray([]);
            var temp2 = ko.observableArray([]);
            self.filteredGames([]);

            for(game of self.games()) {
                if (self.isFavorito(game)) {
                    temp1.push({'id':game.id, 'team1' : game.team1, 'team2' : game.team2, 'sport' : game.sport, 'country' : game.country, 'year': game.year, 'favourite' : 'remove from favourites'});
                } else {
                    temp1.push({'id':game.id, 'team1' : game.team1, 'team2' : game.team2, 'sport' : game.sport, 'country' : game.country, 'year': game.year, 'favourite' : 'add to favourites'});
                }
            }
            self.games(temp1());

            for(let game of self.games()) {
                if (self.isWatchLater(game)) {
                    temp2.push({'id':game.id, 'team1' : game.team1, 'team2' : game.team2, 'sport' : game.sport, 'country' : game.country, 'year': game.year, 'favourite' : game.favourite, 'watchLater' :'remove from watch later'});
                } else {
                    temp2.push({'id':game.id, 'team1' : game.team1, 'team2' : game.team2, 'sport' : game.sport, 'country' : game.country, 'year': game.year, 'favourite' : game.favourite, 'watchLater': 'add to watch later'});
                }
            }

            self.games(temp2());

            self.filteredGames(self.games());
        }
        self.update()

        // atualizar por pais
        self.enableFilter = ko.observable(false);

        update2 = function(pais) {
            if (self.enableFilter()) {
                self.selectedCountry = (pais==null) ? self.selectedCountry : pais;
                self.filteredGames([]);
                for (i = 0; i < self.games().length; i++) {
                    if (self.games()[i].country == self.selectedCountry) {
                        self.filteredGames.push(self.games()[i]);
                    }
                }
                console.log(self.filteredGames());
            }
        }

        enableFiltro = function() {
            console.log("enabled");
            self.enableFilter(true);
        }

        // adicionar as listas
        self.setFavourite = function (game) {
            if (self.isFavorito(game)) {
                for (i=0; i < conta().favouriteGames.length; i++) {
                    if (conta().favouriteGames[i].id == game.id) {
                        self.index = i;
                    }
                }
                conta().favouriteGames.splice(self.index, 1);
            } else {
                conta().favouriteGames.push(game);
            }
            localStorage.setItem("ativa", JSON.stringify(conta()));
            self.update();
            update2();
            
        }

        self.setWatchLater = function (game) {
            console.log(self.isWatchLater(game));
            if (self.isWatchLater(game)) {
                for (i=0; i < conta().watchLater.length; i++) {
                    if (conta().watchLater[i].id == game.id) {
                        self.index = i;
                    }
                }
                conta().watchLater.splice(self.index, 1);
            } else {
                conta().watchLater.push(game);
            }
            localStorage.setItem("ativa", JSON.stringify(conta()));
            self.update();
            update2();
        }

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