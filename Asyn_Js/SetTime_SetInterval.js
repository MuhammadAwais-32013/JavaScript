let timerId= setTimeout(function SayHi(){
    console.log("Parent");
    timerId=setTimeout(()=>{
        console.log("Child");
        
    },2000)
    
},2000)

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);