import styled from "styled-components";

interface BoxBaseProps {
  width?: string;
  $gap?: string;
  $flexDirection?: "row" | "column" | "column-reverse";
  $alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  $justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
}

export const Box = styled.div<BoxBaseProps>`
  width: ${(props) => props.width ?? "100%"};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};
  align-items: ${(props) => props.$alignItems || "flex-start"};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  gap: ${(props) => props.$gap || "0"};
`;
