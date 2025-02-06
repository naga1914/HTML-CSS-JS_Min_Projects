const number=document.querySelector(".number");
const btn=document.querySelector(".generate")


const generateNumber =() => {
    //generate number between 1 to 10
    const randomNumber=Math.floor(Math.random()*10+1);
    number.innerHTML=randomNumber;
};

btn.addEventListener("click",generateNumber);

generateNumber();





// const rand=Math.random(); 0 to 1 number only like 0.9
//const rand=Math.floor(Math.random()*10); // its round the nearst number

