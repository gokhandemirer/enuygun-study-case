import styled from "styled-components";
import { Flex } from "@/components/Layout/Flex";

const BackButtonWrapper = styled(Flex)`
  cursor: pointer;
  width: fit-content;
`;

const BackButtonTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

type BackButtonProps = {
  title?: string;
  onClick: () => void;
};

export default function BackButton({
  title = "Back",
  onClick,
}: BackButtonProps) {
  return (
    <BackButtonWrapper onClick={onClick} align="center" gap="4px">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#333333"
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        />
        <path
          fill="#333333"
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        />
      </svg>
      <BackButtonTitle>{title}</BackButtonTitle>
    </BackButtonWrapper>
  );
}
