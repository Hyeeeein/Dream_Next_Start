// 순수 로직은 ts
// 정적 변수나 정적 데이터를 만들어서 쓰는 게 아니라 다른 컴포넌트에서도 가져다 쓸 수 있도록 우리만의 api 생성하여 원하는 데이터를 리턴 => 재사용이 가능한 모듈

import path from "path";
import { promises as fs } from "fs"; // 실제 이름인 promises 를 fs 로 변경

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // 경로 : cwd 는 현재경로로 현재경로와 data 라는 경로 조합
  const filePath = path.join(process.cwd(), "data", "products.json");

  // fs 는 프로미스이기 때문에 데이터를 읽어옴 그래서 비동기 함수로 만들어 줘야 함 async await
  const data = await fs.readFile(filePath, "utf-8");

  // parsing 하여 비동기적으로 object 로 리턴
  return JSON.parse(data);
}

// 해당하는 product 가 있다면 product 객체 프로미스를 리턴할 것이고  없다면 undefined
export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
