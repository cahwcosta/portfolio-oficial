import styled from "styled-components";

export const SwitchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.secundary};
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled.div`
  width: 1.4rem;
  height: 2.7rem;
  background-color: ${({ theme }) => theme.colors.secundary};
  border-radius: 4rem 0 0 5rem;
`;
