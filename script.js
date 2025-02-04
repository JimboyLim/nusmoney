// (c) Anuflora Systems

//This exercise is to revise original .js to output only the total balance.
const balance = document.getElementById('balance');
const money_plus = document.getElementById('deposit');
const money_minus = document.getElementById('loan');
const list = document.getElementById('list');
const form = document.getElementById('form');
const custname = document.getElementById('custname');
const reco = document.getElementById('reco');

//hard-coded data (not from JSON)
const TransactionDataAll = [
   { id: 1, customername: 'Flora', bank: 'DBS', deposit: 3000, loan: 2000 },
   { id: 2, customername: 'Flora', bank: 'OCBC', deposit: 4000, loan: 2000 },
   { id: 3, customername: 'Mikhil', bank: 'DBS', deposit: 3000, loan: 2000 },
   { id: 4, customername: 'Sashil', bank: 'UOB', deposit: 6000, loan: 1000 },
   { id: 5, customername: 'Jack', bank: 'UOB', deposit: 6000, loan: 8000 }

  ];

 //var TransactionData = null;  //this seems to be doing nothing

//2 Add transactions to DOM list
function addTransactionDOM(transaction) {
  const deposit_item = document.createElement('li');

  //deposit_item.classList.add('plus');         //this seems to be doing nothing
  deposit_item.innerHTML = `${transaction.customername}-${transaction.bank}  <span> $ ${Math.abs(transaction.deposit )}</span> `;

  list.appendChild(deposit_item);

  const loan_item = document.createElement('li');

  //loan_item.classList.add('minus');          //this seems to be doing nothing
  loan_item.innerHTML = `${transaction.customername}-${transaction.bank} <span> -$ ${Math.abs(transaction.loan)}</span>`;

  list.appendChild(loan_item);
///


}

//3  Update the balance, deposit and loan
function updateValues() {
  const deposits = TransactionData.map(transaction => transaction.deposit);
  const loans = TransactionData.map(transaction => transaction.loan);

  const total_deposit = deposits.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const total_loan = loans.reduce((acc, item) => (acc += item), 0).toFixed(2);

  //BALANCE
  bal = total_deposit - total_loan;     //Jim removed const to make it global
  balance.innerText = `$${bal}`;
 
  //DEPOSIT AND LOAN
  money_plus.innerText = `$${total_deposit}`;
  money_minus.innerText = `$${total_loan}`;
  reco.innerText = (bal >= 0)? "You Have Sound Financial Health": "Your Financial Health is Weak";
}


// 5 Jim New Function;
//function ()


// 1 Initialize;
function init() {
  list.innerHTML = '';
  reco.innerHTML = '';
  TransactionData = [...TransactionDataAll];    //the 3 dots is syntax to say "entire" array
  TransactionData.forEach(addTransactionDOM);   //calls 2, 
  updateValues();                               //calls 3
}

// 4 Filter
function filterTransaction(e) {
  e.preventDefault();  //to prevent form from submitting and refreshing the page
  list.innerHTML = '';
  //reco.innerHTML = ''; //this is doing nothing
  TransactionData = TransactionDataAll.filter(tran => tran.customername == custname.value);
  console.log(TransactionData);
  updateValues();                                   //calls 3    
    
 //Start editing here : 
 // TransactionData.forEach(addTransactionDOM);       //calls 2
   
  
//balance
const totalbalance = document.createElement('li');
//arrlength = TransactionData.length;

let mybanks = TransactionData.map(x =>x.bank);
console.log(mybanks);

totalbalance.innerHTML = `${custname.value} : total Holdings@:  ${mybanks} <span> $${(bal)}</span>`;
list.appendChild(totalbalance);
}

init();
form.addEventListener('submit', filterTransaction);
