define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        displayName = 'Account Information';
        conta = ko.observable(JSON.parse(localStorage.getItem("ativa")));

        fname = ko.observable(conta().fname);
        lname = ko.observable(conta().lname);
        email = ko.observable(conta().email);
        username = ko.observable(conta().username);
        password = ko.observable(conta().password);
        favouriteTeams = ko.observableArray(conta().favouriteTeams);
        isSpecialAccount = ko.observable(conta().isSpecialAccount);

        logout = function() {
            window.open("index.html");
            console.log(isSpecialAccount());
            console.log(conta())
        }
    };
    return vm;
});