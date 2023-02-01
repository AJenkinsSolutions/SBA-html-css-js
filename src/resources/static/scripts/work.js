console.log("work.js entrypoint");

  let currentIndex = 0;
  const images = ["chill_bro.png", "coding.png", "thumbs_down.png"];

  

window.addEventListener('DOMContentLoaded',()=>{
    
  document.querySelectorAll(".carousel").forEach(carousel => {
    //List of all items
    const items = carousel.querySelectorAll(".carousel__item");
    // console.log("Debug" + items);

    // items.forEach((item, i, images) => {
    //   item.querySelector(".img").setAttribute("src", "../static/images/"+images[i]);
    // })
  
    //nav
    //creates new array from items list
    const buttonsElements = Array.from(items, ()=>{

        return `<span class="carousel__button"></span>`;
    });
    //Add carousel Nav
    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel_nav">
    ${buttonsElements.join("")}
    `);
    // console.log("Debug" + buttonsElements);
    //Get buttonsList just generated
    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i)=>{
      button.addEventListener("click", ()=>{
        // unselect all items
        items.forEach(item => item.classList.remove("carousel__item--selected"));
        buttons.forEach(btn => btn.classList.remove("carousel__button--selected"));

        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected")
      });
    });

    //Select 1st item on page load
    items[0].classList.add("carousel__item--selected");
        buttons[0].classList.add("carousel__button--selected")
    

  });

   
})


