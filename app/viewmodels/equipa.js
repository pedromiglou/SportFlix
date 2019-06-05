define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        if (localStorage.getItem("reload") == "true") {
            location.reload();
            localStorage.setItem("reload", "false");
        }
        self = this;

        self.selectedTeam = ko.observable(localStorage.getItem("selectedTeam"));

        if (self.selectedTeam() == "FC Bayern München") {
            self.players = ko.observableArray([
                {'number' : 09 , 'name' : 'Robert Lewandowski', 'position' : 'Forward'},
                {'number' : 25 , 'name' : 'Thomas Müller', 'position' : 'Forward'},
                {'number' : 32 , 'name' : 'Joshua Kimmich', 'position' : 'Defender'}
            ]);
        } else {
            self.players = ko.observableArray([]);
        }
        
        self.conta = ko.observable(JSON.parse(localStorage.getItem("ativa")));

        self.followed = ko.observable(self.conta().favouriteTeams.indexOf(self.selectedTeam()) > -1);

        self.followButton = ko.observable(self.followed() ? "Followed!" : "Follow team!");

        self.setFavourite = function() {
            if (self.followed()) {
                temp1 = [];
                for (team of self.conta().favouriteTeams) {
                    if (team != self.selectedTeam()) {
                        temp1.push(team);
                    }
                }
                self.conta().favouriteTeams = temp1;
                self.followed(false);
                self.followButton("Follow team!");
            } else {
                self.conta().favouriteTeams.push(self.selectedTeam());
                self.followed(true);
                self.followButton("Followed!");
            }
            localStorage.setItem("ativa", JSON.stringify(self.conta()));
        }
    };
    return vm;
});

//isto é da equipa FC Bayern München
//da primeira liga q aparece aqui
//mete isto a dar pff haha

//no fim dessa pagina tmb deviamos por uma 
//cena a dizer os jogos q extistem com essa
//equipa, achas q isso é possivel?

/*
    {'number' : 9 , 'name' : 'Marcus Acuña', 'position' : 'Forward'},
    {'number' : 21, 'name' : 'Raphinha', 'position' : 'Forward'},
    {'number' : 8 , 'name' : 'Bruno Fernandes' , 'position' : 'Midfielder'}

    ISTO SAO ALGUNS JOGADORES DO SPORTING (n conheco nng meti esses a sorte)
    VE SE Ẽ POSSIVEL NO SITIO ONDE TEM OS JOGOS CARREGAR NAS EQUIPAS E APARECER
    A PAGINA DAS EQUIPAS (esta)
*/