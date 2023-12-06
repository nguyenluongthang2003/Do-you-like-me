const wrapper = document.querySelector(".wrapper"); 
const question = document.querySelector(".question"); 
const gif = document.querySelector(".gif"); 
const yesBtn = document.querySelector(".yes-btn"); 
const noBtn = document.querySelector(".no-btn"); 

yesBtn.addEventListener("click", () => { 
    question.innerHTML = "Aaaaa, I like you too"; 
    gif.src ="https://i.pinimg.com/originals/e3/8c/cf/e38ccf14293cf5319d4240952e5e133b.gif"; 
})
noBtn.addEventListener("click", () => { 
    const noBtnRect = noBtn.getBoundingClientRect(); 
    const maxX = window.innerWidth - noBtnRect.width; 
    const maxY = window.innerHeight - noBtnRect.height; 
    
    const randomX = Math.floor(Math.random() * maxX) ; 
    const randomY = Math.floor(Math.random() * maxY); 

    noBtn.style.left = randomX + "px"; 
    noBtn.style.top = randomY + "px";

})