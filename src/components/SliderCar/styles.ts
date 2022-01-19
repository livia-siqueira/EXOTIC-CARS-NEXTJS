import styled from "styled-components";
import { Swiper } from "swiper/react";

interface image {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
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
  margin-bottom: 2rem;
  .swiper-wrapper {
    align-items: center;
  }
  @media (max-width: 300px) {
    width: 120px;
    height: auto;
    margin: 0 auto;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1345px) {
    width: 200px;
    height: auto;
    margin: 0;
  }
  @media (max-width: 1080px) {
    width: 300px;
    height: auto;
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 250px;
    height: auto;
    margin: 0;
  }
  @media (max-width: 450px) {
    width: 150px;
    height: auto;
    margin-left: 30px;
  }
  @media (max-width: 360px) {
    width: 150px;
    height: auto;
    margin-left: 30px;
  }
`;

type Button = {
  direction: string;
};

export const Item_Card = styled.div<image>`
  width: ${({ isActive }) => (isActive ? "440px" : "15rem")};
  height: ${({ isActive }) => (isActive ? "240px" : "10rem")};
  margin-top: ${({ isActive }) => (isActive ? "-10%" : "0")};
  padding: 3.8rem;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 30px #0000001a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 1s ease;
  background: ${({ isActive }) =>
    isActive
      ? "linear-gradient(90deg, #b9baf1 0%, #e0d3ef 100%)"
      : ({ theme }) => theme.gray.grayLigth};
`;

export const ButtonsSlider = styled.button<Button>`
  position: absolute;
  background: ${({ theme }) => theme.gray.grayDark};
  width: 2.7rem;
  height: 2.7rem;
  ${({ direction }) => (direction === "left" ? "left: 90px" : "right: 90px")};
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 6px #00000029;
  color: white;
  top: 800px;
  bottom: 0px;
  @media (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    padding: 2px;
    margin-left: 2%;
    margin-right: 2%;
  }
`;

export const Container_Button = styled.button`
  width: 80%;
`;