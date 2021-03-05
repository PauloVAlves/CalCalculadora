import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GooglePlay } from '@styled-icons/entypo-social';

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/sobre'>Sobre</Link>
      </li>
      <li>
        <Link to='/contato'>Contato</Link>
      </li>
      <li>
        <a href='https://play.google.com/store/apps/details?id=com.calcalorias'>
          <GooglePlay size='18' color='#fff' title='GooglePlay' />
        </a>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;

  li {
    padding: 18px 10px;
  }

  a {
    text-decoration: none;
    color: #f2506e;
    transition: all 0.5s ease-in-out;
  }

  a:hover {
    transition: all 0.5s ease-in-out;
    color: #fff;
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    font-size: 2rem;

    li {
      color: #fff;
    }
  }
`;

export default RightNav;
