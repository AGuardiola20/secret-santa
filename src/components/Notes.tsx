import styled from "styled-components";

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 15px 8px rgba(0, 0, 0, 0.5);
    border: 1.5px dashed #ccc;
    position: relative;

    &::before {
    content: '';
    position: absolute;
    top: 15px; /* Posición del alfiler */
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    height: 15px;
    background-color: #d32f2f; /* Color del alfiler */
    border: 2px solid #990000; /* Borde oscuro para realismo */
    border-radius: 50%; /* Forma circular */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Sombra para dar relieve */
    }

    &::after {
     content: '';
     position: absolute;
     top: 0px; /* Línea que simula el pincho del alfiler */
     left: 50%;
     transform: translateX(-50%);
     width: 2px;
     height: 15px;
     background-color: #555; /* Color del pincho */
    }
`
const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
  font-size: 30px;
`

const Paragraph = styled.li`
  letter-spacing: 0.5px;
  font-size: 20px

`

type NotesProps = {
  nota: string[];
};

const Notes = ({ nota }: NotesProps) => {
  return (
    <Container>
      <Title>Reglas del amigo secreto</Title>
      {nota.map((item, index) => (
        <Paragraph key={index}>{item}</Paragraph>
      ))}
    </Container>
  );
};

export default Notes;