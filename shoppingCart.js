document.getElementById("iPhoneIncrement").addEventListener('click',function(){
    increment("iPhone");
    totalCalculation();
});
document.getElementById("iPhoneDecrement").addEventListener('click',function(){
    decrement("iPhone");
    totalCalculation();
});
document.getElementById("casingIncrement").addEventListener('click',function(){
    increment("casing");
    totalCalculation();
});
document.getElementById("casingDecrement").addEventListener('click',function(){
    decrement("casing");
    totalCalculation();
});
function increment(id){
    var currentQty = document.getElementById(id+"Qty");
    var currentQtyValue = currentQty.value; 
    currentQty.value = ++currentQtyValue;

}
function decrement(id){
    var currentQty = document.getElementById(id+"Qty");
    var currentQtyValue = currentQty.value - 1; 
    if(currentQtyValue<0) currentQtyValue = 0;
    currentQty.value = currentQtyValue;
}
function totalCalculation(){
    var iPhoneRate = document.getElementById("iPhoneRate").innerText;
    var iPhoneQty = document.getElementById("iPhoneQty").value;
    var casingRate = document.getElementById("casingRate").innerText;
    var casingQty = document.getElementById("casingQty").value;
    console.log(iPhoneRate,iPhoneQty,casingRate,casingQty);
    var subTotal = (iPhoneRate * iPhoneQty) + (casingRate * casingQty);
    var vat = Math.round((subTotal * 5) / 100);
    var total = subTotal + vat;

    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("vat").innerText = vat;
    document.getElementById("total").innerText = total;
    
}