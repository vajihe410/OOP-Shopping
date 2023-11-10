class Products {
    constructor(parent,products,cart){
        this.parent = parent,
        this.products = products,
        this.cart = cart,
        this.parent.addEventListener("click",this)
    }
    showProducts (){
        this.products.forEach( product => {
            this.createCard(product)
        });
    }
    createCard(data){
        const card = document.createElement("div")

        const imageEle = this.productImg(data)
        const infoEle = this.productInfo(data)

        card.innerHTML = imageEle
        card.innerHTML += infoEle

        this.parent.appendChild(card)
    }
    productImg (data){
        const {alt, image} = data
        const imageJSX = `<img src = ${image} alt = ${alt}>`
        return imageJSX
    }
    productInfo (data){
        const {id, name, price} = data
        const infoJSX = `<div id="product-info">
                                <h3>${name}</h3>
                                <div>
                                    <span>${price}</span>
                                    <button data-id = ${id}>+</button>
                                </div>
                        </div>
        `
        return infoJSX
    }
    handleEvent(){
        const element = event.target
        if(element.tagName === "BUTTON"){
            this.addToCart(element.dataset.id)
        }
    }
    addToCart(id){
        const product = this.products.find(item => item.id === +id)
        this.cart.products.push(product)
        console.log(this.cart)
    }
}
export default Products