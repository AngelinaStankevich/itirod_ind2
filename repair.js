export class RadioReceipt {
  constructor(group, brand, receptionDate, completionDate, completed) {
    this.group = group;
    this.brand = brand;
    this.receptionDate = receptionDate;
    this.completionDate = completionDate;
    this.completed = completed;
  }

  static getReadyOrdersToday(receipts) {
    const today = new Date().toISOString().slice(0, 10);
    const readyOrders = {};

    receipts.forEach(receipt => {
      if (receipt.completionDate === today) {
        if (!readyOrders[receipt.group]) {
          readyOrders[receipt.group] = [];
        }
        readyOrders[receipt.group].push(receipt);
      }
    });

    return readyOrders;
  }

  static getDelayedOrders(receipts) {
    const today = new Date();
    const delayedOrders = receipts.filter(receipt => {
      if (!receipt.completed) {
        return new Date(receipt.completionDate) < today;
      }
    });

    return delayedOrders;
  }

  static sortByCompletionDate(receipts) {
    return receipts.sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate));
  }

  static searchReceipts(receipts, groupName, receptionDate, completionDate) {
    return receipts.filter(receipt => {
      let matches = true;
      if (groupName && receipt.group !== groupName) {
        matches = false;
      }
      if (receptionDate && receipt.receptionDate !== receptionDate) {
        matches = false;
      }
      if (completionDate && receipt.completionDate !== completionDate) {
        matches = false;
      }
      return matches;
    });
  }
}
