import styled from 'styled-components';

const InputLabel = styled.label`
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  margin-right: 10px;

  @media (max-width: 768px) {
    text-align: left !important;
    font-size: 1rem;
  }
`;

const Label = ({ htmlFor, labelValue }) => {
  return <InputLabel htmlFor={htmlFor}>{labelValue}</InputLabel>;
};

export default Label;
