import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PaginationInput = styled.input`
  font-size: 16px;
  padding: 3px;
  text-align: center;
  width: 60px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;
