import styled from "styled-components";

const Padding = styled.div<{ value?: number }>`
  padding: ${({ value }) => `${value}px` || "10px"};
`;

export default Padding;
