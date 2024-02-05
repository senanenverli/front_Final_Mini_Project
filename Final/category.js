
 const trousersBtn = document.querySelector(".trousersBtn");
 const jacketsBtn  = document.querySelector(".jacketsBtn ");
 const chevronRight = document.querySelector(".trousersChevron");
 const tshirtBtn = document.querySelector(".TshirtBtn");
 const defaultBtn = document.querySelector(".defaultBtn");



 defaultBtn.addEventListener("click", ()=>{
    $("#contentDefault").slideToggle();
    $(".defaultBtn").children('.fa-solid').toggleClass('fa-chevron-down fa-chevron-up');
    defaultBtn.style.backgroundColor = "none"
    $(".fa-chevron-down").toggleClass("active");
 })
  
trousersBtn.addEventListener("click", () => {
    document.getElementById("trousersContent").classList.toggle("show");
    $("#trousersContent").slideToggle();
    $(".trousersBtn").children('.fa-solid').toggleClass('fa-chevron-right fa-chevron-down');
})
jacketsBtn.addEventListener("click", () =>{
    $("#jacketContent").slideToggle();
    $(".jacketsBtn").children('.fa-solid').toggleClass('fa-chevron-right fa-chevron-down');
})

tshirtBtn.addEventListener("click", () =>{
    $("#TshirtContent").slideToggle();
    $(".TshirtBtn").children('.fa-solid').toggleClass('fa-chevron-right fa-chevron-down');
})

// Price range
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// modal popup

const addWhislist = document.querySelectorAll(".addWishlist");

addWhislist.forEach(button =>{
  button.addEventListener("click", (e) => {
    handleAddButton(e);
  })
})

function handleAddButton(e){
    const test = e.target;
    const parent = test.parentElement;
    
    const id = parent.getAttribute('data-id');
    const name = parent.getAttribute('data-name');
    const price = parent.getAttribute('data-price');
    const size = parent.getAttribute('data-size');
    const img = parent.getAttribute('data-image');

    
    const productObj =  {
        id,
        name,
        price,
        size,
        img,
    }

    const currentProduct = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [];

    const existProduct = currentProduct.some(product => {
        return product.id === id
    });
    if(!existProduct){

        currentProduct.push(productObj)

        const jsProductObj = JSON.stringify(currentProduct);

        localStorage.setItem("basket",jsProductObj);

    }
}