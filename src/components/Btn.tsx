import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 10px 20px;
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

type BtnProps = {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Btn = ({ text, onClick, type }: BtnProps) => {
  return (
    <Button onClick={onClick} type={type ? type : "button"}>
      {text}
    </Button>
  );
};

export default Btn;
