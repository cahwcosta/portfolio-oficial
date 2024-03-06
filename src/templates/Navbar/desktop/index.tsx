import { FC } from "react";
import * as S from "./styles";
import SwitchButton from "../../../components/SwitchButton";
import { NavbarProps } from "../props";
import C from "../const";
import ScrollTo from "../../../components/ScrollTo";

const NavbarDesktop: FC<NavbarProps> = ({ toggleTheme }) => {
  return (
    <S.Navbar>
      <S.Icon />
      <S.RightSide>
        <S.Options>
          {C.options.map((option) => (
            <ScrollTo key={option.hash} hash={option.hash}>
              <S.Option>{option.text}</S.Option>
            </ScrollTo>
          ))}
        </S.Options>
        <SwitchButton onClick={toggleTheme} />
      </S.RightSide>
    </S.Navbar>
  );
};

export default NavbarDesktop;
