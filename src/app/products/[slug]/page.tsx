import React from "react";
import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/app/service/products";

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

const PantsPage = async ({ params: { slug } }: Props) => {
  // if (params.slug === "nothing") return notFound();

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }
  return <h1>{product.name} 제품 페이지</h1>;
};

export default PantsPage;

// 어떤 경로에 한에서는 정해진 것을 보여주고 싶을 때 : generateStaticParams 함수 이름은 next 에서 정해준 규격 사항
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄 거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
