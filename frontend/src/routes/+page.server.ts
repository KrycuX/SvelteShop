import type { Product } from "../models/product.ts";
import { getProducts } from "../util/shared.js";

let items:Product[];
export const load = async function(){
    productData();
    return{     
        products: items
    }
}

const productData = async () => {
    const temp = await getProducts();
    if(temp === undefined)
        for (let index = 0; index < 10; index++) {
            items = [{Id:index, Name:'product'+index, Code:'product'+index,Price:12,Picture:'' },...items];         
       
        }
    else
        items = temp;
}
$: productData();
