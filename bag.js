let loadJholaItemObjects;
let textDisplay=document.querySelector(".post-loader-note");
const items=[{
    identity:`001`,
    item_image:`./Assets/1 (1).jpg`,
    rating: {
        stars:4.5,
        noOfReviews:1.4,
    },
    company_name:`Carlton London`,
    item_name:`Rhodium-Plated CZ Floral Studs`,
    current_price:`605`,
    original_price:`1045`,
    discount:`42`,
    return_period:`20`,
    delivery_date: `15 Aug 2024`,
},{
    identity:`002`,
    item_image:`Assets/2 (1).jpg`,
    rating: {
        stars:4.3,
        noOfReviews:2.4,
    },
    company_name:`CUKOO`,
    item_name:`Women Padded Halter Neck Swimming Dress`,
    current_price:`1507`,
    original_price:`2599`,
    discount:`42`,
    return_period:`28`,
    delivery_date: `1 Sep 2024`,
},{
    identity:`003`,
    item_image:`Assets/3 (2).jpg`,
    rating: {
        stars:4.1,
        noOfReviews:1.9,
    },
    company_name:`NUEVOSDAMAS`,
    item_name:`Women Red & White Printed A-Line Knee-Length Skirts`,
    current_price:`495`,
    original_price:`1599`,
    discount:`69`,
    return_period:`17`,
    delivery_date: `13 Oct 2024`,
},{
    identity:`004`,
    item_image:`Assets/4 (2).jpg`,
    rating: {
        stars:5.0,
        noOfReviews:9.4,
    },
    company_name:`Adidas`,
    item_name:`Indian Cricket ODI Jersey`,
    current_price:`999`,
    original_price:`999`,
    discount:`0`,
    return_period:`20`,
    delivery_date: `3 Jan 2025`,
},{
    identity:`005`,
    item_image:`Assets/5 (2).jpg`,
    rating: {
        stars:4.2,
        noOfReviews:3.5,
    },
    company_name:`Roadster`,
    item_name:`Pure Cotton T-shirt`,
    current_price:`1399`,
    original_price:`489`,
    discount:`65`,
    return_period:`0`,
    delivery_date: `22 July 2024`,
},{
    identity:`006`,
    item_image:`Assets/6 (2).jpg`,
    rating: {
        stars:1.5,
        noOfReviews:1.0,
    },
    company_name:`Nike`,
    item_name:`Men ReactX Running Shoes`,
    current_price:`15605`,
    original_price:`15605`,
    discount:`0`,
    return_period:`11`,
    delivery_date: `4 May 2024`,
},{
    identity:`007`,
    item_image:`Assets/7 (2).jpg`,
    rating: {
        stars:4.2,
        noOfReviews:3.4,
    },
    company_name:`The Indian Garage Co`,
    item_name:`Men Slim Fit Regular Shorts`,
    current_price:`639`,
    original_price:`1599`,
    discount:`60`,
    return_period:`25`,
    delivery_date: `17 Sep 2024`,
},{
    identity:`008`,
    item_image:`Assets/8 (2).jpg`,
    rating: {
        stars:4.5,
        noOfReviews:5.4,
    },
    company_name:`Nivea`,
    item_name:`Men Fresh Deodrant 150ml`,
    current_price:`142`,
    original_price:`285`,
    discount:`52`,
    return_period:`1`,
    delivery_date: `2 Oct 2024`,
},{
    identity:`009`,
    item_image:`Assets/mynta 9.avif`,
    rating: {
        stars:4.0,
        noOfReviews:7.4,
    },
    company_name:`farmacy`,
    item_name:`Women Skin Care Items`,
    current_price:`3605`,
    original_price:`4000`,
    discount:`32`,
    return_period:`23`,
    delivery_date: `31 Aug 2024`,
},{
    identity:`10`,
    item_image:`Assets/myntra 10.webp`,
    rating: {
        stars:4.5,
        noOfReviews:1.4,
    },
    company_name:`titan`,
    item_name:`Limited Edition Men Wrist Watches`,
    current_price:`1605`,
    original_price:`1945`,
    discount:`5`,
    return_period:`20`,
    delivery_date: `9 Nov 2024`,
},{
    identity:`11`,
    item_image:`Assets/myntra 11.webp`,
    rating: {
        stars:3.5,
        noOfReviews:2.4,
    },
    company_name:`Sreehari`,
    item_name:`Fancy Gold Plated Jewellery Set`,
    current_price:`2535`,
    original_price:`4045`,
    discount:`22`,
    return_period:`7`,
    delivery_date: `10 July 2024`,
},{
    identity:`12`,
    item_image:`Assets/myntra 12.avif`,
    rating: {
        stars:2.5,
        noOfReviews:5.5,
    },
    company_name:`Vriksh`,
    item_name:`Traditional Ethnic Modi/Nehru Coat`,
    current_price:`875`,
    original_price:`1845`,
    discount:`71`,
    return_period:`15`,
    delivery_date: `2 Aug 2024`,
},{
    identity:`13`,
    item_image:`Assets/myntra 13.jpg`,
    rating: {
        stars:4.5,
        noOfReviews:1.4,
    },
    company_name:`Monte Carlo`,
    item_name:`Quality Assured Old Boys Sweater`,
    current_price:`557`,
    original_price:`1248`,
    discount:`85`,
    return_period:`03`,
    delivery_date: `8 Dec 2024`,
},{
    identity:`14`,
    item_image:`Assets/myntra 14.jpg`,
    rating: {
        stars:2.8,
        noOfReviews:7.98,
    },
    company_name:`Royal Enfield`,
    item_name:`Snow Protected Special Gloves`,
    current_price:`3605`,
    original_price:`6045`,
    discount:`48`,
    return_period:`28`,
    delivery_date: `7 Oct 2024`,
},{
    identity:`15`,
    item_image:`Assets/myntra 15.jpeg`,
    rating: {
        stars:1.5,
        noOfReviews:0.2,
    },
    company_name:`Orixamox`,
    item_name:`Hard Ptotected Mobile Cases`,
    current_price:`122`,
    original_price:`389`,
    discount:`77`,
    return_period:`2`,
    delivery_date: `1 Dec 2024`,
},{
    identity:`16`,
    item_image:`Assets/16.webp`,
    rating: {
        stars:4.5,
        noOfReviews:1.4,
    },
    company_name:`Velvetica`,
    item_name:`Fine Silk Threaded Baba Suits`,
    current_price:`480`,
    original_price:`965`,
    discount:`50`,
    return_period:`30`,
    delivery_date: `5 Sep 2024`,
},{
    identity:`17`,
    item_image:`Assets/17.png`,
    rating: {
        stars:5,
        noOfReviews:9.4,
    },
    company_name:`Puffins`,
    item_name:`Kid's Favourite Soft Toys`,
    current_price:`895`,
    original_price:`2000`,
    discount:`68`,
    return_period:`05`,
    delivery_date: `19 Aug 2024`,
},]

