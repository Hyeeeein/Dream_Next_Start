import React from "react";
import Link from "next/link";
import { Product, getProducts } from "../service/products";
import MeowArticle from "../components/MeowArticle";

// isr : 서버 상에서 언제 다시 만들어둘 것인지를 지정 (초단위, 기본은 false, 0은 ssr 으로 요청이 올때마다 변경)
// export const revalidate = 3;

const ProductPage = async () => {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  // products 가 프로미스를 반환하니 async await 사용
  const products = await getProducts();

  // 네트워크 fetch 로 데이터를 읽어와서 ssg 하는 방법
  // const res = await fetch("https://meowfacts.herokuapp.com", {
  //   // next: { revalidate: 3 }, // 3초마다 isr 로 가져오라고 인식
  //   // cache: "no-store", // 기본은 default, 'no-store' 는 ssr 로 revalidate: 0 과 같은 효과
  // });
  // const data = await res.json();
  // const factText = data.data[0];
  return (
    <section>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }: Product) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </section>
  );
};

export default ProductPage;
