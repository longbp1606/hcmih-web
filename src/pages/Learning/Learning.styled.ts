import styled from 'styled-components';

export const PageWrap = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #edd8b8 0%, #cda87a 100%);
  padding: 48px 24px 80px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0 0 24px;
  text-align: center;
  font-weight: 900;
  font-size: clamp(28px, 4vw + 1rem, 56px);
  color: #7b1b10;
  text-shadow: 0 4px 16px rgba(123, 27, 16, 0.25);
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.button`
  appearance: none;
  border: none;
  background: #d7c0a6;
  border-radius: 16px;
  padding: 16px 16px 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  cursor: pointer;
  text-align: center;
  transition: transform 200ms ease, box-shadow 200ms ease, filter 180ms ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    filter: brightness(1.02);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: clamp(160px, 20vw, 220px);
  object-fit: cover;
  border-radius: 12px;
  filter: saturate(0.85) contrast(0.95);
`;

export const CardLabel = styled.div`
  margin-top: 12px;
  font-weight: 800;
  font-size: clamp(16px, 1.2vw + 0.4rem, 24px);
  color: #751f18;
`;

export const Section = styled.section`
  margin-top: 40px;
`;

export const SectionTitle = styled.h2`
  text-align: left;
  margin: 0 0 16px;
  color: #7b1b10;
`;
