function calculateLoan() {
    var salary = parseFloat(document.getElementById('salary').value);
    var commitments = parseFloat(document.getElementById('currentCommitments').value);
    var amountRequested = parseFloat(document.getElementById('financialAmount').value);
    var term = parseInt(document.getElementById('paymentOptions').value);
    var hasFinancialIssues = document.getElementById('financialIssues').checked;
    var isServiceStopped = document.getElementById('serviceStopped').checked;

    var eligibility = "غير مؤهل";

    // مثلاً، يمكننا تحديد جدارة الحصول على القرض بناءً على عوامل مختلفة
    if (!hasFinancialIssues && !isServiceStopped && (salary - commitments) > (amountRequested / term)) {
        eligibility = "مؤهل";
    }

    document.getElementById('loanEligibility').innerText = "جدارة الحصول على القرض: " + eligibility;
}
