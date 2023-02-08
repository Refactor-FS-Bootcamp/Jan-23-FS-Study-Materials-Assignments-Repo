// console.log('start');

// setTimeout(function(){
//     //uplaodin
//     console.log("uploading")
// },3000);

// console.log('post successfull')



// control squence ...

function display(val){
    console.log(val)
}

function add(a,b){
    // posting the videos
   let sum = a+b;

   return sum; 
}

const result = add(8,3);
display(result);


// first class funstion


// function name(para){
//     const food =  para
//     return function(){
//           console.log('Eated -'+ food) 
//     }
// }
 

// const  order = name('pizza');

// setTimeout(function(){
//     order()
// },1000)

function display(order){
   console.log(order)
}

function order(a,b,c){
  let sum = a+b;
//    console.log(c)
   c(sum)
}

order(1,2,display)




//callstack







