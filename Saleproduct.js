var buy1Button = document.getElementById("buy1");
var buy2Button = document.getElementById("buy2");
var buy3Button = document.getElementById("buy3");
var buy4Button = document.getElementById("buy4");
var buy5Button = document.getElementById("buy5");
var buy6Button = document.getElementById("buy6");
var buy7Button = document.getElementById("buy7");
var buy8Button = document.getElementById("buy8");
var buy9Button = document.getElementById("buy9");
var buy10Button = document.getElementById("buy10");
var buy11Button = document.getElementById("buy11");
var buy12Button = document.getElementById("buy12");
var buy13Button = document.getElementById("buy13");
var buy14Button = document.getElementById("buy14");
var buy15Button = document.getElementById("buy15");
buy1Button.addEventListener("click",function(){
    if (buy1Button.classList.contains("processing")){
        alert("Product 1 is already processing.")
    }
    else{
        alert("You have purchased Product 1 for " + 7 + "$"+", Contact : 0978677393");
        buy1Button.classList.add("processing");
    }
});
buy2Button.addEventListener("click",function(){
    if(buy2Button.classList.contains("processing")){
        alert("Product 2 is already processing.");
    }
    else{
        alert("You have purchased Product 2 for " + 5 + "$"+", Contact : 0978677393");
        buy2Button.classList.add("processing");
    }
});
buy3Button.addEventListener("click",function(){
    if(buy3Button.classList.contains("processing")){
        alert("Product 2 is already processing.");
    }
    else{
        alert("You have purchased Product 3 for " + 5 + "$"+", Contact : 0978677393");
        buy3Button.classList.add("processing");
    }
})
buy4Button.addEventListener("click",function(){
    if(buy4Button.classList.contains("processing")){
        alert("Product 4 is already processing.");
    }
    else{
        alert("You have purchased Product 4 for " + 15 + "$"+", Contact : 0978677393");
        buy4Button.classList.add("processing");
    }
});
buy5Button.addEventListener("click",function(){
    if(buy5Button.classList.contains("processing")){
        alert("Product 5 is already processing.");
    }
    else{
        alert("You have purchased Product 5 for " + 15 + "$"+", Contact : 0978677393");
        buy5Button.classList.add("processing");
    }
});
buy6Button.addEventListener("click",function(){
    if(buy6Button.classList.contains("processing")){
        alert("Product 6 is already processing.");
    }
    else{
        alert("You have purchased Product 6 for " + 5 + +", Contact : 0978677393")
        buy6Button.classList.add("processing");
    }
});
buy7Button.addEventListener("click",function(){
    if(buy7Button.classList.contains("processing")){
        alert("Product 7 is already processing.");
    }
    else{
        alert("You have purchased Product 7 for " + 5 + "$"+", Contact : 0978677393");
        buy7Button.classList.add("processing");
    }
});
buy8Button.addEventListener("click",function(){
    if(buy8Button.classList.contains("processing")){
        alert("Product 8 is already processing.");
    }
    else{
        alert("You have purchased Product 8 for " + 10 + "$"+", Contact : 0978677393");
        buy8Button.classList.add("processing");
    }
});
buy9Button.addEventListener("click",function(){
    if(buy9Button.classList.contains("processing")){
        alert("Product 9 is already processing.");
    }
    else{
        alert("You have purchased Product 9 for " + 5 + "$"+", Contact : 0978677393");
        buy9Button.classList.add("processing");
    }
});
buy10Button.addEventListener("click",function(){
    if(buy10Button.classList.contains("processing")){
        alert("Product 10 is already processing.");
    }
    else{
        alert("You have purchased Product 10 for " + 6 + "$"+", Contact : 0978677393");
        buy10Button.classList.add("processing");
    } 
});
buy11Button.addEventListener("click",function(){
    if(buy10Button.classList.contains("processing")){
        alert("Product 11 is already processing.");
    }
    else{
        alert("You have purchased Product 11 for " + 0.75 + "$"+", Contact : 0978677393");
        buy10Button.classList.add("processing");
    } 
});
buy12Button.addEventListener("click",function(){
    if(buy10Button.classList.contains("processing")){
        alert("Product 12 is already processing.");
    }
    else{
        alert("You have purchased Product 12 for " + 0.75 + "$"+", Contact : 0978677393");
        buy10Button.classList.add("processing");
    } 
});
buy13Button.addEventListener("click",function(){
    if(buy10Button.classList.contains("processing")){
        alert("Product 13 is already processing.");
    }
    else{
        alert("You have purchased Product 13 for " + 1 + "$"+", Contact : 0978677393");
        buy10Button.classList.add("processing");
    } 
});
buy14Button.addEventListener("click",function(){
    if(buy10Button.classList.contains("processing")){
        alert("Product 14 is already processing.");
    }
    else{
        alert("You have purchased Product 14 for " + 0.5 + "$"+", Contact : 0978677393");
        buy10Button.classList.add("processing");
    } 
});
buy15Button.addEventListener("click",function(){
    if(buy10Button.classList.contains("processing")){
        alert("Product 15 is already processing.");
    }
    else{
        alert("You have purchased Product 15 for " + 15 + "$"+", Contact : 0978677393");
        buy10Button.classList.add("processing");
    } 
});
let i = 0 ;
const images = ["food1.jpg","food2.jpg","food3.jpg","food4.jpg","food5.jpg","drink1.jpg","drink2.jpg","drink3.jpg"];
const time = 3000;
const img = document.getElementById("image");
const changeImage = () => {
    img.src = images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i = 0 ;
    }
    setTimeout("changeImage()",1000);
}
window.onload = changeImage;



