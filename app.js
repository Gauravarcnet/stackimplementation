// //linklist
// function linklist(){
//   this.head=null;
// }
// linklist.prototype.push = function (val) {
//   var node={
//     value:val,
//     next:null
//   }
//   if(!this.head){
//     this.head=node;
//   }
//   else{
//     current=this.head;
//     while (current.next) {
//       current=current.next;
//     }
//     current.next=node;
//   }
// }
// let  ll=new linklist();
// ll.push(2);
// ll.push(25);
// ll.push(2156);
// ll.push(2468);
// console.log(ll.head);


//stack
let stack=[];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// //queue
// let queue=[];
// queue.push(1);
// queue.push(2);
// queue.push(3);
// console.log(queue.shift());
// console.log(queue.shift());
// console.log(queue.shift());
