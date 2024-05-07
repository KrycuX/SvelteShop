import type { Product } from "../models/product.js";
import { getProducts } from "../util/shared.js";

let items:Product[];
export const load = async function(){
    productData()
    return{     
        products: items
    }
}

const productData = async () => {
    const temp = await getProducts();
    if(temp === undefined)
        items = []
    else
        items = temp;
}
$: productData();
