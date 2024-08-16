// let range = {
//     0: 1,
//     1: 5
//   };
  
//   let arr= Array.from(range)
//   // We want the for..of to work:
//   for(let num of arr){
//     console.log(num);
//   } //num=1,2,3,4,5

//   let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 3
//   };
  
//   let arr1 = Array.from(arrayLike); // (*)
 
//   for(let num in arrayLike){
//     console.log(arrayLike[num]);
//   }


let arr=[1,23,4,5,6]
let newarr=arr.forEach((num,index, arr)=> {
    let result=num *2;
//console.log(`${index} index value ${result} original array ${arr}`); 
 return result
});
console.log(arr); // no return


