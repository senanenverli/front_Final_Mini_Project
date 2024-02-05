const productContainer = document.querySelector(".wishlistProduct");

function getFromLocalStorage () {
    const products = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []
    return products;
}

function render () {
    const products = getFromLocalStorage();

    products.forEach(product => {
        const card = document.createElement("div")
        const image = document.createElement("img")
        const title = document.createElement("a")
        const size = document.createElement("span")
        const price = document.createElement("span")
        const status = document.createElement("span")
        const removeItemBtn = document.createElement("button")
    
        card.classList.add("productCart")
            
        //image
        image.src = product.img;
        image.classList.add("imgProduct")
        
        //title Name
        title.innerText = product.name;
        title.setAttribute("href", "#")
        title.classList.add("productname")

        //size 
        size.innerText = product.size
        size.classList.add("productSize")

        // price
        price.innerText = `$${product.price}.00`

        //status
        status.classList.add("statusProduct")
        status.innerText = "In Stock"

        //remove 
        removeItemBtn.innerHTML = "x"
        removeItemBtn.setAttribute("type","button")

        card.appendChild(image);
        card.appendChild(title)
        card.appendChild(size);
        card.appendChild(price);
        card.appendChild(status);
        card.appendChild(removeItemBtn)

        productContainer.appendChild(card);

        removeItemBtn.addEventListener("click", (e) => {
            const id = product.id
            console.log(id)

            const selectedProduct = products.filter(currentProduct => {
            return currentProduct.id !== id;
        })
        localStorage.setItem("basket", JSON.stringify(selectedProduct));
        card.remove();
    })

})};

render();