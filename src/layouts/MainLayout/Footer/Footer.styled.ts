import styled from 'styled-components';
import bottomLeftFooterImage from '../../../assets/bottom-left-footer.png';
import bottomRightFooterImage from '../../../assets/bottom-right-footer.png';

export const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(135deg, #5d2c2c, #7d1717, #4a1f1f);
  color: #d4af37;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const FooterContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
`;

export const CommunistSymbol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  
  img {
    height: 80px;
    width: auto;
    max-width: 200px;
    object-fit: contain;
    filter: 
      brightness(1.3)
      contrast(0.6)
      saturate(1.2)
      drop-shadow(0 0 50px rgba(255, 255, 255, 0.3));
    
    @media (max-width: 768px) {
      height: 60px;
      max-width: 150px;
      filter: 
        brightness(1.2)
        contrast(1.3)
        saturate(1.1)
        drop-shadow(0 0 40px rgba(255, 255, 255, 0.2));
    }
  }
`;

export const FooterNavigation = styled.nav`
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterNavItem = styled.a`
  color: #d4af37;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ffd700, #ffed4e);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const Copyright = styled.p`
  color: #8b7355;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 10;
`;

export const LeftArchitecture = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 200px;
  background-image: url(${bottomLeftFooterImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  opacity: 0.5;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 133px;
  }
`;

export const RightArchitecture = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 200px;
  background-image: url(${bottomRightFooterImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom right;
  opacity: 0.7;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 133px;
  }
`;

export const VietnamFlag = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 40px;
  background: linear-gradient(to bottom, #da020e 50%, #da020e 50%);
  border-radius: 4px;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  &::after {
    content: '⭐';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffd700;
    font-size: 20px;
    text-shadow: 0 0 5px rgba(255, 215, 0, 0.8);
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 30px;
    top: 15px;
    right: 15px;
    
    &::after {
      font-size: 15px;
    }
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(125, 23, 23, 0.1) 0%, rgba(77, 31, 31, 0.3) 100%);
  z-index: 2;
`;
