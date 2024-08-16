let arr=[1,23,4,5,6]
let newarr=arr.filter((num,index, arr)=> {
    let result=num > 2;
//console.log(`${index} index value ${result} original array ${arr}`); 
return result
});
console.log(newarr);