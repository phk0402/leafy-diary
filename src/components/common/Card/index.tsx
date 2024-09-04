import { PropsWithChildren } from "react";
import * as S from "./style";
import * as T from "./type";

export default function Card({
  width,
  height,
  className,
  children,
}: PropsWithChildren<T.CardProps>) {
  return (
    <S.CardContainer
      {...{ width, height }}
      className={`c__card ${className ? className : ""}`}
    >
      {children}
    </S.CardContainer>
  );
}
