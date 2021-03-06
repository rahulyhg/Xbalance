// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

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
        /*if (cordova.platformId == 'android') {
            StatusBar.backgroundColorByHexString("#2c333d");
        }*/
        app.initialize();
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider

    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
    })

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: "/search/:area/:category/:online/:offline",
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
            'menuContent': {}
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

    .state('app.shop', {
        url: "/shop/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/shop.html",
                controller: 'ShopCtrl'
            }
        }
    })

    
	.state('app.productdetail', {
        url: "/productdetail/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/buydetails.html",
                controller: 'ProductdetailCtrl'
            }
        }
    })	
.state('app.dealerprd', {
        url: "/dealerprd/:id",
        views: {
            'menuContent': {
                templateUrl: "templates/dealerprd.html",
                controller: 'DealerprdCtrl'
            }
        }
    })
        .state('app.addbalance', {
            url: "/addbalance",
            views: {
                'menuContent': {
                    templateUrl: "templates/addbalance.html",
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
    .state('app.myproducts', {
        url: "/myproducts",
        views: {
            'menuContent': {
                templateUrl: "templates/myproducts.html",
                controller: 'MyproductsCtrl'
            }
        }
    })
        .state('app.notification', {
        url: "/notification",
        views: {
            'menuContent': {
                templateUrl: "templates/notification.html",
                controller: 'NotificationCtrl'
            }
        }
    })
            .state('app.events', {
        url: "/events",
        views: {
            'menuContent': {
                templateUrl: "templates/events.html",
                controller: 'EventCtrl'
            }
        }
    })
    
    .state('app.orders', {
        url: "/orders",
        views: {
            'menuContent': {
                templateUrl: "templates/orders.html",
                controller: 'OrderCtrl'
            }
        }
    })  
    .state('app.products', {
        url: "/products/:name/:mem/:cat",
        views: {
            'menuContent': {
                templateUrl: "templates/product.html",
                controller: 'ProductCtrl'
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
    
    .state('app.checkout', {
        url: "/checkout/:prodid",
        views: {
            'menuContent': {
                templateUrl: "templates/checkout.html",
                controller: 'checkout'
            }
        }
    })

    .state('app.profileedit', {
        url: "/profile/edit",
        views: {
            'menuContent': {
                templateUrl: "templates/profile-edit.html",
                controller: 'ProfileCtrl'
            }
        }
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})

.filter('serverimage', function() {
    return function(image) {
        return imgpath + image;
    };
});
  
//.filter('serverimage', function () {
//    return function (image) {
//        if (image == null || image == '') {
//            return "http://wohlig.co.in/osb/uploads/samsung-galaxy-grand-neo-gt-i9060-dual-sim-android-mobile-phone-white-medium_80c25a81e9c2b1eb126cdb01dc6da394-80x80.jpg";
//        } else {
//            return imgpath + image;
//        }
//    };
//});

function partitionarray(myarray, number) {
            var arrlength = myarray.length;
            var newarray = [];
            var j = -1;
            for (var i = 0; i < arrlength; i++) {
                if (i % number == 0) {
                    j++;
                    newarray[j] = [];
                }
                newarray[j].push(myarray[i]);
            }
            return newarray;
        };

var formvalidation = function (allvalidation) {
    var isvalid2 = true;
    for (var i = 0; i < allvalidation.length; i++) {
//        console.log("checking");
//        console.log(allvalidation[i].field);
        if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
            allvalidation[i].validation = "ng-dirty";
            isvalid2 = false;
        }
    }
    return isvalid2;
};