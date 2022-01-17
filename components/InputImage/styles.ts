import styled from "styled-components";

export const ImageColor = styled.div`
  display: flex;

  input {
    :nth-child(2) {
      width: 80px;
      margin-left: 20px;
    }
  }
`;


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