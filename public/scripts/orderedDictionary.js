
class orderedDictionary {
  constructor() {
    this.head = null;
  }

  add(orderValue, value) {
    // Initialize listItem to be added to list
    var listItem = {
      orderValue : orderValue,
      value : value,
      left : null,
      right : null
    };

    // If there are no other values in the list
    if (this.head === null) {
      this.head = listItem;
    }
    // Otherwise, put item in order by orderValue
    else {
      // Start checking items at the head of the list
      var itemToCheck = this.head;
      while (true) {
        // Check if it needs to go to the left of itemToCheck
        if (listItem.orderValue < itemToCheck.orderValue) {
          // If it is first item in list
          if (itemToCheck.left === null) {
            listItem.right = itemToCheck;
            listItem.left = null;
            itemToCheck.left = listItem;
            this.head = listItem;
            // console.log("1");
            break;
          }
          // Otherwise, there should be an item that is ordered <= listItem on itemToCheck's left
          else {
            listItem.right = itemToCheck;
            listItem.left = itemToCheck.left;
            itemToCheck.left.right = listItem;
            itemToCheck.left = listItem;
            // console.log("2");
            break;
          }
        }
        // Check if it is equal
        else if (listItem.orderValue === itemToCheck.orderValue) {
          // If it is last item in list
          if (itemToCheck.right === null) {
            listItem.left = itemToCheck;
            listItem.right = itemToCheck.right;
            itemToCheck.right = listItem;
            // console.log("3");
            break;
          }
          // Check if there are other equal orderValues in list
          else if (itemToCheck.orderValue === itemToCheck.right.orderValue) {
            // Move to next item and restart loop
            itemToCheck = itemToCheck.right;
            // console.log("4");
          }
          // There should be an item that is ordered greater than itemToCheck to it's right
          else {
            listItem.left = itemToCheck;
            listItem.right = itemToCheck.right;
            itemToCheck.right.left = listItem;
            itemToCheck.right = listItem;
            // console.log("5");
            break;
          }
        }
        // listItem must be ordered greater than itemToCheck
        else {
          // Check if itemToCheck is last item in list
          if (itemToCheck.right === null) {
            listItem.left = itemToCheck;
            listItem.right = null;
            itemToCheck.right = listItem;
            // console.log("6");
            break;
          }
          // There must be an item to itemToCheck's right
          else {
            // Move to next item and restart loop
            itemToCheck = itemToCheck.right;
            // console.log("7");
          }
        }
      }
    }
  }

  getOrderedArray() {
    // Check if empty orderedDictionary
    if (this.head === null) {
      return null;
    }
    // Initialize return array
    var array = new Array();
    // Push the head's value first
    array.push(this.head.value);
    // Start at the head
    var itemToCheck = this.head;
    // Loop while itemToCheck isn't the last item in the list
    while (itemToCheck.right != null) {
      // Push the item to the right's value onto the end of the array
      array.push(itemToCheck.right.value);
      // Move to the next item in the array to check the right of that item, and reloop
      itemToCheck = itemToCheck.right;
    }
    // Return the full array
    return array;
  }
};
