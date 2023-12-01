let accName = document.getElementById("AccName");
let accNo = document.getElementById("AccNo");
let typeC = document.getElementById("current");
let typeS = document.getElementById("saving");
let inpBalance = document.getElementById("inpBalance");

let createBtn = document.getElementById("createBtn");

let showName = document.getElementById("ShowName")
let showAcc = document.getElementById("ShowAcc")
let ShowBalance = document.getElementById("ShowBalance")
    

function check(){
    let recordName = accName.value;
    let recordAcc = accNo.value;
    let recordBalance = inpBalance.value;
    if(typeC.checked==false&&typeS.checked==false){
        alert("please Select the Account type")
    }
    else{
        showName.innerHTML =  "&nbsp" + "&nbsp" + recordName;
        showAcc.innerHTML =  "&nbsp" + "&nbsp" + recordAcc;
        ShowBalance.innerHTML = "&nbsp" + "&nbsp" + "₹"+ recordBalance;
    }
}
createBtn.addEventListener("click",check);