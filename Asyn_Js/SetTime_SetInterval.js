let timerId= setTimeout(function SayHi(){
    console.log("Parent");
    timerId=setTimeout(()=>{
         SayHi();
         console.log("child");
         
        
    },2000)
    
},2000)

let timerIds = setTimeout(function tick() {
    console.log('tick');
    timerIds = setTimeout(tick, 2000); // (*)
  }, 2000);


// *************************Get Sum of Array*********************

let data=function uer(sum){
    setInterval(()=>{
        sum([1,2,3,5,6])
    },2000)
}

function sum(number) {
    let sum=0;
    for (const element of number) {
        sum+=element;
    }
    console.log(`Sum is : ${sum}`);
    
}

// data(sum);

let sumAsyn=(callback)=>{
    function repeat() {
        callback([1,2,3,4,5]);
        setTimeout(repeat,2000)
    }
    repeat();
}

sumAsyn(sum)
// let arr=[2,3,4,5]

// let sum=0;
//     for (const element of number) {
//         sum+=element;
//     }
//     console.log(`Sum is : ${sum}`);