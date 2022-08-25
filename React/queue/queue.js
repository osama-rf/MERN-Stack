// class Queue {
//
//     constructor(items = []) {
//         this.items = items;
//     }
//
//     dequeue() {
//         if(this.items.length < 1){
//             return false;
//
//         }else{
//             let first = this.items[0];
//             for(let i = 0; i < this.items.length; i++){
//                 this.items[i] = this.items[i+1];
//             }
//             this.items.length = this.items.length-1;
//             return first;
//         }
//     }
//
//     enqueue(item) {
//         this.items[this.items.length] = item;
//         return this;
//     }
//
//     front() {
//         if(this.items.length < 1){
//             return "None";
//         }else{
//             return this.items[0];
//         }
//     }
//
//     isEmpty() {
//         return this.items.length == 0;
//     }
//
//     size() {
//         return this.items.length;
//     }
// }

// const data = {"name":"osama","color":"red"}
// console.log(data.name);
// console.log(data.color);

// const greeting = async () => {
//     var y = await "Wellcome";
//     console.log(y);
// }
//
// greeting()

// const nums = [1,2,3,4,5];
//
// const newNums = [];
//
// for (let i = 0 ; i < nums.length ; i++){
//     newNums.push(nums[i] * 2);
// }
//
// console.log(newNums)

// const nums = [1, 2, 3, 4, 5];
//
// function double(num) {
//     return num * 2;
// }
//
// const newNums = nums.map( double );
//
// console.log( newNums ); // logs [2, 4, 6, 8, 10]

