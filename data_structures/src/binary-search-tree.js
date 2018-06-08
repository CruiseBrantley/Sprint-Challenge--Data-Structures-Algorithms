class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    let stack = [];
    let storageArray = [];

    stack.push({ value: this.value, left: this.left, right: this.right });

    while (stack.length !== 0) {
      for (let i = 0; i < stack.length; i++) {
        let node = stack.pop();
        storageArray[i] = cb(node.value);

        if (node.right) {
          stack.push(node.right);
        }
        if (node.left) {
          stack.push(node.left);
        }
      }
    }
    return storageArray;
  }

  breadthFirstForEach(cb) {
    /* Your code here */
    let queue = [];
    let storageArray = [];

    queue.push({ value: this.value, left: this.left, right: this.right });

    while (queue.length !== 0) {
      for (let i = 0; i < queue.length; i++) {
        let node = queue.shift();
        storageArray[i] = cb(node.value);

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return storageArray;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;
