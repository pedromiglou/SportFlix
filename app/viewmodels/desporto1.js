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

        self.update2 = function(pais) {
            var temp3 = ko.observableArray([]);
            for (i = 0; i < self.filteredGames().length; i++) {
                if (self.filteredGames()[i].country == pais) {
                    temp3.push(self.filteredGames()[i]);
                }
            }
            self.filteredGames(temp3());
        }

        //atualizar por ano
        self.update3 = function(ano) {
            var temp4 = ko.observableArray([]);
            for (i = 0; i < self.filteredGames().length; i++) {
                if (self.filteredGames()[i].year == ano) {
                    temp4.push(self.filteredGames()[i]);
                }
            }
            self.filteredGames(temp4());
        }

        enableFiltro = function() {
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
            self.filter("null", "null");
            
        }

        self.setWatchLater = function (game) {
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
            self.filter("null", "null");
        }

        // funçao chamada pelos filtros
        self.country = "all";
        self.year = "all"
        self.filter = function(pais, ano) {
            if (self.enableFilter()) {
                self.country = (pais != "null") ? pais : self.country;
                self.year = (ano != "null") ? ano: self.year;
                self.filteredGames(self.games());
                if (self.country != "all") self.update2(self.country);
                if (self.year!="all") self.update3(self.year);
            }
        }

        //gravar o nome do jogo
        self.setGame = function(data) {
            localStorage.setItem("selectedGame", JSON.stringify(data));
            conta().history.push(data)
            localStorage.setItem("ativa", JSON.stringify(conta()));
            return true;
        }
    };

    return vm;
});