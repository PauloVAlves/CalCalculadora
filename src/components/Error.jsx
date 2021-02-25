import styled from 'styled-components';

const Error = () => {
  return <ErrorMessage>Ooops. Algo deu errado!</ErrorMessage>;
};

const ErrorMessage = styled.h2`
  text-align: center;
  margin-top: 50vh;
  font-size: 2rem;
`;

export default Error;
