import styled from 'styled-components';

const Label = ({ htmlFor, labelValue }) => {
  return <InputLabel htmlFor={htmlFor}>{labelValue}</InputLabel>;
};

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  text-align: left;

  @media (max-width: 900px) {
    text-align: left !important;
    font-size: 1rem;
  }
`;

export default Label;
