const myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/application', {
            templateUrl: 'view/application.html',
        })
        .when('/login', {
            templateUrl: 'view/login.html',
            controller: 'myController',
        })
        .when('/dashboard', {
            templateUrl: 'view/dashboard.html'
        }).otherwise({
            redirectTo: '/application'
        })
}])


myApp.controller('myController', function ($scope) {

});