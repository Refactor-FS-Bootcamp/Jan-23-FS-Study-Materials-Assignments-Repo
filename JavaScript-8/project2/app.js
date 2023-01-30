// console.log('Hello world');

const name= document.querySelectorAll('input')[0];

const number = document.querySelectorAll('input')[1];

const btn = document.getElementById('btn');
showData()

btn.addEventListener('click',function(){
    let nameVal = name.value;
    let numberVal = number.value;

    const contactList = localStorage.getItem('contact')
   

    if (contactList === ''){
        contactArr=[];
    }else{
        contactArr=JSON.parse(contactList)
    }
   
    if(nameVal=== '' || numberVal === ''){
        alert('please eneter value')
    }else{
        const arrObj ={
            name:nameVal,
            number:numberVal
        }
    
        
        contactArr.push(arrObj)
        localStorage.setItem('contact',
        JSON.stringify(contactArr))
       
        name.value='';
        number.value=''
      showData()
    }
 
   


})


function showData(){
    const tableBody = document.querySelector('tbody');
    const showData = localStorage.getItem('contact')

    if(showData === ''){
        showArr = []
    }else{
        showArr = JSON.parse(showData)
    }
      
    let list = ''
    showArr.forEach(function(elm){
       
        list +=`
         <tr>
            <td>${elm.name}</td>
            <td>${elm.number}</td>
            <td>
                <button class='btn' >delete</button>
            </td>
          </tr>
        
        
        `
    
    })

    tableBody.innerHTML=list
    deleteBtn()
}

//Delete Button:

function deleteBtn(){
    const updateData = localStorage.getItem('contact')

    if(updateData === ''){
        newArr = []
    }else{
        newArr = JSON.parse(updateData)
    }

    const btnn = document.querySelectorAll('.btn')

     btnn.forEach(function(btn,index){
        btn.addEventListener('click',function(){
        
        this.style.textDecoration='line-through'
        this.parentNode.parentNode.style.textDecoration='line-through';
       
     setTimeout(function(){
        newArr.splice(index,1)
        localStorage.setItem('contact',
        JSON.stringify(newArr))
      showData()
     },4000)


          
        })
        
     })



}





setTimeout(function(){
    console.log('hello')
},3000)






// const list = [
//     {
//         name:'hari',
//         pho:2873
//     },
//     {
//        name:'sabari',
//        pho:   
//     }


// ]

// const obj = {
//     name:'hari'

// }

// console.log(JSON.stringify(obj) )

// .innerHTML='<div><h1></h1></div>'

// "hello"+name+'wekcome'
// template

// `
// hello ${name} welcome
// `


const obj={
    data:232,
    helo:67676776,
    details:function(){
        console.log(this)
    }
}

obj.details()

var b = this

function rend(){
    console.log(this)
}

window.rend()