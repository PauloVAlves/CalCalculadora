import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FixedFooter>
      copyright &copy; {year} - Todos os direitos reservados.{' '}
      <Link to='/privacidade'>Privacidade</Link>
    </FixedFooter>
  );
};

const FixedFooter = styled.p`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #ddd;
  text-align: center;
  padding: 4px;

  a {
    text-decoration: none;
  }
`;

export default Footer;
