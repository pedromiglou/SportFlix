define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        teams = ko.observableArray();

        selectedLeague = localStorage.getItem("selectedLeague");

        if (selectedLeague == "Bundesliga") {
            teams([
                {'position' : 1 , 'name' : 'FC Bayern München', 'points' : '75'},
                {'position' : 2 , 'name' : 'Borussia Dortmund ', 'points' : '73'},
                {'position' : 3 , 'name' : 'RB Leipzig', 'points' : '66'}
            ]);
        };

        selectTeam = function(name) {
            localStorage.setItem("selectedTeam", name);
        }
    };
    return vm;
});