import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: #0161e8;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  padding: 10px 40px;

  &:hover {
    background-color: #290cff;
  }

  @media (max-width: 900px) {
    width: 80%;
    font-size: 1.4rem;
    margin: 10px auto;
  }
`;

const Submit = ({ buttonName, onSubmit }) => {
  return <Button onClick={onSubmit}>{buttonName}</Button>;
};

export default Submit;
