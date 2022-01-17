import styled from "styled-components";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  max-width: 60%;
  min-height: 60vh;
  background-color: white;
  box-shadow: 2px 2px 2px 2px gray;
  border-radius: 13px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.gray.grayLigth_6};
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 2rem;
  justify-content: center;
`;



export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.gray.grayDark};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
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
  padding: 2px;
`;

export const Img = styled(Image)`
  border-radius: 80%;
  opacity: 0.7;
`;

export const ChoiceImage = styled.input``;

export const Input = styled.input`
  width: 100%;
  min-height: 1.5rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray.grayLigth_4};
  margin-bottom: 1rem;
  outline: none;
  padding-left: 0.4rem;

  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.gray.grayLigth_4};
  }
`;

export const AreaControl = styled.div``;

export const Select = styled.select`
  width: 50%;
  outline: none;
  margin: 0.8rem 0px 1rem;
`;

export const Button = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  top: 2rem;
  right: 10rem;
`;

export const Icon = styled(FiCheck)``;
