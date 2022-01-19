import styled from "styled-components";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  max-width: 60%;
  min-height: 60vh;
  background: linear-gradient(
    transparent,
    #ffffff 0%,
    ${({ theme }) => theme.gray.grayLigth_5} 100%
  );
  box-shadow: 2px 2px 8px gray;
  border-radius: 13px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;

  @media (max-width: 1100px) {
    max-width: 80%;
    min-height: 70vh;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding-top: 10px;
    min-height: 100vh;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.gray.grayDark};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
`;

export const ContainerImage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.gray.grayDark};
  font-style: italic;
`;

export const Img = styled(Image)`
  border-radius: 80%;
  opacity: 0.7;
`;

export const AreaControl = styled.div``;

export const Select = styled.select`
  width: 50%;
  outline: none;
  border: none;
  margin: 0.8rem 0px 1rem;
  border-radius: 12px;
  padding-left: 0.4rem;
  box-shadow: 1px 1px 4px gray;
  margin-left: 0.3rem;
  color: ${({ theme }) => theme.gray.grayLigth_6};
`;

export const Button = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  top: 3rem;
  right: 10rem;

  @media (max-width: 800px) {
    left: 8rem;
    top: 1rem;
    width: 150px;
    height: 30px;
  }
`;

export const Icon = styled(FiCheck)``;
