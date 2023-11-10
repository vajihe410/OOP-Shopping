class Cart{
    constructor(parent,price){
        this.parent = parent,
        this.price = price,
        this.products = []
        this.show = []
    }
    showProducts (){
        this.show = [...new Set(this.products)]
        this.parent.innerHTML = ""
        this.show.forEach(product => {
            const quantity = this.products.filter(p => p.id === product.id).length
            this.createCart(product,quantity)
        })
    }
   createCart(data,quantity){

    const cartEle = document.createElement("div")

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
        const infoJSX = `<div>
            <h4>${name}</h4>
            <p>${price}</p>
        </div>`
        return infoJSX
     }
     productControl(data, quantity){
        const {id} = data
        const controlJSX = `<div>
            <div>
                <button data-id = ${id}>-</button>
                <span>$${quantity}</span>
                <button data-id = ${id}>+</button>
            </div>
            <button data-id = ${id}></button>    
        </div>`
        return controlJSX
     }
   
   
}
export default Cart