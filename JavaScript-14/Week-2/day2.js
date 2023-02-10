//hoisting

//var , function 
//var - paritially hosited.
//function - fully hoisted.

//hoisting - 

// console.log(a)


// var  a = 10;

// console.log(a)

// console.log(b)

// var b = function(){
//     console.log('hello') 
// }
// b()
// console.log(b)




// b=undefined;

// b=f()




//memory a = 10;
//callstack  a;




//function b(){
    // return 'hello'
// }.
//start read line by line.
// b()
// a = 10;
// a - 10




//ES6
//rest - spread operator.


// spread 

// const  arr = [1,2,3,3,3,,3,22,1,];
// const arr3 = [32,324,,32,32,32,];


// const arr1 = [...arr,...arr3];


// function sum(x, y, z,g,h,) {
//     return x + y + z +g+h;
//  }
  
//   const numbers = [1, 2, 3];


//  console.log(sum(...arr)) 



// const obj = {
//     name :'heh',
//     age:34
// }

// const obj2 ={
//     eyecolo:'red',
//     age:89
// }

// const obj3 = {...obj2,...obj}

// console.log(obj3)

// const obj = {
//     name :'heh',
//     age:34
// }



// function detail(name,){
//     return name +'-'+age;
// }

// console.log(detail(...obj))

// console.log()


//rest ;

// const arr = [1,2,21,3,12,3,21];

// const [a,b,c,...h]= arr;

// console.log(a,b,c,h)


// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//   myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
//   // The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"]