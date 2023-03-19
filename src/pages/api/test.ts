import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  api: string;
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ api: "hello", name: "n4djib" });
}
