import { fetchData } from "./utils/httpRequest.js"

const render =async () => {
   const ProductData = await fetchData()
   console.log(ProductData)
    
}
document.addEventListener("DOMContentLoaded",render)


class products 