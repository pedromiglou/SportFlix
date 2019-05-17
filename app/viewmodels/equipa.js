define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {

        players = ko.observableArray([
            {'number' : 09 , 'name' : 'Robert Lewandowski', 'position' : 'Forward'},
            {'number' : 25 , 'name' : 'Thomas Müller', 'position' : 'Forward'},
            {'number' : 32 , 'name' : 'Joshua Kimmich', 'position' : 'Defender'}
        ]);
        
        selectedLeague = localStorage.getItem("selectedLeague");

        selectedTeam = localStorage.getItem("selectedTeam");

        conta = ko.observable(JSON.parse(localStorage.getItem("ativa")));

        followed = ko.observable(conta().favouriteTeams.indexOf(selectedTeam) > -1);

        followButton = ko.observable(followed() ? "Followed!" : "Follow team!");

        setFavourite = function() {
            if (followed()) {
                console.log(conta().favouriteTeams)
                delete conta().favouriteTeams[conta().favouriteTeams.indexOf(selectedTeam)];
                followed(false);
                followButton("Follow team!");
            } else {
                conta().favouriteTeams.push(selectedTeam);
                followed(true);
                followButton("Followed!");
            }
            localStorage.setItem("ativa", JSON.stringify(conta()));
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