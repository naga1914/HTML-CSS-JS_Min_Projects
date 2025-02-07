const btn=document.querySelector(".btn");
const result=document.querySelector(".result");

btn.addEventListener("click",palindrome)

function palindrome(){
    const word=document.querySelector(".input-text").value;
    let len=word.length;

    let start=word.substring(0,Math.floor(len/2)).toLowerCase();
    //alert(start);
    let end=word.substring(len-Math.floor(len/2)).toLowerCase();
    //alert(end);
    //let filp=end.split("").reverse().join("");
    let filp=[...end].reverse().join("");
    if(start == filp){
        result.innerHTML=`${word.toUpperCase()} is a palindrome`;
    }else{
         result.innerHTML=`${word.toUpperCase()} is not a palindrome`;
    }
    //alert(filp);

}