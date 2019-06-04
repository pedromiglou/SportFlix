define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var vm = function () {
        if (localStorage.getItem("reload") == "true") {
            location.reload();
            localStorage.setItem("reload", "false");
        }
        
        var self = this;
        self.displayName = 'Events';
        self.conta = ko.observable(JSON.parse(localStorage.getItem("ativa")));

        self.modalTitle = ko.observable();
        self.modalText = ko.observable();
        self.modalData = ko.observable();
        
        if (localStorage.getItem("events") == null) {
            self.eventos =  ko.observableArray([
                {id: 0, title: "Evento 1", text: "Vai haver este evento incrivel q n vais querer faltar!!", data: "May 29, 2019", imagem: "./img/Futebol.png", saved: "Save Event!" }, 
                {id: 1, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Basketball.png", saved: "Save Event!" }, 
                {id: 2, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Tennis.png", saved: "Save Event!" },
                {id: 3, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Baseball.png", saved: "Save Event!" },
                {id: 4, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Handball.png", saved: "Save Event!" },
                {id: 5, title: "eventuu", text: "mais um evento incrvivel! n faltes", data: "June 19, 2019", imagem: "./img/Swimming.png", saved: "Save Event!" }
            ]);
            localStorage.setItem("events", JSON.stringify(self.eventos()));
        } else {
            self.eventos = ko.observableArray(JSON.parse(localStorage.getItem("events")));
        }
        

        self.isSaved = function(event) {
            for (i = 0; i < self.conta().savedEvents.length; i++) {
                if (self.conta().savedEvents[i].id == event.id) {
                    return true;
                }
            }
            return false;
        }
        
        self.update = function() {
            var temp1 = ko.observableArray([]);

            for(event of self.eventos()) {
                if (self.isSaved(event)) {
                    temp1.push({'id':event.id, 'title' : event.title, 'text' : event.text, 'data' : event.data, 'imagem' : event.imagem, 'saved': "Saved!"});
                } else {
                    temp1.push({'id':event.id, 'title' : event.title, 'text' : event.text, 'data' : event.data, 'imagem' : event.imagem, 'saved': "Save Event!"});
                }
            }
            self.eventos(temp1());
        }

        self.update()

        self.saveEvent = function(evento) {
            if (self.isSaved(evento)) {
                for (i=0; i < self.conta().savedEvents.length; i++) {
                    if (self.conta().savedEvents[i].id == evento.id) {
                        self.index = i;
                    }
                }
                self.conta().savedEvents.splice(self.index, 1);
            } else {
                self.conta().savedEvents.push(evento);
            }
            localStorage.setItem("ativa", JSON.stringify(self.conta()));
            self.update();
        }

        self.fillModal = function(evento) {
            console.log(evento);
            self.modalTitle(evento.title);
            self.modalText(evento.text);
            self.modalData(evento.data);
        }
    };
    return vm;
});