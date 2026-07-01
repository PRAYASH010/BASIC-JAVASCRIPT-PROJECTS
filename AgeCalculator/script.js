const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("input");
const resultEl = document.querySelector("#result");

btnEl.addEventListener("click", () => {
  calculateAge();
});

function calculateAge() {
  const birthdayValue = inputEl.value;

  if (birthdayValue === "") {
    alert("Please enter date");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `You are ${currentAge} years old.`;
  }

  function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthDate = new Date(birthdayValue);

    let currentAge = currentDate.getFullYear() - birthDate.getFullYear();

    const month = currentDate.getMonth() - birthDate.getMonth();

    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayValue.getDate())
    ) {
      currentAge--;
    }
    return currentAge;
  }
}
