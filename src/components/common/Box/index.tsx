import * as S from "./style";
import * as T from "./type";
import { ElementType, forwardRef } from "react";

const Box = <K extends ElementType>(
  {
    as,
    className = "",
    children,
    width = "100%",
    gap,
    justifyContent,
    alignItems,
    flexDirection,
    ...rest
  }: T.BoxProps<K>,
  ref: any
) => {
  return (
    <S.Box
      as={as}
      className={className}
      ref={ref}
      width={width}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexDirection={flexDirection}
      $gap={gap}
      {...rest}
    >
      {children}
    </S.Box>
  );
};

export default forwardRef(Box);
