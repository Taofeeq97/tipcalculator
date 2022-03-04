

function showPrice(){
var bill=document.getElementById("Price").value;
var discount=document.getElementById("serviceQuality").value;
var tipAmount=bill*discount;
var people=document.getElementById("people").value;
var finalTip=tipAmount/people
document.getElementById("finalTip").innerHTML="TIP AMOUNT: <br>"+"$" finalTip+ "<br> PER PERSON" ;

}