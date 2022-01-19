import { NextApiRequest, NextApiResponse } from "next";
import { buildCars, extractCars } from "../../../helpers/api";
import fs from "fs";
import { User } from "../../../shared/types";
import { compareHashPassword, hashPassword } from "../../../helpers";

export const allUsers = () => {
    const pathFile = buildCars("users.json");
    const data: User[] = extractCars(pathFile);
    return data;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const pathFile = buildCars("users.json");
    const data: User[] = extractCars(pathFile);
    res.status(200).json({ message: "Success", users: data });
  }
  if (req.method === "POST") {
    const { email, password } = req.body.user;
    const passwordHASH = await hashPassword(password);
    const pathFile = buildCars("users.json");
    const data = allUsers();
    const newUser = {
      email,
      password: passwordHASH,
    };
    const userExist = data.find(async (user) => {
      return (
        (await compareHashPassword(user.password, passwordHASH)) &&
        user.email === email
      );
    });
    if (userExist) {
      res.status(422).json({ message: "User exist", user: userExist });
      return;
    } 
      data.push(newUser);
      fs.writeFileSync(pathFile, JSON.stringify(data));
      return res.status(201).json({ message: "Success", user: newUser });
  }
}
export default handler;
