// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here

    // loopHelper(cb1, cb2) {
    //     let curr = this.head;
    //     while(curr) {
    //         curr = curr.next;
    //     }
    // }

    removeTail() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            const returnVal = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        } else {
            let curr = this.head;
            let counter = 1;
            while (counter < this.length - 1) {
                curr = curr.next;
                counter++;
            }
            curr.next = null;
            let returnVal = this.tail;
            this.tail = curr;
            this.length--;
            return returnVal;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            const returnVal = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnVal;
        } else {
            const currHead = this.head;
            this.head = this.head.next;
            this.length--;
            return currHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        let curr = this.head;
        while (curr) {
            if (curr.value === target) return true;
            curr = curr.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let curr = this.head;
        if (!curr) return null;
        for (let i = 0; i < index; i++) {
            if (!curr) return null;
            curr = curr.next;
        }
        return curr;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let curr = this.head;
        if (!curr) return false;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
            if (!curr) return false;
        }
        curr.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0) return false;
        else if (index === 0) {
            this.addToHead(val);
            return true;
        }
        else if (index === this.length) {
            this.addToTail(val);
            return true;
        }
        else {
            let prevNode = this.get(index - 1);
            if (prevNode) {
                const newNode = new Node(val);

                newNode.next = prevNode.next;
                prevNode.next = newNode;
                this.length++;
                return true;
            }
            else return false;
        }
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0) return false;
        else if (index === 0) {
            return this.removeHead();
        }
        else if (index === this.length - 1) {
            return this.removeTail();
        }
        else {
            let prevNode = this.get(index - 1);
            if (prevNode) {
                let returnVal = prevNode.next;
                prevNode.next = prevNode.next.next;
                this.length--;
                return returnVal;
            }
            else return undefined;
        }
        
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
