import { FC } from "react";
import SwitchButton from "../../../components/SwitchButton";
import { NavbarProps } from "../props";
import C from "../const";
import ScrollTo from "../../../components/ScrollTo";
import useAnimation from "./animations";
import * as S from "./styles";

const NavbarMobile: FC<NavbarProps> = ({ toggleTheme }) => {
  const { isActive, hiddenContentRef, handleActiveBurger } =
    useAnimation();

  return (
    <S.Navbar>
      <S.Header>
        <S.Icon />
        <S.Burguer onClick={handleActiveBurger}>
          <S.Line active={isActive} />
          <S.Line active={isActive} />
          <S.Line active={isActive} />
        </S.Burguer>
      </S.Header>

      <S.Menu ref={hiddenContentRef}>
        <S.Options>
          {C.options.map((option) => (
            <ScrollTo key={option.hash} hash={option.hash}>
              <S.Option onClick={handleActiveBurger}>{option.text}</S.Option>
            </ScrollTo>
          ))}
          <SwitchButton onClick={toggleTheme} />
        </S.Options>
      </S.Menu>
    </S.Navbar>
  );
};

export default NavbarMobile;
