// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.overlaysWebView(true);
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "templates/search.html",
                controller: 'SearchCtrl'
            }
        }
    })

    .state('app.about', {
        url: "/aboutus",
        views: {
            'menuContent': {
                templateUrl: "templates/aboutus.html",
                controller: 'AboutCtrl'
            }
        }
    })

    .state('app.faq', {
        url: "/faq",
        views: {
            'menuContent': {
                templateUrl: "templates/faq.html",
                controller: 'FaqCtrl'
            }
        }
    })

    .state('app.browse', {
        url: "/browse",
        views: {
            'menuContent': {
                templateUrl: "templates/browse.html"
            }
        }
    })
        .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('app.selling', {
            url: "/selling",
            views: {
                'menuContent': {
                    templateUrl: "templates/selling.html",
                    controller: 'SellingCtrl'
                }
            }
        })
        .state('app.product', {
            url: "/product",
            views: {
                'menuContent': {
                    templateUrl: "templates/product.html",
                    controller: 'ProductCtrl'
                }
            }
        })
        .state('welcome', {
            url: "/welcome",
            templateUrl: "templates/welcome.html",
            controller: 'WelcomeCtrl'
        })


    .state('app.balance', {
        url: "/balance",
        views: {
            'menuContent': {
                templateUrl: "templates/yourbalance.html",
                controller: 'YourBalCtrl'
            }
        }
    })
        .state('app.transaction', {
            url: "/transaction",
            views: {
                'menuContent': {
                    templateUrl: "templates/transaction.html",
                    controller: 'TransactionCtrl'
                }
            }
        })
        .state('app.profile', {
            url: "/profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/profile.html",
                    controller: 'ProfileCtrl'
                }
            }
        })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/welcome');
});