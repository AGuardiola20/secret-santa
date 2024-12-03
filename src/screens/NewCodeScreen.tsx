import styled from "styled-components";
import Gifts from "../assets/imgs/Gifts.svg";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  text-align: center;
  padding: 0 20px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 500px;
  width: 100%;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.3rem;
  font-weight: 300;
`;

const Line = styled.div`
  width: 20%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  margin: 10px 0;
`;

const NewCodeScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Main>
        <Image src={Gifts} alt="Gifts image" />
        <Title>¡Ups! Pantalla en desarrollo...</Title>
        <Text>No se le pagó lo suficiente a Andres y Xavi 😅</Text>
        <Line />
        <Btn
          text="Volver"
          isPrimary={false}
          onClick={() => navigate("/code")}
        />
      </Main>
    </Container>
  );
};

export default NewCodeScreen;
