let timerId= setTimeout(()=>{
    console.log("Parent");
    setTimeout(()=>{
        console.log("Child");
        
    },2000)
    
},2000)