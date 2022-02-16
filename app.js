//phone 
function updateProductValue(product, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    let phoneTotal = document.getElementById(product + '-total');
    phoneTotal.innerText = productNumber * 1219;
    
    let caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * 59;
}
//Phone
function raiseNum() {
    updateProductValue('phone', true);
}
function lowerNum() {
    updateProductValue('phone', false);
}

//casing
function addNum() {
    updateProductValue('case', true);
}
function minusNum() {
    updateProductValue('case', false);
}

//Sub-total, tax and Total
 