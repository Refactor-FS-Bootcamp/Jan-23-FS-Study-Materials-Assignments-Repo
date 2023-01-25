//Dom -
//Finding html - 5

//id- single element.
// const head =document.getElementById('demo')

// //class
// const head1 = document.getElementsByClassName('demo1')

// console.log(head1)

// for(let i =0;i<head1.length;i++){
//     head1[i].innerHTML='Bye'
// }

// head1.forEach(function(value){
//       value.innerHTML='bye'
// });





// // console.log(head1)

// //Tag
// const head2 = document.getElementsByTagName('h1')[2]
// console.log(head2)


// //changing a element

// head.innerHTML='Hi';

// head1[0].innerHTML='Hello'
// head1[1].innerHTML='World'
// head1[2].innerHTML='Bye'

//querySelector;

// const demo = document.querySelector('h1')
// console.log(demo)

// const demo = document.querySelectorAll('.demo1')
// // console.log(demo)




// demo.forEach(function(value){
//     value.innerHTML='bye'
// });


//innerHTMl
// const demo = document.querySelectorAll('.demo1')[0]

// demo.innerText='<div><i>Hi</i></div>'
// demo.style.color='blue'

// const att = demo.class

// console.log(att)

// const img = document.querySelector('img');
// console.log(img)

// img.src='https://images.unsplash.com/photo-1674641986446-c1a5fa900533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'

// img.setAttribute('src','https://images.unsplash.com/photo-1674641986446-c1a5fa900533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60')


// function changeImg(){
    
// const img = document.querySelector('img');
//     img.setAttribute('src','https://images.unsplash.com/photo-1674641986446-c1a5fa900533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60')
//     img.style.height='300px';
//     img.style.width='100%'

// }

const btn = document.querySelector('button');
console.log(btn)

//syntax
// element.addEventListener('click,fun)

// btn.addEventListener('click',function(){
//     const img= document.querySelector('img');

//     img.style.height='600px'
//     img.setAttribute('src','https://images.unsplash.com/photo-1674641986446-c1a5fa900533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60')

// })

btn.addEventListener('click',function(){
  
    const elm=document.body
    
    elm.classList.toggle('active')

})


