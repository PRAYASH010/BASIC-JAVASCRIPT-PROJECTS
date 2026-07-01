//for input rate in the input place
const currencyFirstEl=document.getElementById("currency-first");
const worthFirstEl=document.getElementById("worth-first");

const currencySecondEl=document.getElementById("currency-second");
const worthSecondEl=document.getElementById("worth-second");

//for rate at the bottom
const exchangeRateEl=document.getElementById("exchange-rate");

updateRate();

//to retrieve information from the dropdown value and trigger any click or change
function updateRate(){
    //for fetching entire exchange rate using api
    fetch(`https://v6.exchangerate-api.com/v6/fd9bab770fd51e34b2504a25/latest/${currencyFirstEl.value}`).then((res)=>res.json()).then((data)=>{
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        
        //for display of selected rate in bottom
        exchangeRateEl.innerText =`1 ${currencyFirstEl.value}=${rate + "" +currencySecondEl.value}`;

        //for getting amount in bottom right
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);


    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input",updateRate);