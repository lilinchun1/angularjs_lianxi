/**
 * Created by linchun.li on 12/22/2015.
 */
window.onload = function () {
    addList();
};

function addList(){
    var inputs = selectElement('head', 'input');
    console.log(inputs);
}

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