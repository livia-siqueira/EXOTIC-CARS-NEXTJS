import {readFileSync} from 'fs'
import {join} from 'path';
import { Car, User } from '@shared/index';

export const allUsers = () => {
    const pathFile = buildCars("users.json");
    const data: User[] = extractCars(pathFile);
    return data;
}

export const allCars = () => {
    const pathFile = buildCars("cars.json");
    const data: Car[] = extractCars(pathFile);
    return data;
}

export function buildCars(fileName: string){
    return join(process.cwd(), "data", fileName)
}

export function extractCars<T>(pathFile: any) {
    const fileData = readFileSync(pathFile) as unknown as string;
    const data : T = JSON.parse(fileData);

    return data;
}