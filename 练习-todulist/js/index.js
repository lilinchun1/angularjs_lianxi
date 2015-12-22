/**
 * Created by linchun.li on 12/22/2015.
 */
window.onload = function () {
    showList();
    addList();
};


var data = {
    "Lidata":
    [
        {
            ckbox: true,
            txt: '11111111111',
            id: 1
        },
        {
            ckbox: true,
            txt: '22222222222',
            id: 2
        },
        {
            ckbox: false,
            txt: '33333333333',
            id: 3
        },
        {
            ckbox: false,
            txt: '4444444444',
            id: 4
        }
    ]
};

/*显示列表*/
function showList(){

    var dList = document.getElementById('j_doing');
    var fList = document.getElementById('j_finish');

    var arrA = [];
    var arrB = [];

    for(var i = 0; i < data.Lidata.length; i++){

        if(data.Lidata[i].ckbox){
            arrB.push(data.Lidata[i]);
        }else{
            arrA.push(data.Lidata[i]);
        }

    }

    for(var i = 0; i < arrA.length; i++){

        var aLi = document.createElement('li');
        var aCkbox = document.createElement('input');
        aCkbox.type = 'checkbox';
        aCkbox.checked = arrA[i]['ckbox'];
        aLi.appendChild(aCkbox);
        var aP = document.createElement('p');
        aP.innerText = arrA[i]['txt'];
        aLi.appendChild(aP);
        var aBtn = document.createElement('a');
        aBtn.innerText = 'x';
        aLi.appendChild(aBtn);
        dList.appendChild(aLi);
    }

    for(var i = 0; i < arrB.length; i++){

        var aLi = document.createElement('li');
        var aCkbox = document.createElement('input');
        aCkbox.type = 'checkbox';
        aCkbox.checked = arrB[i]['ckbox'];
        aLi.appendChild(aCkbox);
        var aP = document.createElement('p');
        aP.innerText = arrB[i]['txt'];
        aLi.appendChild(aP);
        var aBtn = document.createElement('a');
        aBtn.innerText = 'x';
        aLi.appendChild(aBtn);
        fList.appendChild(aLi);
    }

}

/*插入*/
function cIn(){

    var aLi = document.createElement('li');
    var aCkbox = document.createElement('input');
    aCkbox.type = 'checkbox';
    aCkbox.checked = arrB[i]['ckbox'];
    aLi.appendChild(aCkbox);
    var aP = document.createElement('p');
    aP.innerText = arrB[i]['txt'];
    aLi.appendChild(aP);
    var aBtn = document.createElement('a');
    aBtn.innerText = 'x';
    aLi.appendChild(aBtn);
    fList.appendChild(aLi);

}

/*添加列表*/
function addList(){
    var dList = document.getElementById('j_doing');
    var fList = document.getElementById('j_finish');
    var inputs = selectElement('head', 'input');

    inputs[0].onclick = function () {

        if(inputs[1].value != ''){

            var lastId = 0;
            var tt = inputs[1].value;

            if(data.Lidata == false){
                data.Lidata.push(
                    {
                        ckbox: false,
                        txt: tt,
                        id: lastId
                    }
                )
            }else{
                var lastId = data.Lidata[data.Lidata.length - 1]['id'];
                data.Lidata.push(
                    {
                        ckbox: false,
                        txt: tt,
                        id: ++lastId
                    }
                )
            }


        }
        dList.innerHTML = '';
        fList.innerHTML = '';
        showList();
        console.log(lastId);

    }
}

/*改变状态*/
function changeStatus(){

}


/*获取元素*/
function selectElement(fid, cname){

    var fElement = document.getElementById(fid);
    var allElement = fElement.getElementsByTagName('*');
    var eleAttr = [];

    for(var i = 0; i < allElement.length; i++){

        if(allElement[i].tagName == cname.toUpperCase()){
            eleAttr.push(allElement[i]);
        }

    }
    return eleAttr;
}