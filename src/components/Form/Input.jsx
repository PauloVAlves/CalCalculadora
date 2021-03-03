import styled from 'styled-components';
import Label from './Label';

const Input = ({
  label,
  className,
  type,
  inputName,
  list,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <Label htmlFor='addName' labelValue={label} />
      <StyledInput
        className={className}
        type={type}
        name={inputName}
        list={list}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

const StyledInput = styled.input.attrs((props) => ({
  autocomplete: 'off',
}))`
  box-sizing: border-box;
  display: block;
  font-size: 1.1rem;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  outline: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    border: 1px solid #000;
  }

  @media (max-width: 900px) {
    font-size: 1.2rem;
    display: block;
  }
`;

export default Input;
