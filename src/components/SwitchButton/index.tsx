import { FC } from "react";
import * as S from "./styles";
import { SwitchButtonProps } from "./props";

const SwitchButton: FC<SwitchButtonProps> = ({...props}) => {
  return (
    <S.SwitchButton {...props}>
      <S.Icon />
    </S.SwitchButton>
  );
};

export default SwitchButton;
