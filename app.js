import Products from "./models/Product.js"
import { fetchData } from "./utils/httpRequest.js"

const productsNode = document.getElementById("products")

const render =async () => {
   const ProductData = await fetchData()
   const productInstance = new Products(productsNode , ProductData)
    productInstance.showProducts()
}
document.addEventListener("DOMContentLoaded",render)

