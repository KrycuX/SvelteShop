import medusa from "../medusa.js";
export const load = async function(){
    return{
        products:medusa.getProducts()
    }
}
