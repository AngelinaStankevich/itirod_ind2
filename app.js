import { RadioReceipt } from './repair.js';

const receiptForm = document.getElementById('receiptForm');
const resultsContainer = document.getElementById('results');
const searchButton = document.getElementById('searchButton');
const sortButton = document.getElementById('sortButton');

let receipts = [];

receiptForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const group = document.getElementById('group').value;
  const brand = document.getElementById('brand').value;
  const receptionDate = document.getElementById('receptionDate').value;
  const completionDate = document.getElementById('completionDate').value;
  const completed = document.getElementById('completed').checked;

  const receipt = new RadioReceipt(group, brand, receptionDate, completionDate, completed);
  receipts.push(receipt);
  displayReceipt(receipt);
});

searchButton.addEventListener('click', function() {
  const groupName = document.getElementById('searchGroup').value;
  const receptionDate = document.getElementById('searchReceptionDate').value;
  const completionDate = document.getElementById('searchCompletionDate').value;

  const searchResults = RadioReceipt.searchReceipts(receipts, groupName, receptionDate, completionDate);
  displaySearchResults(searchResults);
});

sortButton.addEventListener('click', function() {
  const sortedReceipts = RadioReceipt.sortByCompletionDate(receipts);
  displaySortedReceipts(sortedReceipts);
});

function displayReceipt(receipt) {
  const receiptElement = document.createElement('div');
  receiptElement.classList.add('receipt');
  receiptElement.innerHTML = `
    <p><strong>Группа изделий:</strong> ${receipt.group}</p>
    <p><strong>Марка изделия:</strong> ${receipt.brand}</p>
    <p><strong>Дата приемки:</strong> ${receipt.receptionDate}</p>
    <p><strong>Дата исполнения заказа:</strong> ${receipt.completionDate}</p>
    <p><strong>Выполнен:</strong> ${receipt.completed ? 'Да' : 'Нет'}</p>
  `;
  resultsContainer.appendChild(receiptElement);
}

function displaySearchResults(results) {
  resultsContainer.innerHTML = '';
  results.forEach(result => {
    displayReceipt(result);
  });
}

function displaySortedReceipts(receipts) {
  resultsContainer.innerHTML = '';
  receipts.forEach(receipt => {
    displayReceipt(receipt);
  });
}
