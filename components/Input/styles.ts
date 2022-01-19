import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  min-height: 2rem;
  border: none;
  margin-top: 1rem;
  outline: none;
  padding-left: 1rem;
  border-radius: 12px;
  box-shadow: 1px 1px 4px gray;
  padding-left: 1.5rem;
  ::placeholder {
    font-style: italic;
    padding-left: 1.5rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.gray.grayLigth_4};
  }
`;
