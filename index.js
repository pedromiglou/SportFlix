var vm = function () {
    var self = this;

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
            self.users = ko.observableArray([{ 'fname' : 'Super', 'lname' : 'user', 'email' : 'super@gmail.com', 'username' : 'Super', 'password' : 'palavrapasse', 'favouriteTeams' : [], 'isSpecialAccount' : true, 'favouriteGames' : [], 'watchLater' : []}]);
        } else {
            self.users = ko.observableArray(JSON.parse(localStorage.getItem("contas")));
        }
        self.newUser = ko.observable({ 'fname' : self.fname(), 'lname' : self.lname(), 'email' : self.email(), 'username' : self.username(), 'password' : self.password(), 'favouriteTeams' : [], 'isSpecialAccount' : false, 'favouriteGames' : [], 'watchLater' : []});
        self.users.push(self.newUser());
        console.log(self.users());
        localStorage.setItem("contas", JSON.stringify(self.users()));
    }

    self.login = function() {
        if (localStorage.getItem("contas") == null) {
            console.log("nice");
            self.users = ko.observableArray([{ 'fname' : 'Super', 'lname' : 'user', 'email' : 'super@gmail.com', 'username' : 'Super', 'password' : 'palavrapasse', 'favouriteTeams' : [], 'isSpecialAccount' : true, 'favouriteGames' : [], 'watchLater' : []}]);
        } else {
            self.users = ko.observableArray(JSON.parse(localStorage.getItem("contas")));
        }
        self.loginerrado(true);
        for (i = 0; i<self.users().length; i++) {
            if (self.email() == self.users()[i].email && self.password() == self.users()[i].password) {
                localStorage.setItem("ativa", JSON.stringify(self.users()[i]));
                console.log(localStorage.getItem("ativa"));
                self.loginerrado(false);
                window.open("index2.html");
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