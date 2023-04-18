import React from "react";
import { notFound } from "next/navigation";

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

const PantsPage = ({ params }: Props) => {
  if (params.slug === "nothing") return notFound();
  return <h1>{params.slug} 제품 페이지</h1>;
};

export default PantsPage;

// 어떤 경로에 한에서는 정해진 것을 보여주고 싶을 때 : generateStaticParams 함수 이름은 next 에서 정해준 규격 사항
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({ slug: product }));
}
