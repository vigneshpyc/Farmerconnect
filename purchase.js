function total1(event){
    var price = document.getElementById("qtinp1").value;
    var total = price*30;
    document.getElementById("total-cost1").textContent = "RS."+total
}
function total2(event){
    var price = document.getElementById("qtinp2").value;
    var total = price*25;
    document.getElementById("total-cost2").textContent = "Rs."+total
}
function total3(event){
    var price = document.getElementById("qtinp3").value;
    var total = price*35;
    document.getElementById("total-cost3").textContent="Rs."+total
}
function payment(){
    window.open("file:///G:/HTML%20Learning/FarmerConnect/amount.html?")
}