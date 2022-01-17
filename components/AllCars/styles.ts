import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 1rem auto;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);


    @media(max-width: 100px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
`;
