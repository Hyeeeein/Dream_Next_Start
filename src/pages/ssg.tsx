import MeowArticle from "@/app/components/MeowArticle";
import { Product, getProducts } from "@/app/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

// 12 ssg
// 클라이언트 측에서 실행되는 함수(state, log, effect 등)
export default function SSGPage({ products }: Props) {
  // 페이지에 필요한 데이터는 prop 형태로 전달 받음
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
      <MeowArticle />
    </>
  );
}

// 서버상 에서 실행되는 함수
// prop 을 서버에서 전달해줄건데 서버에서 어떤 함수로 전달에 주느냐에 따라 ssg, ssr 이 나뉨
export async function getStaticProps() {
  const products = await getProducts();
  // 서버에서 실행할 때 products 가 있을 경우 이 데이터를 prop 으로 전달해주어 랜더링
  return {
    props: { products },
    revalidate: 10, // isr
  };
}
