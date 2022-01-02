class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

const n1 = new Node(100);
// console.log(n1)

class LinkedList {
    constructor() {
        this.data = null,
            this.size = 0
    }

    //---- Insert at first node------------------------------------//

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    //------------ Insert at last node---------------------------//

    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }

    //---------- Insert at Given Index ----------------------------//

    insertAt(data, index) {
        // if index doesn't exist
        if (index > 0 && index > this.size) { return; }

        // if first index 
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;
        // set  current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            current = current.next; // Node after index
            count++;
        }

        node.next = current;
        previous.next = node;
        // it will increase the size, as we have added a node
        this.size++;


    }

    //--------- Get at an Index -----------------------------//

    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (index === count) {
                console.log(current.data)
            }
            current = current.next;
            count++;
        }
      
        return null;

    }

 
     //--------- Remove at an Index -----------------------------//
     
    removeAt(index) {
        if (index > 0 && index > this.size) { return; }
        
        let current = this.head;
        let previous;
        let count = 0;

        // if it is at first index
        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
              
            }
            previous.next = current.next;
            this.size--;
        }
    }

    //--------------- Clear list--------------------------//
     
    clearList() {
        this.head = null;
        this.size = 0;
     }


    //--------------- Print List data---------------------//
    printListData() {
        let current = this.head;
        while (current) {
            console.log(current.data);        
            current = current.next;
        }
    }

}

const ll = new LinkedList()
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(500);
 ll.insertAt(420, 4)
 ll.removeAt(2)

 ll.getAt(2)
 ll.printListData();
