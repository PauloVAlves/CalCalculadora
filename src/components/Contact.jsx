import styled from 'styled-components';

const Contact = () => {
  return (
    <>
      <ContactTitle>Contato</ContactTitle>
      <ContactText>
        Em caso de dúvidas, sugestões e reclamações, entre em contato pelo
        <a href='mailto:contato@pauloalves.me'> email</a>.
      </ContactText>
    </>
  );
};

const ContactTitle = styled.h2`
  margin-top: 50px;
  border-bottom: 1px solid #ccc;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;
const ContactText = styled.address`
  width: 50%;
  margin: auto;
  font-size: 1.1rem;
`;

export default Contact;
