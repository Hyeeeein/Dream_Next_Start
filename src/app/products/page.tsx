import React from "react";
import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

const ProductPage = () => {
  return (
    <section>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product: string, index: number) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductPage;
