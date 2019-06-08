var vm = function () {
    var self = this;

    self.data = ko.observableArray([
        { 'fname' : 'Osvaldo', 'lname' : 'Oliveira', 'email' : 'super@gmail.com', 'username' : 'Osvaldo', 'password' : 'palavrapasse', 'favouriteTeams' : ["FC Bayern München"],
            'isSpecialAccount' : true, 'favouriteGames' : [{'id':'1', 'team1' : 'Benfica', 'team2' : 'Braga', 'sport' : 'Football', 'country' : 'Portugal', 'year': 2019},
            {'id':'2', 'team1' : 'Sporting', 'team2' : 'Guimarães', 'sport' : 'Football', 'country' : 'Portugal', 'year' : 2018}], 'watchLater' : [{'id':'3', 'team1' : 'Porto', 'team2' : 'Belenenses', 'sport' : 'Football', 'country' : 'Portugal', 'year' : 2018}], 'history' : [], 'savedEvents' : []},
        { 'fname' : 'Gertrudes', 'lname' : 'Gomes', 'email' : 'casual@gmail.com', 'username' : 'Gertrudes', 'password' : 'palavrapasse', 'favouriteTeams' : ["Borussia Dortmund"],
            'isSpecialAccount' : false, 'favouriteGames' : [{'id':'5', 'team1' : 'Alexander Zverev' , 'team2' : 'Matteo Berrettini', 'sport' : 'Tennis' , 'country' : 'Italy' , 'year' : 2019}], 'watchLater' : [{'id':'6', 'team1' : 'Benoit Paire' , 'team2' : 'Diego Shwartzman', 'sport' : 'Tennis' , 'country' : 'Germany' , 'year' : 2019}], 'history' : [], 'savedEvents' : []}
    ]);
    self.fname = ko.observable('');
    self.lname = ko.observable('');
    self.email = ko.observable('');
    self.username = ko.observable('');
    self.password = ko.observable('');
    self.loginerrado = ko.observable(false);
    self.signinenable = ko.observable(false);

    self.signin = function() {
        console.log(localStorage.getItem("contas"));
        if (localStorage.getItem("contas") == null) {
            console.log("nice");
            self.users = ko.observableArray(self.data());
        } else {
            self.users = ko.observableArray(JSON.parse(localStorage.getItem("contas")));
        }
        self.newUser = ko.observable({ 'fname' : self.fname(), 'lname' : self.lname(), 'email' : self.email(), 'username' : self.username(),
            'password' : self.password(), 'favouriteTeams' : [], 'isSpecialAccount' : false, 'favouriteGames' : [], 'watchLater' : [], 'history' : [],
                'savedEvents' : []});
        self.users.push(self.newUser());
        console.log(self.users());
        localStorage.setItem("contas", JSON.stringify(self.users()));
    }

    self.login = function() {
        if (localStorage.getItem("contas") == null) {
            console.log("nice");
            self.users = ko.observableArray(self.data());
        } else {
            self.users = ko.observableArray(JSON.parse(localStorage.getItem("contas")));
        }
        self.loginerrado(true);
        for (i = 0; i<self.users().length; i++) {
            if (self.email() == self.users()[i].email && self.password() == self.users()[i].password) {
                localStorage.setItem("ativa", JSON.stringify(self.users()[i]));
                console.log(localStorage.getItem("ativa"));
                self.loginerrado(false);
                window.location.replace("index2.html");
            }
        }
    }

    self.clean = function() {
        self.fname('');
        self.lname('');
        self.email('');
        self.username('');
        self.password('');
    }
}

ko.applyBindings(new vm());