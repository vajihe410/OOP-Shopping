import Products from "./models/Product.js"
import Cart from "./models/Cart.js"
import { fetchData } from "./utils/httpRequest.js"

const productsNode = document.getElementById("products")
const cartListNode = document.getElementById("card-list")
const totalPriceNode = document.querySelector(".total-price")

const render =async () => {
   const ProductData = await fetchData()

   const cartInstance = new Cart(cartListNode,totalPriceNode)
   const productInstance = new Products(productsNode , ProductData,cartInstance)
   

    productInstance.showProducts()

    
}
document.addEventListener("DOMContentLoaded",render)

