define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        if (localStorage.getItem("reload") == "true") {
            location.reload();
            localStorage.setItem("reload", "false");
        }

        self = this;
        self.titulo = ko.observable();

        self.video = ko.observable('img/football1.mp4');

        self.VideoUrl = ko.computed(function() {
            return '<source src="' + self.video() + '" type="video/mp4" >';
        });         

        self.game = ko.observable(JSON.parse(localStorage.getItem("selectedGame")));
        console.log(self.game());
        self.titulo(self.game().team1 + ' x ' + self.game().team2 + ' ( ' + self.game().sport + ' - ' + self.game().year+' )');
        if (self.game().sport == "Tennis") {
            self.video('img/tennis.mp4');
        } else if (self.game().year == 2018) {
            self.video('img/football2.mp4');
        }

        self.input = ko.observable();
        if (localStorage.getItem(self.titulo()) == null) {
            self.comments = ko.observableArray([]);
        } else {
            self.comments = ko.observableArray(JSON.parse(localStorage.getItem(self.titulo())));
        }
        self.comments().reverse();
        

        self.Submit = function() {
            if (self.input() != "") {
                self.comments().reverse();
                self.comments().push(JSON.parse(localStorage.getItem("ativa")).username + ": " + self.input());
                self.comments.valueHasMutated();
                self.input("");
                localStorage.setItem(self.titulo(), JSON.stringify(self.comments()));
                self.comments().reverse();
                self.comments.valueHasMutated();
            }
        }
    }
    return vm;
});