import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  margin: auto;
  padding: 0 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textTertiary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

type FormValues = {
  code: string;
};

const CodeScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // TODO: Manejar la logica para validar codigo en la base de datos
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Código enviado:", data.code);
  };

  return (
    <Container>
      <MainContainer>
        <Title>Agrega el código de la sala</Title>
        <FormContainer
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%" }}
        >
          <Input
            type="text"
            {...register("code", {
              required: "El código es obligatorio",
              minLength: {
                value: 4,
                message: "El código debe tener al menos 4 caracteres",
              },
            })}
          />
          {errors.code && <ErrorMessage>{errors.code.message}</ErrorMessage>}
          <StyledLink to={"/newCode"}>¿Aún no tienes una sala?</StyledLink>
          <Btn text="Ingresar" type="submit" />
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

export default CodeScreen;
