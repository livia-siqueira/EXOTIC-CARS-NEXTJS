import { NextApiRequest, NextApiResponse } from "next";
import { buildCars, extractCars } from "../../../helpers/api";
import fs from 'fs'
import { Car } from "../../../shared/types";

async function handler(req : NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        const pathFile = buildCars("cars.json")
        const data : Car[]= extractCars(pathFile);
        res.status(200).json({message: "Success", cars: data});

    }

    if(req.method === 'POST'){
        console.log(req.body);
        const {model, brand, price, logo_brand, photos, cover_photo, period} = req.body.car;

        const pathFile = buildCars("cars.json")
        const data : Car[]= extractCars(pathFile);

        const newCar = {
            id: `${data.length + 1}`,
            model,
            brand,
            price,
            logo_brand,
            photos,
            period,
            cover_photo
        }
        data.push(newCar);
        fs.writeFileSync(pathFile, JSON.stringify(data));
        res.status(201).json({message: "Success", car: newCar});

        
    }
}
export default handler;