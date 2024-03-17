"use client";
import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.1);
`;

export const THead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const TBody = styled.tbody`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TR = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TH = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 700;
  color: #333;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const TD = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
