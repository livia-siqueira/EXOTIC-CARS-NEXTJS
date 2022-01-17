import styled from "styled-components";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export const Container = styled.div`
  max-width: 80%;
  min-height: 30vh;
  background-color: white;
  box-shadow: 0px 10px 10px gray;
  border-radius: 13px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 2rem;
  justify-content: center;
`;

export const ImageColor = styled.div`
  display: flex;

  input {
    :nth-child(2) {
      width: 80px;
      margin-left: 20px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({theme}) => theme.gray.grayDark};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

export const Label = styled.label`
  font-size: 0.8rem;
  padding: 8px;
`;

export const Img = styled(Image)`
  border-radius: 13px 0 0px 13px;
  opacity: 0.7;
`;

export const ChoiceImage = styled.input``;

export const Input = styled.input`
  width: 80%;
  min-height: 1rem;
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

export const Select = styled.select`
  width: 50%;
  outline: none;
  margin: 0.8rem 0px 1rem;
`;

export const Button = styled.button`
  width: 1.5rem;
  height: 1rem;
  border-radius: 50%;
  margin-left: 8px;

`

export const Icon = styled(FiCheck)`

`

