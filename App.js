const bars = document.querySelectorAll('li');

bars.forEach((bar, index)=>{
    bar.addEventListener('click', ()=>{
        bars.forEach(bar=>{
            bar.classList.remove('active')
        })
        bar.classList.add('active');
    })
})


//////////////////////////////////////////////////////////////

const contactpage = document.getElementById('contactsPage');

contactpage.addEventListener('click', ()=>{
    const contactpage = document.querySelector('.contactPageCont');
    contactpage.style.display = 'block';
})


////////////////////////////////////////////////////////////////

const scrollDown = document.getElementById('scrollDown');

scrollDown.addEventListener('click', () => {
    const scrollDown = document.querySelector('.bodyWrapper');
    scrollDown.style.display = 'block';

    const cut =document.querySelector('.cut');
    cut.classList.remove('cut');
})

//////////////////////////////////////////////////////////////////
const nestBtn = document.querySelector(".nestBtn");
const backbtn = document.querySelector(".backBtn");
const scrollCont = document.querySelector(".contScroll");

scrollCont.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollCont.scrollLeft += evt.deltaY;
});

nestBtn.addEventListener("click", () => {
    scrollCont.style.ScrollBehaviour = "smooth";
    scrollCont.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
    scrollCont.style.ScrollBehaviour = "smooth";
    scrollCont.scrollright -= 900;
})