onLoad();


function onLoad(){
    loadJholaObjects();
    displayOrderedItem();
    displayJholaSummary();
}

function displayJholaSummary(){
    let totalMrp=0;
    let discountMrp=0;
    let totalProducts=loadJholaItemObjects.length;
    
    loadJholaItemObjects.forEach(loadJholaItemObject=>{
        
        totalMrp=totalMrp+parseInt(loadJholaItemObject.current_price);
        discountMrp=discountMrp+(parseInt(loadJholaItemObject.current_price)-(parseInt(loadJholaItemObject.discount)*parseInt(loadJholaItemObject.current_price)/100));
    })
    

    let totalPayableAccount= 99+ totalMrp - discountMrp;
    let summary=document.querySelector(".bag-summary");
    summary.innerHTML=` <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalProducts} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${discountMrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${totalPayableAccount}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni" onclick="showPostLoader()">PLACE ORDER</div>
          </button>`;

}

function showPostLoader(){
    let credentials=document.querySelectorAll(".post-loader,.post-loader-icon");

    credentials.forEach(credential =>{
        
            credential.classList.toggle("active");
        
setTimeout(()=>{
    credential.classList.remove("active");
},3000);

});
    }

function loadJholaObjects(){
   
    loadJholaItemObjects=jhola.map(itemId => {
        for(let i=0;i<items.length;i++){
            if(itemId == items[i].identity){
               
                return items[i];
            }
        }
    });
    
    
}

function displayOrderedItem(){
    
    let orderedItem=document.querySelector(".bag-items-container");
    
    let innerHTML='';
    loadJholaItemObjects.forEach(jhola => {
        innerHTML +=generateItemHtml(jhola);
    });
    
    
 orderedItem.innerHTML= innerHTML;
}

function removeFromJhola(itemID){console.log(itemID);
jhola=jhola.filter(jholaItemId => (jholaItemId!=itemID) );
localStorage.setItem('jhola',JSON.stringify(jhola));
loadJholaObjects();
displayOrderedItem();
jholaItemCount();
displayJholaSummary();
}
function generateItemHtml(item){

    return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${item.item_image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company_name}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick="removeFromJhola(${item.identity})">X</div>
          </div>`;
}