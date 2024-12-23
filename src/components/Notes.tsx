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
    background-color: ${({theme})=>theme.colors.primary}; 
    border: 2px solid;
    border-radius: 50%; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
    }

    &::after {
     content: '';
     position: absolute;
     top: 0px; 
     left: 50%;
     transform: translateX(-50%);
     width: 2px;
     height: 15px;
     background-color: #555; 
    }

    @media (max-width: 768px) {
    display: none;
    }
`
const Title = styled.h1`
  margin-top: 20px;
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
  precio: number;
};

const Notes = ({ nota, precio }: NotesProps) => {
  console.log(nota);
  return (
    <Container>
      <Title>Reglas del amigo secreto</Title>
     <Paragraph>El precio es de: {precio}</Paragraph>
     {nota.map((nota, index) => {
      return (
        <Paragraph key={index}>{nota}</Paragraph>
      )
     })}
    
    </Container>
  );
};

export default Notes;