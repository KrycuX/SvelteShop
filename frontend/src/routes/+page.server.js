
import { getProducts } from "../util/shared.js";

let items;
export const load = async function(){
    productData()
    return{
       
        products: items
    }
}

const productData = async () => {
    const data = await getProducts();
    items = data;
}
$: productData()