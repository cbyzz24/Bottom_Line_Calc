function calcBankBal(){
    const bank1 = document.getElementById("bank1Balance").value;
    const bank2 = document.getElementById('bank2Balance').value;
    const bankCalcBtn = document.getElementById("bankBtn");
    const bankDisplay = document.getElementById("bankTotalDisplay");
    let bank1amt = Number(bank1);
    let bank2amt = Number(bank2);
    bankDisplay.textContent = bank1amt + bank2amt;
}

function calcTransTotal(){
    const transAmt1 = document.getElementById("transAmt1").value;
    const transAmt2 = document.getElementById("transAmt2").value;
    const transAmt3 = document.getElementById("transAmt3").value;
    const transAmt4 = document.getElementById("transAmt4").value;
    const transAmt5 = document.getElementById("transAmt5").value;
    const transAmt6 = document.getElementById("transAmt6").value;
    const transBtn = document.getElementById("transBtn");
    const transTotalDisplay = document.getElementById("transTotalDisplay");
    let tAmount1 = Number(transAmt1);
    let tAmount2 = Number(transAmt2);
    let tAmount3 = Number(transAmt3);
    let tAmount4 = Number(transAmt4);
    let tAmount5 = Number(transAmt5);
    let tAmount6 = Number(transAmt6);

    transTotalDisplay.textContent = tAmount1 + tAmount2 + tAmount3 + tAmount4 + tAmount5 + tAmount6;
}


function calcNetCash(){
    const bank1 = document.getElementById("bank1Balance").value;
    const bank2 = document.getElementById('bank2Balance').value;
    const bankCalcBtn = document.getElementById("bankBtn");
    const bankDisplay = document.getElementById("bankTotalDisplay");
    let bank1amt = Number(bank1);
    let bank2amt = Number(bank2);
    const transAmt1 = document.getElementById("transAmt1").value;
    const transAmt2 = document.getElementById("transAmt2").value;
    const transAmt3 = document.getElementById("transAmt3").value;
    const transAmt4 = document.getElementById("transAmt4").value;
    const transAmt5 = document.getElementById("transAmt5").value;
    const transAmt6 = document.getElementById("transAmt6").value;
    const transBtn = document.getElementById("transBtn");
    const transTotalDisplay = document.getElementById("transTotalDisplay");
    let tAmount1 = Number(transAmt1);
    let tAmount2 = Number(transAmt2);
    let tAmount3 = Number(transAmt3);
    let tAmount4 = Number(transAmt4);
    let tAmount5 = Number(transAmt5);
    let tAmount6 = Number(transAmt6);
    const totalUpcmgAmt = document.getElementById("totalUpcmgAmt").value;
    const netCashDisplay = document.getElementById("netCashDisplay");
    let totalUcAmt = Number(totalUpcmgAmt);
    netCashDisplay.textContent = (bank1amt + bank2amt) - (tAmount1 + tAmount2 + tAmount3 + tAmount4 + tAmount5 + tAmount6 + totalUcAmt);
}