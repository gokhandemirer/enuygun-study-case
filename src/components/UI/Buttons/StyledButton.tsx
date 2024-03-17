import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ccc;
    border: 1px solid ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

export default StyledButton;
