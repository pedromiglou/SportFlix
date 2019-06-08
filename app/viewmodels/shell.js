define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'HighLights', moduleId: 'viewmodels/welcome', nav: false },
                { route: 'Events', moduleId: 'viewmodels/eventos', nav: true},
                { route: 'Sports', moduleId: 'viewmodels/desporto', nav: true },
                { route: 'Leagues', moduleId: 'viewmodels/ligas', nav: true },
                { route: 'MyAccount', moduleId: 'viewmodels/conta', nav: true },
                { route: 'League', moduleId: 'viewmodels/liga', nav: false },
                { route: 'Games', moduleId: 'viewmodels/desporto1', nav: false },
                { route: 'Team', moduleId: 'viewmodels/equipa', nav: false },
                { route: 'WatchGame', moduleId: 'viewmodels/video', nav: false }

            ]).buildNavigationModel();
            
            return router.activate();
        },
    };
});