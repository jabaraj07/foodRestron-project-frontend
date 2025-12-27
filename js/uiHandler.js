import { meals } from "./mealsData.js";


// export function displayitems(mealtype){
//     console.log(mealtype);
    
//     const itemlist = document.getElementById('itemlist');
//     itemlist.innerHTML = '';
//     meals[mealtype].forEach(item=>{
//         const mealitemdiv = document.createElement('div');
//         mealitemdiv.className = 'meal-item';
//         mealitemdiv.innerHTML =
//         `
//                     <img src="${item.img}" alt="${item.name}">
//                     <div>
//                         <h5 class="mb-1">${item.name}</h5>
//                         <p class="mb-1">${item.description}</p>
//                         <p><strong>${item.price}</strong></p>
//                     </div>
//         `;
//         itemlist.appendChild(mealitemdiv)
//         mealitemdiv.addEventListener('click',()=>showproduct(item))
//     })
// }

/*-----------------------------------------*/

// Update your existing item rendering function to use the new grid layout
export function displayitems(mealtype) {
    const itemList = document.getElementById('itemlist');
    itemList.innerHTML = ''; // Clear existing items
    
    meals[mealtype].forEach(item => {
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-item';
        mealCard.onclick = () => openModal(item);
        
        mealCard.innerHTML = `
            <div class="meal-item-image-container">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="meal-item-content">
                <div class="meal-item-title">${item.name}</div>
                <div class="meal-item-description">${item.description}</div>
                <div class="meal-item-price">${item.price}</div>
            </div>
        `;
        
        itemList.appendChild(mealCard);
    });
}

// Function to open modal with item details
function openModal(item) {
    document.getElementById('modalproductimage').src = item.img;
    document.getElementById('modalproductname').textContent = item.name;
    document.getElementById('modalproductdiscp').textContent = item.description;
    document.getElementById('modalProductPrice').textContent =  item.price;
    document.getElementById('modalProductIngredients').textContent = item.ingredients || 'N/A';
    document.getElementById('modalProductRating').textContent = item.rating || '★★★★★';
    document.getElementById('modalProductStock').textContent = item.stock || 'In Stock';
    document.getElementById('modalProductHealth').textContent = item.healthBenefits || 'N/A';
    document.getElementById('modalProductNutrition').textContent = item.nutritionLevel || 'N/A';
    
    document.getElementById('productmodal').style.display = 'flex';
}

// Close modal
document.getElementById('modalclosebtn').onclick = function() {
    document.getElementById('productmodal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productmodal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}




/*-----------------------------------------*/

// export function showproduct(item){
//     document.getElementById('modalproductimage').src = item.img;
//     document.getElementById('modalproductname').innerText = item.name;
//     document.getElementById('modalproductdiscp').innerText = item.description;
//     document.getElementById('modalProductPrice').innerText = item.price;
//     document.getElementById('modalProductIngredients').innerText = item.ingredients;
//     document.getElementById('modalProductRating').innerText = item.rating+"/5";
//     document.getElementById('modalProductStock').innerText = item.stock;
//     document.getElementById('modalProductHealth').innerText = item.healthBenefits;
//     document.getElementById('modalProductNutrition').innerText = item.nutritionLevel;

//     const modal = document.getElementById('productmodal')
//     modal.style.display="flex";
// }

export function setactivebutton(activebutton){
    const buttons = document.querySelectorAll('.btn-group button')
    buttons.forEach(button=>{
        button.classList.remove('active')
    })
    activebutton.classList.add('active')
}

export const GoToForm = () =>{
    document.getElementById('book-form-sec').scrollIntoView({behavior:"smooth"})
 }