const getProducts = async () => {
  try {
    const { data } = await fetch("http://localhost:9000/store/products").then((response) => response.json());
    const products = data?.products;
    return products;
  } catch (error) {
    console.log("Error:" + error);
    return void 0;
  }
};
const load = async (event) => {
  const items = await productData();
  return {
    products: {
      items
    }
  };
};
const productData = async () => {
  const temp = await getProducts();
  let items = [];
  console.log(temp);
  if (temp === void 0) {
    for (let index = 0; index < 10; index++)
      items = [{ Id: index, Name: "product" + index, Code: "product" + index, Price: 12, Picture: "https://candyweb.pl/wp-content/uploads/2020/02/google-grafika.png" }, ...items];
  } else
    items = temp;
  return items;
};
export {
  load
};
