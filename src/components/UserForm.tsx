import { useForm } from "react-hook-form";
import styled from "styled-components";
import Btn from "./Btn";

const FormContainer = styled.form`
  max-width: 600px;
  margin: auto;
`;
const InputContainer = styled.div`
  margin-bottom: 16px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;
const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
`;

type FormData = {
  name: string;
};

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // TODO: Aquí hay que manejar los datos, como enviarlos a Firebase o actualizar un estado
  const onSubmit = (data: FormData) => {
    console.log("Nombre ingresado:", data.name);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label htmlFor="name">Digite su nombre completo:</Label>
        <Input
          id="name"
          type="text"
          {...register("name", { required: "El nombre es obligatorio" })}
        />
        {errors.name && errors.name.message && (
          <ErrorMessage>{errors.name.message}</ErrorMessage>
        )}
      </InputContainer>

      <Btn text="Agregar" type="submit" />
    </FormContainer>
  );
};

export default UserForm;
