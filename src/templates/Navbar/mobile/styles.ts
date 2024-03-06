import styled from "styled-components";
import Logo from "../../../components/Logo";

export const Navbar = styled.section`
  width: 100%;
  padding: 3.1rem 2.5rem 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Icon = styled(Logo)<{ color: string }>`
  width: 3.7rem;
  height: 2.4rem;
`;

export const Burguer = styled.div`
  width: 3.5rem;
  height: 2.1rem;
  position: relative;
`;

export const Line = styled.div<{ active: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secundary};
  width: 100%;
  height: 0.3rem;
  transition: top 0.4s ease, transform 0.4s ease;

  &:nth-child(1) {
    top: ${({ active }) => (active ? "50%" : 0)};
    transform: ${({ active }) => (active ? "rotate(45deg)" : "rotate(0deg)")};
  }

  &:nth-child(2) {
    top: 50%;
    transform: ${({ active }) => (active ? "rotate(45deg)" : "rotate(0deg)")};
  }

  &:nth-child(3) {
    top: ${({ active }) => (active ? "50%" : "100%")};
    transform: ${({ active }) => (active ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;

export const Menu = styled.nav`
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 15rem;
`;

export const Option = styled.li`
  font-size: 3rem;
  margin-bottom: 3rem;
`;
