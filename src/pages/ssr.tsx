import MeowArticle from "@/app/components/MeowArticle";
import { Product, getProducts } from "@/app/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

// 12 ssr
export default function SSGPage({ products }: Props) {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle /> {/* -> 이 컴포넌트의 경우 csr */}
    </>
  );
}

// ssg 와 다른 점 getServerSideProps 함수를 사용
export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
