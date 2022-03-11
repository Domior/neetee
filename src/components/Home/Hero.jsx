import hero from '@static/banner-img.jpg';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
`;

const MainTitle = styled.h1`
  position: absolute;
  color: var(--color-white);
  top: 50%;
  left: 5%;
`;

export default function Hero() {
  return (
    <Container>
      <MainTitle>Поставки товара из Китая</MainTitle>
      <img src={hero} alt="hero" />
    </Container>
  );
}
