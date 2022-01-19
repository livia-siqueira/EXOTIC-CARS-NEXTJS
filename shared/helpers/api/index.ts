import {readFileSync} from 'fs'
import {join} from 'path';

export function buildCars(fileName: string){
    return join(process.cwd(), "data", fileName)
}

export function extractCars<T>(pathFile: any) {
    const fileData = readFileSync(pathFile) as unknown as string;
    const data : T = JSON.parse(fileData);

    return data;
}