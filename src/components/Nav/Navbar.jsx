import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #141738;
  color: #f2506e;

  .logo {
    font-size: 1.5rem;
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>Calcalorias</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
