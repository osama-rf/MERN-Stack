class Queue {

    constructor(items = []) {
        this.items = items;
    }

    dequeue() {
        if(this.items.length < 1){
            return false;

        }else{
            let first = this.items[0];
            for(let i = 0; i < this.items.length; i++){
                this.items[i] = this.items[i+1];
            }
            this.items.length = this.items.length-1;
            return first;
        }
    }

    enqueue(item) {
        this.items[this.items.length] = item;
        return this;
    }

    front() {
        if(this.items.length < 1){
            return "None";
        }else{
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }
}