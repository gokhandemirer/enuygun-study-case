import styled from "styled-components";

export const Flex = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  flex-wrap: ${({ wrap }) => wrap || "no-wrap"};
  gap: ${({ gap }) => gap || "0"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;
