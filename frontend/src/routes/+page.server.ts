import type { Product } from "$lib/types/types";
import { getProducts } from "$lib/util/shared.js";
import type { PageServerLoad } from "./$types.js";

export const load:PageServerLoad = async(event) =>
{
   const items = await productData();
    return{     
        products: 
        {
            items
        }
    }
}

const productData = async ():Promise<Product[]>  => 
    {
    const temp = await getProducts();
    let items:Product[] = [];
    console.log(temp);
    if(temp === undefined)
    {
        for (let index = 0; index < 10; index++)       
            items = [{Id:index, Name:'product'+index, Code:'product'+index,Price:12,Picture:'https://candyweb.pl/wp-content/uploads/2020/02/google-grafika.png'  },...items];                  
    }
    else
        items = temp;
    

    return items

    }
      



