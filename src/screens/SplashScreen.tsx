import styled from "styled-components";
import Rudolf from "../assets/imgs/Rudolph.svg";
import Btn from "../components/Btn";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;

const Title = styled(Text)`
  font-size: 2.7rem;
  font-weight: 600;
`;

const Line = styled.div`
  width: 20%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  margin: 10px 0;
`;

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Main>
        <img src={Rudolf} alt="Rudolf img" />
        <Title>Amigo Secreto</Title>
        <Line />
        <Text>Familia Guardiola y agregados</Text>
        <Btn
          text="Iniciar"
          isPrimary={false}
          onClick={() => navigate("/code")}
        />
      </Main>
    </Container>
  );
};

export default SplashScreen;
