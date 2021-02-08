import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: #0161e8;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 1.1rem;

  &:hover {
    background-color: #290cff;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 1.4rem;
  }
`;

const Submit = ({ buttonName, onSubmit }) => {
  return <Button onClick={onSubmit}>{buttonName}</Button>;
};

export default Submit;
