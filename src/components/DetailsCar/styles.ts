import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  background: transparent
    linear-gradient(
      125deg,
      #ffffff 0%,
      ${({ theme }) => theme.gray.grayLigth_5} 100%
    );
    padding-top: 40px;
`;

export const Title = styled.div`
  width: 330px;
  display: flex;
  justify-content: space-between;

  @media(max-width: 450px){
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0px auto;
  padding-top: 20px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

export const ImageBig = styled(Image)``;

export const Name = styled.h2`
  font-size: 2rem;

  @media (max-width: 450px) {
   margin-left: 20px;
   font-size: 1.4rem;
  }
`;

export const Price = styled.p`
  font: normal normal 300 2rem Segoe UI;
`;

export const DetailsColors = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20%;
`;

export const Color = styled.h4`
  font-weight: lighter;

  :first-letter {
    text-transform: uppercase;
  }
`;

export const Number = styled.h4``;
