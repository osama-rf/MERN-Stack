class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    insertAtBack(data){
        if(this.head==null){
            this.head = new Node(data);
        }else{
            let runner = this.head;
            while (runner.next !== null){
                runner = runner.next;
            }
            runner.next = new Node(data);
        }
        return this;
    }
}

function removeHead(head) {
    if (head == null)
        return null;

    head = head.next;
    return head;
}

var newList = new SinglyLinkedList();
newList.insertAtBack(5).insertAtBack(8).insertAtBack("hi").insertAtBack(2);
console.log(newList)
console.log(removeHead(newList))







