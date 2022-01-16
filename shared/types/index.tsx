



export interface RootObject {
    cars: Car[];
}

export interface Photo {
    color: string;
    photo: string;
}

export interface Car {
    id: string,
    model: string;
    brand: string;
    price: string;
    period: string;
    logo_brand: string;
    cover_photo: string;
    photos: Photo[];
}


