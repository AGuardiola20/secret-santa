import styled from "styled-components";
import Rudolf from "../assets/imgs/Rudolph.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  gap: 2rem;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: 1.3rem;
`;

const Title = styled(Text)`
  font-size: 2.7rem;
`;

const Line = styled.div`
  width: 5%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  margin: 10px 0;
`;

const SplashScreen = () => {
  return (
    <Container>
      <img src={Rudolf} alt="Rudolf img" />
      <Title>Amigo Secreto</Title>
      <Line />
      <Text>Familia Guardiola y agregados</Text>
    </Container>
  );
};

export default SplashScreen;
