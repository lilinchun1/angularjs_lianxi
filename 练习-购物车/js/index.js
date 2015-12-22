/**
 * Created by linchun.li on 12/21/2015.
 */
var apps = angular.module('a1', []);

apps.controller('ctrl-1', [
    '$scope',
    function ($scope) {

        $scope.data = [
            {
                id: 1000,
                name: 'iphone5s',
                quantity: 3,
                prict: 4300
            },
            {
                id: 3300,
                name: 'iphone5',
                quantity: 30,
                prict: 3600
            },
            {
                id: 230,
                name: 'iphone6s',
                quantity: 29,
                prict: 5300
            },
            {
                id: 1001,
                name: 'mac',
                quantity: 2,
                prict: 13000
            },
            {
                id: 1100,
                name: 'macbook',
                quantity: 12,
                prict: 14300
            }
        ];

        /*计算总价*/
        $scope.totalPrice = function () {
            var total = 0;
            angular.forEach($scope.data, function (item) {
                total += parseInt(item.quantity * item.prict);
            });

            return total;
        }


        /*计算总购买数*/
        $scope.totalQuantity = function () {
            var total = 0;
            angular.forEach($scope.data, function (item) {
                total += item.quantity;
            });

            return total;
        };


        $scope.remove = function (id) {

            var index = -1;
            angular.forEach($scope.data, function (item, key) {
                if(item.id == id){
                    index = key;
                }
            });

            if(index !== -1){
                $scope.data.splice(index, 1)
            }
        };


        $scope.clearAll = function () {

            $scope.data = [];

        };

        $scope.add = function (id) {

            var index = -1;
            angular.forEach($scope.data, function (item, key) {
                if(item.id == id){
                    index = key;
                }
            });

            if(index !== -1){
                ++$scope.data[index].quantity;
            }
        };

        $scope.reduce = function (id) {

            var index = -1;
            angular.forEach($scope.data, function (item, key) {
                if(item.id == id){
                    index = key;
                }
            });

            if(index !== -1){
                var item = $scope.data[index];
                if(item.quantity > 1){
                    --item.quantity;
                }else{
                    var returnKey = confirm('是否从购物车内删除该产品')
                    if(returnKey){
                        $scope.remove(id);
                    }
                }
            }
        };
        
        $scope.$watch('data', function (newValue, oldValue) {
            
            angular.forEach(newValue, function (item, key) {

                if(item.quantity < 1){
                    var returnKey = confirm('是否从购物车内删除该产品');
                    if(returnKey){
                        $scope.remove(item.id);
                    }else{
                        item.quantity = oldValue[key].quantity;
                    }

                }

            })
            
        },true)

    }
]);