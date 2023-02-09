// console.log('Async')
//control squaence

//funcion   - producing  //another  - consuming code //finctiom

//promise - // prodec - sucenc - succ
                //   - error - error

        //producing code
//    const myPromise = new Promise((resolve,reject)=>{
       
//     setTimeout(function(){
//         //VIDEO 
//       let a = 108;
//       if(a === 100){
//         resolve('Posted successfully');
//       }else{
//         reject('Failed t0 uploaed')
//       }
     
//     },5000)

//    })

   //consuming
//    myPromise.then(
//     (value)=>{ 
//         alert(value)
//     },
//     (error)=>{ 
//         alert(error)
//     }
//    )





//    console.log('HE,LO')
//async await


//api


//fetch api -


//app



// fetch api - data
//100% - senedt to dipla
//fucnton - diplay data in console.


const myPromise = new Promise((resolve,reject)=>{

 const res = fetch('https://fakestoreapi.com/products');




//  JSON()
  resolve(res)


})

myPromise

.then((res)=>res.json())

.then((data)=>display(data))

function display(data){
    console.log(data)
    data.forEach((item)=>{
        console.log(item.title)
    })
}