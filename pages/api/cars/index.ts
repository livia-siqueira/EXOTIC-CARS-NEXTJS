import { NextApiRequest, NextApiResponse } from "next";
import { buildCars, extractCars } from "../../../helpers/api";
import fs from 'fs'
import { Car } from "../../../shared/types";

async function handler(req : NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        //const cars = await fetch('cars.json');
        //getCars();
    }

    if(req.method === 'POST'){
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.email;

        const pathFile = buildCars("cars.json")
        const data : Car[]= extractCars(pathFile);

        const newCar = {
            id: data.length + 1,
            email,
            password
        }
        data.push(newCar);
        fs.writeFileSync(pathFile, JSON.stringify(data));
        res.status(201).json({message: "Success", car: newCar});

        
    }
}
export default handler;