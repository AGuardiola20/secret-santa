import Notes from "../components/Notes";
import UserForm from "../components/UserForm";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const UserScreen = () => {
  return (
    <Container>
      <UserForm />
      <Notes nota={['Hola', 'Adios']} precio={5000} />
    </Container>
  );
};

export default UserScreen;
