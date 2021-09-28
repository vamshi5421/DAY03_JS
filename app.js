const call = document.querySelector(".callR");
const randomNumber = document.querySelector(".randomNumber");

generateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    randomNumber.innerHTML = randomNum;

}

call.addEventListener("click", generateRandomNum);


