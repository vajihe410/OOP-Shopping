class Cart{
    constructor(parent,price){
        this.parent = parent,
        this.price = price,
        this.products = []
        this.show = []
        this.parent.addEventListener("click",this)
    }
    showProducts (){
        this.show = [...new Set(this.products)]
        this.parent.innerHTML = ""
        this.show.forEach(product => {
            const quantity = this.products.filter(p => p.id === product.id).length
            this.createCart(product,quantity)
        })
        this.calculatePeice();
    }
   createCart(data,quantity){

    const cartEle = document.createElement("div")
    cartEle.className = "cart"
    const imgEle = this.productImg(data)
    const infoEle = this.productInfo(data)
    const controlEle = this.productControl(data, quantity)

    cartEle.innerHTML = imgEle
    cartEle.innerHTML += infoEle
    cartEle.innerHTML += controlEle

    this.parent.appendChild(cartEle)

   }
     productImg (data){
        const {image, alt} = data
        const imgJSX = `<img src=${image} alt=${alt}/>`
        return imgJSX
     }
     productInfo (data){
        const {name, price} = data
        const infoJSX = `<div class = "infoCart">
            <h4>${name}</h4>
            <p>$ ${price}</p>
        </div>`
        return infoJSX
     }
     productControl(data, quantity){
        const {id} = data
        const controlJSX = `<div class = "controlCart">
            <div>
                <button data-id = ${id}>-</button>
                <span>${quantity}</span>
                <button data-id = ${id}>+</button>
            </div>
            <button data-id = ${id}>Remove</button>    
        </div>`
        return controlJSX
     }
   handleEvent(event){
    const tagName = event.target.tagName
    const type = event.target.innerText
    const id = event.target.dataset.id

    if(tagName !== "BUTTON") return

    switch (type) {
        case "+":
            this.increase(id)
            break;
        case "-":
            this.decrease(id)
            break;
        case "Remove":
            this.remove(id)
            break;
    }
   }
   increase (id){
    const product = this.products.find(p => p.id === +id)
    this.products.push(product)
    this.showProducts()
   }
   decrease(id){
    const index = this.products.findIndex(p => p.id === +id)
    this.products.splice(index,1)
    this.showProducts()
   }
   remove(id){
    const newProducts = this.products.filter(p => p.id !== +id)
    this.products = newProducts
    this.showProducts()
   }
   calculatePeice (){
    const total = this.products.reduce((acc , cur) => acc += cur.price ,0)
    console.log(this.price)
    this.price.innerText = "$ " + total
   }
}
export default Cart