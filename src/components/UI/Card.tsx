import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 24px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  margin-left: 8px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
