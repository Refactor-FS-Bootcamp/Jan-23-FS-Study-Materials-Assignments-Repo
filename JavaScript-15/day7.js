// console.log('Dom')

//GRABBING AN ELEMNENT



//GRAB THE ELEMENT
//ADD AN eventlistner to that element
//function 
//grabb the changing elemt
//change the inner html

//how to grab the element:
//5 methods are available in grabbing element.

//grabsingle - grab multiple elemnt.

//id
// const btn = document.getElementById('btn')

// btn.addEventListener('click',function(){
//     const head= document.getElementById('demo')
//     const img = document.getElementById('img')  
   

//    head.innerHTML = 'Congrates';
//    head.style.backgroundColor='orange'
//    head.style.fontSize='120px'

//    img.src='https://images.unsplash.com/photo-1678710194874-af547ceac289?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60'
// })



const input = document.getElementById('input')


input.addEventListener('input',function(){
    const kg = input.value 
   
   const pound = kg*2.20462;
   const result = document.getElementById('result');

   result.innerHTML=pound

});


// HM**
//convertor app - 
//dom creat, read, delete.