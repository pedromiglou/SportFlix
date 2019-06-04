define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        var self = this;
        self.displayName = ko.observable('My Account');
        self.conta = ko.observable(JSON.parse(localStorage.getItem("ativa")));

        self.fname = ko.observable(self.conta().fname);
        self.lname = ko.observable(self.conta().lname);
        self.email = ko.observable(self.conta().email);
        self.username = ko.observable(self.conta().username);
        self.password = ko.observable(self.conta().password);
        self.favouriteTeams = ko.observableArray(self.conta().favouriteTeams);
        self.isSpecialAccount = ko.observable(self.conta().isSpecialAccount);
        self.favouriteGames = ko.observableArray(self.conta().favouriteGames);
        self.watchLater = ko.observableArray(self.conta().watchLater);
        self.history = ko.observableArray(self.conta().history);
        self.savedEvents = ko.observableArray(self.conta().savedEvents);
        self.newTitle = ko.observable();
        self.newText = ko.observable();
        self.newData = ko.observable();
        self.newImagem = ko.observable();

        self.logout = function() {
            window.location.replace("index.html");
            console.log(isSpecialAccount());
            console.log(conta())
        }

        
        self.SetSelectedTeam = function(name) {
            console.log(name);
            localStorage.setItem("selectedTeam", name);
            localStorage.setItem("reload", "true");
            window.location.replace("#equipa");
        }

        self.setSelectedGame = function(game) {
            localStorage.setItem("selectedGame", JSON.stringify(game));
            localStorage.setItem("reload", "true");
            window.location.replace("#WatchGame");
        }

        goToEvents = function() {
            localStorage.setItem("reload", "true");
            window.location.replace("#Events");
        }

        setNewEvent = function() {
            if (localStorage.getItem("events") == null) {
                self.eventos =  ko.observableArray([
                    {id: 0, title: "Evento 1", text: "Vai haver este evento incrivel q n vais querer faltar!!", data: "May 29, 2019", imagem: "./img/Futebol.png", saved: "Save Event!" }, 
                    {id: 1, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Basketball.png", saved: "Save Event!" }, 
                    {id: 2, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Tennis.png", saved: "Save Event!" },
                    {id: 3, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Baseball.png", saved: "Save Event!" },
                    {id: 4, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Handball.png", saved: "Save Event!" },
                    {id: 5, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Swimming.png", saved: "Save Event!" }
                ]);
            } else {
                self.eventos = ko.observableArray(JSON.parse(localStorage.getItem("events")));
            }

            self.eventos().push({id: self.eventos().length, title: self.newTitle(), text: self.newText(), data: self.newData(),
                imagem: self.newImagem(), saved: "Save Event!" })

            localStorage.setItem("events", JSON.stringify(self.eventos()));

            self.newTitle();
            self.newText();
            self.newData();
            self.newImagem();
        }
    };
    return vm;
});