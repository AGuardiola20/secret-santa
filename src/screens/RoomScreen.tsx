import styled from "styled-components";
import { useFetchRoomUsers } from "../hooks/useFetchRoomUsers";
import { useState, useEffect } from "react";
import Btn from "../components/Btn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const CountdownContainer = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CountdownText = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const UserCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-top: 20px;
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
  margin-top: 20px;
  text-align: center;
`;

const EmptyText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-top: 20px;
`;
const BtnContainer = styled.div`
  margin: 20px 0;
`;

const RoomScreen = () => {
  const { users, loading, error } = useFetchRoomUsers("room123");
  const [timeLeft, setTimeLeft] = useState("");
  const [showFriend, setShowFriend] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-12-15T12:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setShowFriend(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timerId = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerId);
  }, []);

  const usersArray = users ? Object.values(users) : [];

  if (error) {
    return <ErrorText>Ocurrió un error: {error}</ErrorText>;
  }

  return (
    <Container>
      <Title>Invitados en la sala</Title>
      {!showFriend ? (
        <BtnContainer>
          <Btn text="Mostrar a tu pareja" isPrimary={false} />
        </BtnContainer>
      ) : (
        <CountdownContainer>
          <CountdownText>Revisa tu pareja en: {timeLeft}</CountdownText>
        </CountdownContainer>
      )}
      {loading ? (
        <LoadingText>Cargando los invitados...</LoadingText>
      ) : usersArray.length === 0 ? (
        <EmptyText>No hay invitados registrados.</EmptyText>
      ) : (
        <UsersGrid>
          {usersArray.map((user, index) => (
            <UserCard key={index}>
              <UserName>{user.name}</UserName>
            </UserCard>
          ))}
        </UsersGrid>
      )}
    </Container>
  );
};

export default RoomScreen;
