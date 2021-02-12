// 1. Create a linked list class
// Write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)

    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node
            }
            counter++;
            node = node.next;
        }
        return null
    }
    insertBefore(item, index) {

        if (!this.head) {
            this.head = new _Node(item);
            return
        }
        if (index === 0) {
            this.head = new _Node(data, this.head);
            return
        }

        let previous = this.getAt(index - 1);
        let newNode = new _Node(item);
        newNode.next = previous.next;
        previous.next = newNode;

        return this.head;
    }

    insertAfter(item, index) {

        if (!this.head) {
            this.head = new _Node(item);
            return
        }
        if (index === 0) {
            this.head = new _Node(data, this.head);
            return
        }

        let after = this.getAt(index + 1);
        let newNode = new _Node(item);
        newNode.next = after.next;
        after.next = newNode;

        return this.head;
    }
    insertAt(item, index) {

        if (!this.head) {
            this.head = new _Node(item);
            return
        }
        if (index === 0) {
            this.head = new _Node(data, this.head);
            return
        }

        let target = this.getAt(index);
        let newNode = new _Node(item);
        newNode.next = target.next;
        target.next = newNode;

        return this.head;
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode

    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {

            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;

    }

}

function main() {


    const SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.insertBefore('Sr. Starbuck', 1)
    SLL.insertAt('New Jr.Starbuck', 6)
    SLL.insertAfter('Jr. Starbuck', 6)
    function display(list) {
        let counter = 0;
        let node = list.head;
        while (node.next !== null) {

            counter++;
            node += node.next;

        }
        return node
    }

    console.log(display(SLL))

}

main()

function show(list) {
    let node = list.head
    while (node !== null) {
        console.log(node.value);
        node = node.next;
    }
}
function size(list) {
    let size = 0
    let node = list.head
    while (node !== null) {
        size++
        node = node.next;
    }
    return size
}
function findPrevious(list, item){
    let counter = 0;
       let node = list.head;
       while(node.value !== item) {
           node = node.next;
           counter ++
       }
       return getAt(list,counter-1)
}

  function getAt(list, index){
       let counter = 0;
       let node = list.head;
       while(node) {
           if (counter === index){
               return node
           }
           counter ++;
           node = node.next;
       }
       return null
   }