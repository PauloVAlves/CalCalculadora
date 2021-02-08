import styled from 'styled-components';

const AboutTitle = styled.h2`
  margin-top: 50px;
  border-bottom: 1px solid #ccc;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;
const AboutText = styled.p`
  width: 50%;
  margin: auto;
  font-size: 1.1rem;
`;
const About = () => {
  return (
    <>
      <AboutTitle>Calculadora de Calorias</AboutTitle>
      <AboutText>
        O aplicativo calcula as calorias de uma receita, bastando adicionar os
        alimentos e a quantidade, adicionar a porção e clicar em calcular.
      </AboutText>
      <br />
      <AboutText>
        Este aplicativo usa as informações contidas na quarta edição do Projeto
        TACO - Tabela Brasileira de Composição de Alimentos - coordenado pelo
        Núcleo de Estudos e Pesquisas em Alimentação (NEPA) da UNICAMP.
      </AboutText>
      <br />
      <AboutText>
        <a target='_blank' href='http://www.nepa.unicamp.br/taco/index.php'>
          TACO
        </a>
      </AboutText>
    </>
  );
};

export default About;
