import { FC } from "react";
import * as S from './styles'

const Logo:FC = () => {
  return (
    <svg
      width='5.8rem'
      height='3.5rem'
      viewBox='0 0 58 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <S.Path
        d='M15.8 4.5274L3.00005 16.9237L15.8 29.9246'
        stroke-width='4'
      />
      <S.Path
        d='M42.2 4.5274L55 16.9237L42.2 29.9246'
        stroke-width='4'
      />
      <S.Path d='M33.2507 1L24.6 34' stroke-width='4' />
    </svg>
  );
};

export default Logo;
