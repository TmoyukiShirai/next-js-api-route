// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse //<Data>
) {
  //res.status(200).json({ name: 'John Doe' })
  const { method } = req;

  switch (method) {
    case "GET":
      res.json({ message: "GETリクエスト" });
      break;
    case "POST":
      res.json({ message: "POSTリクエスト" });
      break;
    case "PATCH":
      res.json({ message: "PATCHリクエスト" });
      break;
    default:
      res.json({ message: "GET/POST/PATCHでもないリクエストです。" });
      break;
  }
}
