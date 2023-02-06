// console.log('Day2-connectted')

//Reference datatypes - objects - Array
// It can hold multile data.
//js index start - 0,

// const  price =  [2.78,6.78,7.90,'USD',true,undefined,null]
// console.log(typeof price)
// console.log(price[1])
//number index 
//order


//object.

// const person = {
//     //property
//     //key : value,
//     name:'Vikarm',
//     age:54,
//     isExperi:true,
//     skills:['HTML','CSS','js',24,true],
//     address:{
//         postNum:4254154,
//         poum:4254154,

        
//     }

// }

// console.log(person['0'])
// console.log(person.skills[4])
// console.log(person.address)


// person.address = {city:'up'}
// console.log(person.address.poum)


// function - is a block of code 

// let sum = 12+ 5;
// console.log(sum);


// let sum1 = 13+8;
// console.log(sum1)

//two type - declartion - expression.

//syntax?
// function add(a,b){
//     let sum = a+b;

//     return sum;
// }


// console.log(add())


// let result = add(12,8);
// console.log(result)


// object - is a way of writing program.

//object - data and its behaviour;

// let carName = 'Audi';

// let carModel = '2023';
// let carPrice = '238878676787';

// let carName1 = 'ferrai';
// let carModel2 = '2023';
// let carPrice3 = '67766767';

// function carDetails(name,model,price){
//   let carReport='Name of the car '+name+'-'+model+' $ '+price;

//   return carReport;
// }

// const car1 = carDetails(carName1,carModel2,carPrice3)

// console.log(car1)

// const car ={
//     car1:{
//      name: 'ferrai',
//      model : '2023',
//      price : '67766767'
//     },
//     car2:{
//         name : 'audi',
//         model : '2020',
//         price : '66675666767'
//     }
// }


const car = {
    //property
    name:'ferrai',
    model:'2020',

    //methods
    detail:function(){
       return car.name +' '+car.model;
    },
    start:function(){
        return car.name +' '+car.model;
     }
}


console.log(car.name)
console.log()
// car.detail()

const arr = [1,2,3,4,78];

// console.warn(arr)

// string - string obj -string - prop,methos
//number - numberovj - number - prop,methods

//obj- 

// const a =new String('hello');
const b = 'hel lo';

console.log(b.length);

/*

string- methods()
number-methods()

*/



