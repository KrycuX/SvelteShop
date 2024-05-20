import type { Product } from "../models/product";

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