angular.module('armsAlert', ['ngRoute']);

angular.module('armsAlert')
.config(Router);

Router.$inject=['$routeProvider'];
/*var app = angular.module("armsAlert", ["ngRoute"]);*/
/*
armsAlert.config(function($routeProvider) {*/
            function Router($routeProvider) {
                
                console.log("Route is running");
                $routeProvider
                    .when('/', {
                        templateUrl: "/views/home.html",
                        controller: 'armsController as aCtrl',
                    })

                    .when('/enter', {
                        templateUrl: "/views/enter.html",
                        controller: 'alertController as lCtrl',
                    })
                    .when('/menu', {
                        templateUrl: "/views/menu.html",
                        controller: 'tableController as tCtrl',
                    });

                $routeProvider.otherwise({
                    redirectTo: '/'
                });
            };


        angular.module('armsAlert')
        .controller('armsController', controllerFunction);

        function controllerFunction() {
            var aCtrl = this;
            //aCtrl.storage=localStorage()
            window.aCtrl = aCtrl;

        aCtrl.saveInput = function () {
                var inputToSave = {
                    "model": aCtrl.model,
                    "lPrice": aCtrl.lPrice,
                    "hPrice": aCtrl.hPrice,
                    "location": aCtrl.location,
                    "distance": aCtrl.distance,
                
                }
                localStorage.setItem("input", JSON.stringify(inputToSave));
                console.log(localStorage.getItem("input"));
                console.log(JSON.parse(localStorage.getItem("input")));
            } 
           

            aCtrl.saveData = function() {
                var dataToSave = {
                    "gunModel": aCtrl.gunModel,
                    "lowestPrice": aCtrl.lowestPrice,
                    "highestPrice": aCtrl.highestPrice,
                    "location": aCtrl.location,
                    "distance": aCtrl.distance,
                    "Gunbroker": aCtrl.Gunbroker,
                    "GunsAmerica": aCtrl.GunsAmerica,
                    "ARMSLIST": aCtrl.ARMSLIST,
                    "GunListing": aCtrl.GunListing,
                    "ShooterSwap": aCtrl.ShooterSwap,
                    "JGSales": aCtrl.JGSales,
                    "BuyUsedGuns": aCtrl.BuyUsedGuns,
                    "BudsGunShop": aCtrl.BudsGunShop,
                }    
                
                localStorage.setItem("Data", JSON.stringify(dataToSave));
                console.log(localStorage.getItem("Data"));
                console.log(JSON.parse(localStorage.getItem("Data")));
              
                console.log("Attempting to save data...");
                window.location.href = "#/enter";
            }

        }

        angular.module('armsAlert')
        .controller('alertController', alertFunction);




        function alertFunction() {

            console.log("Inside alertController")
            var lCtrl = this;
            window.lCtrl = lCtrl;

            //lCtrl.storage=localStorage()
                     
               
                        
                lCtrl.savedata = function(){
                    var dataToSave2 = {
                        "phoneNumber": lCtrl.phoneNumber,
                        "eMail" : lCtrl.eMail,
                        "facebook": lCtrl.facebook,
                        "armsAlertOnly": lCtrl.armsAlertOnly,
                    }       

                    console.log("phone: ", lCtrl.phoneNumber);
                    console.log("dataToSave2: ", dataToSave2);    

                    localStorage.setItem("Data2", JSON.stringify(dataToSave2));
                    //console.log(localStorage.getItem("Data2"));
                    //console.log(JSON.parse(localStorage.getItem("Data2")));
                
                    console.log("Attempting to save data...");
                    window.location.href = "#/home";
                }
            }
        

        angular.module('armsAlert')
        .controller('tableController', tableFunction);

        function tableFunction() {
            var tCtrl = this;
            tCtrl.storage=localStorage()
        }
















































        /*angular.module('armsAlert', ['ngRoute]);

        angular.module('armsAlert')
        .config(Router)

        Router.$inject = ['$routeProvider']
        function Router($routeProvider) {

            $routeProvider.otherwise({ redirectTo : '/secondArms' });


            $routeProvider
        	.when('/RefactorUmidterm', {
        		'/view/armsHome.html)
        	})
        		.when('/a?', {
        		'/view/secondArms.html)
        	});
        	
        	
        }

        angular.module ('armsAlert', )
        .controller('armsController', armsFunction)

        function armsFunction (){
        	var aCtrl = this;
        	aCtrl.greeting = "",
        }

        angular.module ('armsAlert', )
        .controller('alertController', alertFunction)
        	var lCtrl = this;
        	lCtrl.greeting = "",




























        /*angular.module('AA', [])
            .controller('inputController', aaController)
            .factory('AAFactory', armsFactory)


        function aaController() {
            var aCtrl = this;
            aaController.aCtrl = true;

            aCtrl.addItem = function() {
                aCtrl.item.push(aCtrl.newItem);
                aCtrl.newItem = {};
            };

            function
        }
        }

        function armsFactory() {
            var mCtrl = this;
            mCtrl.items = AAFactory.armsList;

            armsFactory.mCtrl = true;

        }

        function armsFactory() {
            armsList = [{
                search: '',
        /*        dateStart: '',
                dateEnd: '',*/
        /*        lowest: '',
                highest: '',
                location: '',
                distance: '',
            }];
            return {
                armsList: armsList
            }secondList = [{
                phNumber: '',
                eMail: '',
                facebook: '',
            }]
            
        }
        */