let textarea = document.querySelector("textarea");
let totalChar1 = document.querySelector("#totalChar")
let totalWord1 = document.querySelector("#totalWords");
textarea.addEventListener("input",function(){
    let val = this.value;
    let totalChar = val.length;
    totalChar1.innerText = totalChar;


    
let wordArray = val.split(" ");

let clearWord = wordArray.filter(function(word){
    return word != "";
});
totalWord1.innerText = clearWord.length;



});


