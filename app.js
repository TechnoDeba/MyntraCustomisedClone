const bar_items=document.querySelectorAll(".show-hid-box");
const new_item=document.querySelector(".new-box");
const div=document.querySelector(".hid-box");
const new_div=document.querySelector(".studio-box");
const burg=document.querySelector(".hamburger");

const side_bar=document.querySelector(".invisible-div");
let jhola;
bar_items.forEach(bar_item =>{
    bar_item.addEventListener("mouseover",()=>{
    div.classList.toggle("hidden");
    });
});
new_item.addEventListener("mouseover",()=>{
    new_div.classList.toggle("hid-gem-box");
});

burg.addEventListener("click",()=>{
    side_bar.classList.toggle("disco");
})
onLoad();
function onLoad(){
    let jholaStr=localStorage.getItem('jhola');
    jhola=jholaStr ? JSON.parse(jholaStr):[];
showItemsOnHomePage();
jholaItemCount();
}

function showItemsOnHomePage(){
    let itemContainer=document.querySelector(".functional-container");
if(!itemContainer){
    return;
}
    let innerHTML='';
    //creating an object
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
    },]

    
   
    items.forEach(item => {

    innerHTML +=`<div class="functional-items">
        <img src="${item.item_image}" alt="item-img" class="item-image">
        <p class="rating">${item.rating.stars} ⭐ | ${item.rating.noOfReviews}K</p>
        <p class="company-brand">${item.company_name}</p>
        <p class="item-name">${item.item_name}</p>
        <div class="price">
          <span class="current-price">Rs ${item.current_price} </span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">( ${item.discount}% OFF)</span>
        </div>
        <button class="cart-item" onclick="addToJhola(${item.identity})">Add To Bag</button>
      </div>;`
    });
    itemContainer.innerHTML=innerHTML;

}
function addToJhola(itemID){
    jhola.push(itemID);
    localStorage.setItem('jhola',JSON.stringify(jhola));
    jholaItemCount();
}

function jholaItemCount(){
    let count=document.querySelector(".update-value");
    if(`${jhola.length}`>0){
        count.style.visibility='visible';
        count.innerHTML=`${jhola.length}`;
    }
    else {
        count.style.visibility='hidden';
    }
}