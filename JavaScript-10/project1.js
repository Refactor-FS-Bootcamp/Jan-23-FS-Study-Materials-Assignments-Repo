// console.log('Hello wo')

const pounds= document.getElementById('pounds')

const btn = document.getElementById('btn')
const kgValue= document.querySelector('.kgs')

const err= document.querySelector('.error')
const demo= document.querySelector('.demo')

let count =0;

pounds.addEventListener('input',function(event){
    const userInput =Number(event.target.value);


  if(userInput === 0){
    err.classList.add('activeError')
    
  }else{
    err.classList.remove('activeError');
    
    
    

  }

})


btn.addEventListener('click',function(){
    pounds.value=0
    kgValue.innerHTML=0
   
})


demo.innerHTML=localStorage.getItem('kg3')



//local storage uses:

// localStorage.setItem('name','Rahul')

// const demo = document.querySelector('.demo')

// demo.innerHTML = localStorage.getItem('name')


// for (var i = 0; i < localStorage.length; i++){
//     const value =  localStorage.getItem(i)

//     demo.innerHTML +='<div><h1>'+ value+'</h1></div>'
   
    
   
// }

// for(var key in localStorage) {
//     const value =  localStorage.getItem(key)
//     demo.innerHTML +='<div><h1>'+ value+'</h1></div>'
// }

