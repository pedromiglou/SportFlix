define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var ctor = function () {
        
        noticias =  ko.observableArray([
            {title: "New 1", text: "some new examlpe example example example example...", data: "May 15, 2019", imagem: "./img/Futebol.png" }, 
            {title: "New 1", text: "some new examlpe example example example example...", data: "May 14, 2019", imagem: "./img/Basketball.png"}, 
            {title: "New 2", text: "some new examlpe example example example example...", data: "May 14, 2019", imagem: "./img/Tennis.png"},
            {title: "New 3", text: "some new examlpe example example example example...", data: "May 14, 2019", imagem: "./img/Baseball.png"},
            {title: "New 4", text: "some new examlpe example example example example...", data: "May 14, 2019", imagem: "./img/Handball.png"},
            {title: "New 5", text: "some new examlpe example example example example...", data: "May 14, 2019", imagem: "./img/Swimming.png"}]);

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