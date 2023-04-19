// 예전 방법
// fs 모듈 오류 : pages 폴더의 하위 컴포넌트는 클라이언트에서도 실행될 수 있기 때문에 node 모듈인 fs 는 되지 않음 (https://ppsu.tistory.com/74 참고)

import { Product, getProducts } from "@/app/service/products";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | object>
) {
  if (req.method === "GET") {
    // const products = await getProducts(); // fs 모듈 오류
    return res.status(200).send("<h1>fs 모듈 오류로 product 정보 못 보냄</h1>");
  }
  // res.status(200);
}
