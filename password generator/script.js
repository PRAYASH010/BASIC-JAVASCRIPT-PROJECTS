const btnEl=document.querySelector(".btn")
const inputEl=document.getElementById("input")


//for generating password
btnEl.addEventListener("click",()=>{
    createPassword();
})

function createPassword(){
    const chars="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passLength=14;
    let password="";
    for (let index = 0; index < passLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password +=chars.substring(randomNum, randomNum+1);
        // console.log(randomNum,password);
    }
    inputEl.value=password;
    alertContainerEl.innerText=password+" copied! "
}

// for activating copy option
const copyEl=document.querySelector(".fa-copy")


//For making copy icon accessible and notification
copyEl.addEventListener("click",()=>{
    copyPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(() =>{                       //For providing a certain interval time for the notification to remove itself
        alertContainerEl.classList.add("active");
    },2000);
})




function copyPassword(){
    inputEl.select(); //for desktop
    // inputEl.seySelectionRange(0,9999) //for selecting number of character to be copied in mobile for mobile support
    
    navigator.clipboard.writeText(inputEl.value);
}

//for notification
const alertContainerEl=document.querySelector(".alert-container")
