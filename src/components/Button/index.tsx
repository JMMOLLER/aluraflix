import styled from "styled-components";

interface ButtonProps {
  isInfo: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<{$isInfo?: boolean}>`
  width: fit-content;
  height: min-content;
  background-color: ${(props) => (props.$isInfo ? "#6d6d6e66" : "#fff")};
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  color: ${(props) => (!props.$isInfo ? "#000" : "#fff")};
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-top: 1.5vw;
  gap: 15px;
  border: 0;
  cursor: pointer;

  .img_button {
    height: 30px;
    width: 30px;
    filter: invert(${(props) => (props.$isInfo ? "1" : "0")});
    background-image: url(${(props) => (props.$isInfo ? "/icons/info.svg" : "/icons/play.svg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
export function Button({children, isInfo}: ButtonProps) {
  return (
    <StyledButton type="button" $isInfo={isInfo}>
      <div className="img_button"></div>
      {children}
    </StyledButton>
  );
}
