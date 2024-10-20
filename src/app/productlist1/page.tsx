import MyButton from "@/components/MyButton";
import CheckPrice from "@/components/CheckPrice";
import { Key } from "react";

async function ProductList() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
}



export default async function Products() {
  const products =await  ProductList();
  // console.log("product is", products[0]);

  return (
    <div>
      {products.map((item: { 
        id: Key; 
        title: string ; 
        price: number ; 
      })=>(
            <div key={item.id}>
              <h1>title: {item.title}</h1>
              <CheckPrice price = {item.price} />
            </div>
          ))}
          <MyButton/>
    </div>
  )
}
