/**
 * Created by linchun.li on 12/22/2015.
 */
window.onload = function () {
    showList();
    addList();
};


var data = {
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

/*显示列表*/
function showList() {

    var dList = document.getElementById('j_doing');
    var fList = document.getElementById('j_finish');

    var arrA = [];
    var arrB = [];

    for (var i = 0; i < data.Lidata.length; i++) {

        if (data.Lidata[i].ckbox) {
            arrB.push(data.Lidata[i]);
        } else {
            arrA.push(data.Lidata[i]);
        }

    }

    cIn(arrA, dList);
    cIn(arrB, fList);
    click_xbtn();
}

/*插入*/
function cIn(attr, cont) {

    for (var i = 0; i < attr.length; i++) {

        var aLi = document.createElement('li');

        if(data.Lidata == false){
            aLi.datase.id = 0;
        }else{
            aLi.dataset.id = attr[i]['id'];
        }

        var aCkbox = document.createElement('input');
        aCkbox.type = 'checkbox';
        aCkbox.checked = attr[i]['ckbox'];
        aLi.appendChild(aCkbox);
        var aP = document.createElement('p');
        aP.innerText = attr[i]['txt'];
        aLi.appendChild(aP);
        var aBtn = document.createElement('a');
        aBtn.innerText = 'x';
        aLi.appendChild(aBtn);
        cont.appendChild(aLi);

    }

}

/*添加列表*/
function addList() {

    var dList = document.getElementById('j_doing');
    var fList = document.getElementById('j_finish');
    var inputs = selectElement('head', 'input');

    inputs[0].onclick = function () {

        if (inputs[1].value != '') {

            var lastId = 0;
            var tt = inputs[1].value;

            if (data.Lidata == false) {
                data.Lidata.push(
                    {
                        ckbox: false,
                        txt: tt,
                        id: lastId
                    }
                )

            } else {
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

    }
}

/*改变状态*/
function changeStatus() {

}

/*点击x按钮删除li*/
function click_xbtn() {

    var dList = document.getElementById('j_doing');
    var fList = document.getElementById('j_finish');
    var allBtn = selectElement('content', 'a');
    for(var i = 0; i < allBtn.length; i++){
        allBtn[i].onclick = function () {
            deleteEle(parseInt(this.parentNode.dataset.id));
            dList.innerHTML = '';
            fList.innerHTML = '';
            showList();
        }
    }


}


/*删除*/
function deleteEle (num) {

    var indexId = -1;

    for(var i = 0; i < data.Lidata.length; i++){
        if(data.Lidata[i].id == num){
            indexId = i;
        }
    }

    if(indexId != -1){
        data.Lidata.splice(indexId, 1);
    }

    console.log(indexId,data.Lidata)
}



/*获取元素*/
function selectElement(fid, cname) {

    var fElement = document.getElementById(fid);
    var allElement = fElement.getElementsByTagName('*');
    var eleAttr = [];

    for (var i = 0; i < allElement.length; i++) {

        if (allElement[i].tagName == cname.toUpperCase()) {
            eleAttr.push(allElement[i]);
        }

    }
    return eleAttr;
}