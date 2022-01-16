import { GetStaticPaths, GetStaticProps, NextPageContext } from "next";
import { ParsedUrlQuery } from "querystring";
import api from "../../services/api";
import { Car, RootObject } from "../../shared/types";


const Car : React.FC<Car> = (props) => {
    console.log(props.children)
    return (
        <h1>1 carro</h1>
    )
}


export const getStaticProps : GetStaticProps = async(context) => {
    const {data} = await api.get('/cars');
    const cars: Car[] = data.cars;
    const {id} = context.params as ParsedUrlQuery;

    const carSelected = cars.find((car) => {
        return car.id === id;
    })
    return{
        props: {
            carSelected: carSelected
        }
    }
}



export async function getStaticPaths() {
    const {data} = await api.get('/cars');
    const cars : Car[]  = data.cars;
    const idsCars = cars.map((car) => {
        return {params: {id: car.id}}
    })
    console.log(idsCars)
    return{
        paths: idsCars,
        fallback: false
    }
}

export default Car;