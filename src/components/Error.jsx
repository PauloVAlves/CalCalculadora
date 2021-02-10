import styled from 'styled-components';

const ErrorMessage = styled.h2`
  text-align: center;
  margin-top: 50vh;
  font-size: 2rem;
`;

const Error = () => {
  return <ErrorMessage>Ooops. Algo deu errado!</ErrorMessage>;
};

export default Error;
