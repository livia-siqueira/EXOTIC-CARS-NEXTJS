import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
  padding-top: 40px;
  opacity: 1;
`;

export const Title = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
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

  @media (max-width: 1000px) {
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
