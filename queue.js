// Queue Data Structure:

// First In First Out
// FIFO

class Queue {
    constructor() {
       this.queue = []; 
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }   
}

const friendlist = new Queue();

friendlist.enqueue("Saidul");
friendlist.enqueue("Shakil");
friendlist.enqueue("Aminul");
friendlist.enqueue("Maruf");

// console.log(friendlist.queue);

const acceptFriend = friendlist.dequeue();

// console.log(acceptFriend);
// console.log(friendlist.queue);
