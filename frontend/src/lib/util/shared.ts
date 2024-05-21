import type { Product } from "$lib/types/types";

export const getProducts = async(): Promise<Product[] | undefined> => {
    try {
        type JSONResponse = {
            data?:{
                products:Product[]
            }
        }
        const {data}:JSONResponse= await fetch('http://localhost:9000/store/products')
                .then<JSONResponse>(response=>response.json());      
        const products= data?.products;
        return products;
        
    } catch (error) {
        console.log("Error:" + error);
        return undefined;

    }
    
}

export const getProductsTest = async(): Promise<Product[] | undefined> => {
    try {
        
        let items:Product[] = [];
        for (let index = 0; index < 10; index++)       
            items = [{Id:index, Name:createRandomString(5), Code:'product'+index,Price:12,Picture:'https://candyweb.pl/wp-content/uploads/2020/02/google-grafika.png'  },...items]; 
       
        return items;
    } catch (error) {
        console.log("Error:" + error);
        return undefined;

    }
    
}
export const getProductsTestHint = async(product:Product[]): Promise<string[] | undefined> => {
    try {

        let items:string[] = [];
        product.forEach(element => {
            items = [element.Name,...items];
        });
        
       
        return items;
    } catch (error) {
        console.log("Error:" + error);
        return undefined;

    }
    
}
function createRandomString(length:number) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  