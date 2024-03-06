import styled from "styled-components";
import Logo from "../../../components/Logo";

export const Navbar = styled.section`
  width: 100%;
  padding: 5.5rem 3.1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Options = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-right: 3.6rem;
`;

export const Option = styled.li`
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.054rem;
  color: ${({ theme }) => theme.colors.secundary};
  cursor: pointer;
  margin: 0 1.6rem;

  &:after {
    content: "";
    width: 0;
    height: 0.15rem;
    background-color: ${({ theme }) => theme.colors.secundary};
    display: block;
    transition: width 0.3s ease;
  }

  &:hover {
    &:after {
      width: 3rem;
    }
  }
`;

export const Icon = styled(Logo)<{ color: string }>`
`;
