class Products {
    constructor(parent,products){
        this.parent = parent,
        this.products = products
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
        const infoJSX = `<div>
                                <h3>${name}</h3>
                                <div>
                                    <span>${price}</span>
                                    <button data-id = ${id}>+</button>
                                </div>
                        </div>
        `
        return infoJSX
    }
}
export default Products