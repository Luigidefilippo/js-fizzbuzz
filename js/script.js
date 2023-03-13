const containerElem = document.querySelector(".container");
console.log(containerElem);

for(let i = 1; 1<=100; i++){
    if (i % 3 === 0 && i % 5 ===0){
        console.log(i,"FizzBuzz");
        containerElem =`<div class="box">FizzBuzz</div>`;
        boxText ="FizzBuzz";
        boxClass="fizz-buzz";

    } else if ( i % 5 === 0){
        console.log(i, "Buzz");
        containerElem =`<div class="box">Buzz</div>`;
        boxText ="Buzz";
        boxClass="buzz";

    }else if ( i % 3 === 0 ){
        console.log( i, "Fizz");
        boxText ="Fizz";
        boxClass="fizz";

    }else{
        console.log(i);
        boxText =i;
        boxClass="";
    }
    containerElem.innerHTML += `<div class="box ${boxClass}">${boxText}</div>`;
}