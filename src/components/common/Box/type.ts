import { ElementType, PropsWithChildren } from "react";
import { OverridableProps } from "~/types/util";

export type BoxBaseProps = {
  width?: string;
  flexDirection?: "row" | "column" | "column-reverse";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  className?: string;
};

export type BoxProps<T extends ElementType> = OverridableProps<
  T,
  PropsWithChildren<BoxBaseProps>
>;
