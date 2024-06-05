//Creation of aliases 
type Product = {
  name: string;
  price: number;
  quantity: number;
};

//giving type of products as 'Product' which is actully aliases 
const product1: Product = {
  name: "laptop",
  price: 60000,
  quantity: 40,
};

const product2: Product = {
  name: "computer",
  price: 50000,
  quantity: 300,
};

const cal = (product: Product) => {
  console.log(`Product Name is :${product.name}`);
  console.log(`Price is${product.price}`);
  console.log(`Quantity is: ${product.quantity}`);
  console.log(`total cost is  ${product.price * product.quantity}`);
};

cal(product1);
cal(product2);
