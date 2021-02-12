class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0
    }
  
    push(val){
      let newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next =newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    pop(){
      if(!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while(current.next) {
        newTail = current;
        current =current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  
    shift(){
      if(!this.head) return false
      let temp = this.head;
      this.head = this.head.next;
      this.length--
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return temp
    }
  
    unshift(val){
      let newNode = new Node(val)
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      }
      this.length++
      return this;
    }
  
    get(index){
      if(index < 0 || index >= this.length) return false;
      let current = this.head;
      let counter = 0;
      while(counter !== index){
        current = current.next;
        counter++;
      }
      return current;
    }
  
    set(index, val){
         
      if(index < 0 || index >= this.length)
      return false
      let current = this.head;
      let counter = 0;
      while(counter !== index) {
        current = current.next;
        counter++;
      }
      current.value = val;
      return this;
    }
    insert(index, val){
      if(index < 0 || index >= this.length) 
    
      return false
  
    let newNode = new Node(val);
    if(index === 0) return !!this.unshift(val)
    if(index === this.length-1) return !!this.push(val)
  
    let counter = 0;
    let current = this.head;
    let prev = this.head;
    while(counter !== index) {
      let temp = current;
      current = current.next;
      prev = temp;
      counter++;
    }
    newNode.next = current;
    prev.next = newNode;
    this.length++
    return true
    }
  
    remove(index){
      if(index < 0 || index >= this.length)return false
      if(index ===0) return !!this.shift();
      if(index === this.length -1) return !!this.pop();
  
      let counter = 0;
      let current = this.head;
      let prev = this.head;
      while (counter !== index) {
        let temp = current;
        current = current.next;
        prev = temp;
        counter ++;
      }
      prev.next = current.next;
      this.length--;
      return true;
    }
  
    reverse() {
      if(!this.head) return false;
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
  
      let prev = null
      let next;
  
      for (let i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return true;
    }
  
    print(){
      let current = this.head;
      let count = 0;
      let arr = [];
      while(count < this.length){
        arr.push(current.value);
        current = current.next;
        count++;
      }
      console.log(arr)
    }
  
  
  }
  
  let list = new SinglyLinkList();
  list.push("starbuck");
  list.push("helo");
  list.push("telo");
  list.push("starbucks.jr");
  list.push("Ishmael");
  list.reverse()
  list.print();
  list.reverse();
  list.print();
  // console.log(list)
  