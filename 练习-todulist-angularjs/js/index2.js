var apps = angular.module('toDoList', []);


apps.controller('ctrl-1', [
    '$scope',
    function ($scope) {

        $scope.data = {
            "Lidata": [
                {
                    ckbox: true,
                    txt: '11111111111',
                    id: 0
                },
                {
                    ckbox: true,
                    txt: '22222222222',
                    id: 1
                },
                {
                    ckbox: false,
                    txt: '33333333333',
                    id: 2
                },
                {
                    ckbox: false,
                    txt: '4444444444',
                    id: 3
                }
            ]
        };


            $scope.arr1 = function (str) {
                var attr = [];
                for(var i = 0; i < str.length; i++){
                    if(str[i].ckbox == false){
                        attr.push(str[i]);
                    }
                }
                return attr;
            };

            $scope.arr2 = function (str) {
                var attr = [];
                for(var i = 0; i < str.length; i++){
                    if(str[i].ckbox){
                        attr.push(str[i]);
                    }
                }
                return attr;
            };

        $scope.arrA = $scope.arr1($scope.data.Lidata);
        $scope.arrB = $scope.arr2($scope.data.Lidata);

        $scope.$watch('data.Lidata', function(newValue, oldValue){
            console.log(newValue, oldValue)
            if(newValue == oldValue){
                return
            } else {
                $scope.arrA = $scope.arr1($scope.data.Lidata);
                $scope.arrB = $scope.arr2($scope.data.Lidata);
            }
        },true);


        /*点击添加条目*/
        $scope.txt = '';
        $scope.addClick = function () {

            if($scope.txt != ''){

                if($scope.data.Lidata == false){
                    $scope.data.Lidata.push(
                        {
                            ckbox: false,
                            txt:  $scope.txt,
                            id: 0
                        }
                    )
                }else{
                    $scope.data.Lidata.push(
                        {
                            ckbox: false,
                            txt:  $scope.txt,
                            id: $scope.data.Lidata[$scope.data.Lidata.length -1]['id'] + 1
                        }
                    )
                }
            }

        };

        /*点击x按钮 删除当前行*/
        $scope.deleteLine = function (id) {
            deleteList(id);
        };

        /*清空列表*/
        $scope.clearAll = function () {
            $scope.data.Lidata = [];
        };

        /*删除*/
        function deleteList (num) {

            var indexId = -1;

            for (var i = 0; i < $scope.data.Lidata.length; i++) {
                if ($scope.data.Lidata[i].id == num) {
                    indexId = i;
                }
            }

            if (indexId != -1) {
                $scope.data.Lidata.splice(indexId, 1);
            }

        }

        /*改变状态*/

        $scope.changeCk = function (n) {

            var indexId = -1;
            for(var i = 0; i <$scope.data.Lidata.length; i++){

                if($scope.data.Lidata[i].id == n){
                    indexId = i;
                }

            }

            if(indexId != -1){
                $scope.data.Lidata[indexId].ckbox = !($scope.data.Lidata[indexId].ckbox);
            }

        };


    }
]);