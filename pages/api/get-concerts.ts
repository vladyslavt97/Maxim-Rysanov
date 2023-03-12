import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
   try {
       const client = await clientPromise;
       const db = client.db("Maxim_Rysanov");

       const concerts = await db
           .collection("concerts-2023")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();
        
       res.json(concerts);
   } catch (e) {
       console.error(e);
   }
};  