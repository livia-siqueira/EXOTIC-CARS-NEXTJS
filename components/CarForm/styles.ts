import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
 max-width: 1500px;
  min-height: 30vh;
  background-color: white;
  box-shadow: 0px 10px 10px gray;
  border-radius: 13px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;



`

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label `
    font-size: 0.7rem;
`

export const Img = styled(Image)`
  border-radius: 13px 0 0px 13px;
  opacity: 0.7;
`;

export const Input = styled.input`
  max-width: 300px;
  min-height: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray.grayLigth_4};
  margin-bottom: 1rem;
  outline: none;
`;

export const Select = styled.select`
  width: 50%;
  border: none;
  margin-bottom: 2rem;
  outline: none;
`;
