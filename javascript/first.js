const getPromise = () =>
    {
         new Promise((resolve,reject) => {
            console.log("i am promise");
            resolve("123");
        });
    };
   
   
   
   /*function getData(dataId,getNextdata){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            if(getNextdata){
                getNextdata();
            }
            
        },5000); 

    });
    
}
/*getData(1,() => {
    getData(2,() => {
        getData(3,() => { 
            getData(4);  
        });
    });
});*/
