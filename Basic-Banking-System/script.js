function sendMoney() {
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

   if (enterAmount > myAccountBalance) {
      alert("Insufficient Balance.");
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var updatedAccountBalance = myAccountBalance - enterAmount;

      document.getElementById("myAccountBalance").innerText = updatedAccountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;

      alert(`Successful Transaction!!\nRupees ${enterAmount} is sent to ${enterName}@email.com.`);

      // Transaction history
      var createPTag = document.createElement("li");
      var transactionDate = new Date().toString();
      var transactionDetails = `Rupees ${enterAmount} is sent to recipient with Email-id ${enterName}@email.com on ${transactionDate}.`;
      var textNode = document.createTextNode(transactionDetails);
      createPTag.appendChild(textNode);

      var transactionHistory = document.getElementById("transaction-history-body");
      transactionHistory.insertBefore(createPTag, transactionHistory.firstChild);
   }
}
