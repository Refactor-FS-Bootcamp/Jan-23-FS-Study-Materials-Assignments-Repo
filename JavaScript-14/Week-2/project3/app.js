const apiUrl = 'https://fakestoreapi.com/products'

// fetch - 
// wait - parse - json();
//wait - data - function - 
//contruct - UI

//async -await




async function apiCall(url){
    const res = await fetch(url);//
    const data =await res.json()
    displayUi(data)

}

function displayUi(data){
    const cart = document.querySelector('.container-cart')

    data.forEach(item => {
      const {title,description,image,price,rating:{rate}}= item

      const srtTitle = title.substr(0,9)
      const srtDesc = description.substr(0,70)
      
   console.log(srtTitle)
      cart.innerHTML += `
      <div class="cart">   
          <img src=${image} alt="">
                <h2>${srtTitle}</h2>
                <p>${srtDesc}</p>
                <div class="cart-info">
                <p> ${rate}</p>
                <p>${price}</p>
                </div>
                
                <button>Buy Now</button>
                </div>
      
      `
        
    });
    
}

apiCall(apiUrl)





const theme = document.querySelector('.theme');


theme.addEventListener('click',()=>{
  const body = document.body;
  body.classList.toggle('active')
})