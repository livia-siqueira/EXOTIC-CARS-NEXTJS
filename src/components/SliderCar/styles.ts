import styled from "styled-components";
import { Swiper } from "swiper/react";

interface image {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    margin-top: 20px;
    width: 80%;
    margin: 20px auto;
  }
  @media (max-width: 500px) {
    margin-top: 20px;
    margin: 20px auto;
  }
`;

export const Image = styled.img`
  position: absolute;
  left: 20%;
  top: 20%;
  right: 0;
  width: 100%;
`;

export const Slider = styled(Swiper)`
  height: 25rem;
  width: 100%;
  margin-bottom: 2rem;
  .swiper-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 300px) {
    width: 120px;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 80%;
    height: 280px;
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Button = {
  direction: string;
};

export const Item_Card = styled.div<image>`
  width: ${({ isActive }) => (isActive ? "400px" : "15rem")};
  height: ${({ isActive }) => (isActive ? "240px" : "10rem")};
  margin-top: ${({ isActive }) => (isActive ? "-10%" : "0")};
  padding: 3rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 30px #0000001a;
  position: relative;
  transition: all 1s ease;
  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%)"
      : ({ theme }) => theme.gray.grayLigth};

  @media (max-width: 600px) {
    width: 200px;
  }
`;

export const ButtonsSlider = styled.button<Button>`
  position: absolute;
  background: ${({ theme }) => theme.gray.grayDark};
  width: 2.7rem;
  height: 2.7rem;
  ${({ direction }) => (direction === "left" ? "left: 50px" : "right: 50px")};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 6px #00000029;
  color: white;
  top: 900px;
  bottom: 0px;
  @media (max-width: 1000px) {
    top: 1100px;
    margin-left: 0%;
    margin-right: 0%;
  }
  @media (max-width: 730px) {
    top: 800px;
    margin-left: 0%;
    margin-right: 0%;
  }
  @media (max-width: 500px) {
    ${({ direction }) => (direction === "left" ? "left: 0px" : "right: 0px")};
  }
`;

export const Container_Button = styled.button`
  width: 80%;
`;
