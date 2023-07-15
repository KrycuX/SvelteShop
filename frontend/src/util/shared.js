export const getProducts = async() => {
    try {
        const producttres = await fetch('http://localhost:9000/store/products');
        const productdata = await producttres.json();
        const products = productdata?.products;
 
        return{
            products:products
        }
    } catch (error) {
        console.log("Error:" + error)
    }
}