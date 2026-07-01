const computeBtn = document.querySelector(".btn");
const outputEl = document.querySelector("#output");
const conditionEl = document.querySelector("span");


computeBtn.addEventListener("click", ()=>{
    displayOutput();
})

function displayOutput(){
    const heightEl = document.querySelector("#Height").value/100;
    const weightEl = document.querySelector("#Weight").value;
    let bmiValue = weightEl / (heightEl * heightEl);
    outputEl.value = bmiValue;
    
    if(bmiValue <18.5){
        conditionEl.innerText = "Under Weight";
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        conditionEl.innerText = "Normal Weight";
    }
    else if(bmiValue>=24.9){
        conditionEl.innerText = "Over Weight";
    }
}
