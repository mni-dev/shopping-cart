//phone 
function updatePhoneNumber(isIncreasing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if (isIncreasing == true) {
        phoneNumber = parseInt(phoneNumber) + 1;
    }
    else if (phoneNumber > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
}
function raiseNum() {
    updatePhoneNumber(true);
}
function lowerNum() {
    updatePhoneNumber(false);
}

//casing
function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}
function addNum() {
    updateCaseNumber(true);
}
function minusNum() {
     updateCaseNumber(false);
}