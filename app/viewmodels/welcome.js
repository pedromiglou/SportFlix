define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var ctor = function () {
        self = this;
        self.modalTitle = ko.observable("");
        self.modalText = ko.observable("");

        self.noticias = ko.observableArray([{
                title: "Ronaldo hat-trick puts Portugal<br> in Nations League final",
                text: "Cristiano Ronaldo scored a superb hat-trick as Portugal reached the Nations League final with victory over Switzerland at the Estadio do Dragao.",
                data: "June 5, 2019",
                imagem: "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/14979/production/_107254348_gettyimages-1153925909.jpg"
            },
            {
                title: "New 2",
                text: "some new examlpe example example example example...",
                data: "May 14, 2019",
                imagem: "./img/Tennis.png"
            },
            {
                title: "New 3",
                text: "some new examlpe example example example example...",
                data: "May 14, 2019",
                imagem: "./img/Baseball.png"
            },
            {
                title: "New 4",
                text: "some new examlpe example example example example...",
                data: "May 14, 2019",
                imagem: "./img/Handball.png"
            },
            {
                title: "New 5",
                text: "some new examlpe example example example example...",
                data: "May 14, 2019",
                imagem: "./img/Swimming.png"
            },
            {
                title: "Ski pro saves a 40kg sheep stuck<br> on the top of a mountain",
                text: "Pete Oswald rescued a 40kg sheep stranded high up the Hector Mountains, in Otago - south of New Zealand. The 29-year-old was on location for a photo shoot when he noticed the ewe snowballing down the mountain. The ewe had a bleeding nose but was fine once it reached land and went on its way.",
                data: "September 10, 2014",
                imagem: "http://www.catersnews.com/wp-content/uploads/2014/11/4_CATERS_SHEEP_SAVED_BY_SKIER_05-800x498.jpg"
            }
        ]);

        self.fillModal = function(data) {
            self.modalTitle(data.title.replace("<br>",""));
            self.modalText(data.text);
        }

    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});



/* 
noticias =  ko.observableArray([{ titulo: "Noticia 1", imagem: "./img/Futebol.png" }, 
        {title: "noticia 1", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Basketball.png"}, 
        {title: "noticia 2", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Tennis.png"},
        {title: "noticia 3", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Baseball.png"},
        {title: "noticia 4", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Handball.png"},
        {title: "noticia 5", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Swimming.png"},
        {title: "noticia 6", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Golf.png"},
        {title: "noticia 7", text: "texto da noticia!! TEXTOOOOOOOOOO", data: "May 15, 2019", imagem: "./img/Track_and_Field.png"}]);
        
*/