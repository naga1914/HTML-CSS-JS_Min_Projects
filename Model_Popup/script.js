// varables
const model=document.querySelector(".modal"),
      btn=document.querySelector(".btn"),
      close=document.querySelector(".close");

btn.addEventListener("click",openModal);
close.addEventListener("click",closeModal);
model.addEventListener("click",closeModal);

//open modal
function openModal(e){
    e.preventDefault();
    model.style.display ="block";
}
//close modal
function closeModal(){
    model.style.display ="none";
}
