import { displayitems,setactivebutton,GoToForm } from "./uiHandler.js";


document.getElementById('book-table-btn').addEventListener("click",GoToForm)

document.getElementById('book-table-btn1').addEventListener("click",GoToForm)

// View Menu button - scroll to menu section
const viewMenuBtn = document.getElementById('view-menu-btn');
if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', function() {
        const menuSection = document.getElementById('third-page');
        if (menuSection) {
            menuSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

document.getElementById('modalclosebtn').addEventListener('click',function(){
    document.getElementById('productmodal').style.display='none';
})

const mealTypes = ['breakfast', 'lunch', 'dinner'];

// Dynamically attach event listeners
mealTypes.forEach(type => {
  const btn = document.getElementById(`${type}btn`);
  if (btn) {
    btn.addEventListener('click', function() {
      setactivebutton(this);
      displayitems(type);
    });
  }
});

displayitems('breakfast')

const tableform = document.getElementById('table-form')

tableform.addEventListener('submit',async(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const date = document.getElementById('datetime').value
    const people = document.getElementById('people').value
    const message = document.getElementById('message')

    const data = {
        username : name,
        useremail: email,
        userdate : date,
        usercount : people
    }

    try{
        const respone = await fetch('http://localhost:8080/api/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        });
        if(respone.ok){
            console.log("user registered")
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('datetime').value="";
            document.getElementById('people').value="";

            const messagediv = document.createElement('div')
            messagediv.innerHTML=
            `
            <p>Your Table Booked.</p>
            `
            message.appendChild(messagediv)
            // message.innerHTML = "user registered"
            setTimeout(()=>{
                messagediv.innerHTML=""
            },5000)

            alert("Your Table Booked Successfully..")
        }
        else{
            const errordata = await respone.json();
            console.log(errordata.message);  
            alert("This Slot Already Booked So Try Again..")
        }
    }catch(err){
        console.log(err);
    }
})



