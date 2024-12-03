import styled from "styled-components";

const Button = styled.button<{ isPrimary?: boolean }>`
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.primary : theme.colors.secondary};
  cursor: pointer;
  padding: 10px 20px;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  font-size: 1.5rem;
  &:hover {
    background-color: ${({ theme, isPrimary }) =>
      isPrimary ? theme.colors.primaryHover : theme.colors.secondaryHover};
  }
`;

type BtnProps = {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  isPrimary?: boolean;
  style?: React.CSSProperties;
};

const Btn = ({ text, onClick, type, isPrimary = true, style }: BtnProps) => {
  return (
    <Button
      style={style}
      onClick={onClick}
      type={type || "button"}
      isPrimary={isPrimary}
    >
      {text}
    </Button>
  );
};

export default Btn;
