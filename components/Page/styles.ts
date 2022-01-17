import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  background: transparent linear-gradient(15deg, #ffffff 0%, #d8d7d7 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px 0 90px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 80px;
    padding-top: 1rem;
  }
`;

const breatheAnimation = keyframes`
 0%{
    -webkit-transform:scaleX(-1);
 }
`;

export const Section = styled.section`
  text-align: center;
  max-width: 30rem;
`;

export const Aside = styled.aside`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 1rem;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: initial;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 5rem;
  font-style: italic;
  text-shadow: 2px 5px 15px ${({ theme }) => theme.gray.grayLigth_4};
  color: ${({ theme }) => theme.gray.grayDark};
`;

export const Description = styled.p`
  font-size: 2rem;
  font-weight: lighter;
  color: ${({ theme }) => theme.gray.grayLigth_4};
`;

export const ImgBrand = styled(Image)`
`;
