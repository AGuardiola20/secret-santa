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
      <Notes nota={['Precio minimo del regalo: 5000', 'Se debe entregar el regalo el 31 de diciembre']} />
    </Container>
  );
};

export default UserScreen;
