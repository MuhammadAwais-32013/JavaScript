// let map1=new Map()
// map1.set('name','awais')
// console.log(map1.get('name'))

// let sym=Symbol
// let id=1
// let map1=new Map();
// map1.set('id',1122),
// map1.set(id,22)

// // let obj={
// //     id:1122
// // }

// for (const [key,val] of map1) {
//     console.log(val);
// }

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   console.log(recipeMap.get('onion'));

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null;

// console.log(map.keys());

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null;

// console.log(weakMap.keys());

// let mysym=Symbol('1');

// let obj={
//     [mysym]:'atc'
// }

// console.log(typeof mysym);
// let name='Qarni';
// (function (name) {
//     console.log(`Well come ${name}`);
// })(name);

// ((name) =>{
//     console.log(`Well come ${name}`);
// })(name)

let arr1= [2,4,5,7,6];
let arr=[1,23,4,5,6]
let newarr=arr.map((num,index, arr)=> {
    let result=num *2;
console.log(`${index} index value ${result} original array ${arr}`); 
  return result
});

console.log(newarr);

