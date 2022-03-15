import { data } from "./data.js";
import { reData } from './reData.js'

// change active menu
const menuLi = document.querySelectorAll(".nav_links");

function setMenuActive() {
  menuLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

const reusebale = (first, second) =>{
  first.classList.add('active')
  second.classList.add('active')
}

// Login Sing up Popup
const loginBtn =  document.querySelector('.login');
const signupBtn =  document.querySelector('.singup');
const overlay =  document.querySelector('.overlay');
const login_form =  document.querySelector('.login_form');
const mb_navbar =  document.querySelector('.mb_navbar');
const bars =  document.querySelector('.bars');
const innerList  = document.getElementById('innerList');
const recomedList  = document.getElementById('recomedList');

// add click
loginBtn.addEventListener('click', () =>{
  reusebale(overlay,login_form )
})

// add click
signupBtn.addEventListener('click', () =>{
  reusebale(overlay,login_form )
})

// remove click
overlay.addEventListener('click', () =>{
  overlay.classList.remove('active')
  login_form.classList.remove('active')
})

// open navbar
bars.addEventListener('click', () =>{
  overlay.classList.add('active')
  mb_navbar.classList.add('active')
})
// remove navbar
overlay.addEventListener('click', () =>{
  overlay.classList.remove('active')
  mb_navbar.classList.remove('active')
})


// loop through property list
data.forEach((property) =>{
  let doc =  document.createElement('div');
  doc.classList.add('col-lg-3',  'col-md-6', 'col-sm-12');
 const { address, bath, bed, city, zipCode, picture, price, state, sqft, type } = property;
 doc.innerHTML = `
 <div class="property_list">
     <div class="property_img">
         <img src=${picture} alt="This is demo images">     
     </div>
     <div class="property_info">
        <div class="d-flex align-items-center">
         <div class="green_box"></div>
         <p class="mt-3">${type} - Home</p>
        </div>
        <div class="price">
            <h4>$${price}</h4>
        </div>
        <div class="bed_sqft d-flex">
           <p> <b>${bed}</b> bed</p>
           <p> <b>${bath}</b> bath</p>
           <p> <b>${sqft}</b> sqft lot</p>
        </div>
       <div class="address">
         <p>${address}, ${city}, ${state}, ${zipCode}</p>
       </div>
     </div>
 </div>
 `;

 innerList.appendChild(doc);
});

// redirect details page
const details  = document.querySelectorAll('.property_list');
details.forEach(page =>{
  page.addEventListener('click', () =>{
    window.location.replace('../pages/propertyDetails.html')
  })
})


// loop through recombed list
reData.forEach((property) =>{
  let doc =  document.createElement('div');
  doc.classList.add('col-lg-3',  'col-md-6', 'col-sm-12');
 const {city, img, listing, price} = property;
 doc.innerHTML = `
 <div class="recomned_property">
   <div class="map_img">
     <img src=${img} alt="This is demo images">
   </div>
   <div class="recomned_content">
     <h5>${city}</h5>
     <p><b>${listing}</b> listings for sale</p>
     <p>Median Listing Home Price <b>$${price}</b></p>
   </div>
 </div>
 `;

 recomedList.appendChild(doc);
});

