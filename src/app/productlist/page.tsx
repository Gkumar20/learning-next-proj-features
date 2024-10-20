// using client component
'use client'
import { useState, useEffect, Key } from "react";


export default function ProductList() {
  const [product, setProduct] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProduct(data.products);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
        <div>
          {product.map((item: {
            id: Key;
            title: string;
            price: number;
          }) => (
            <div key={item.id}>
              <h1>title: {item.title}</h1>
              <h1 className="text-green-500">price: {item.price}</h1>
            </div>
          ))}
        </div>

    </div>
  );
}
