var apps = angular.module('toDoList', []);

/*找到未完成的*/
apps.factory('$doing', function () {

    return{
        arr: function (s) {

            var attr = [];
            for(var i = 0; i < s.length; i++){
                if(s[i].ckbox == false){
                    attr.push(s[i]);
                }
            }
            return attr;

        }
    }

});

/*找到完成的*/
apps.factory('$finish', function () {

    return{
        arr: function (s) {

            var attr = [];
            for(var i = 0; i < s.length; i++){
                if(s[i].ckbox){
                    attr.push(s[i]);
                }
            }
            return attr;

        }
    }

});




apps.controller('ctrl-1', [
    '$scope', '$doing', '$finish',
    function ($scope, $doing, $finish) {

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

        /*全体数组*/
        var arrAll = $scope.data.Lidata;
        /*渲染列表*/
        function showList(){
            $scope.arrA = $doing.arr(arrAll);
            $scope.arrB = $finish.arr(arrAll);
        }

        showList();

        $scope.txt = '';
        /*点击添加条目*/
        $scope.addClick = function () {

            if($scope.txt != ''){

                if(arrAll == false){
                    arrAll.push(
                        {
                            ckbox: false,
                            txt:  $scope.txt,
                            id: 0
                        }
                    )
                }else{
                    arrAll.push(
                        {
                            ckbox: false,
                            txt:  $scope.txt,
                            id: arrAll[arrAll.length -1]['id'] + 1
                        }
                    )
                }
            }

            showList();

        };

        /*点击x按钮 删除当前行*/
        $scope.deleteLine = function (id) {
            deleteList(id);
            showList();
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






    }
]);