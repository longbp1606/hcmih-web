import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavItem = styled.a<{ $isActive?: boolean }>`
  position: relative;
  color: ${props => props.$isActive ? '#A40000' : '#995900'};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.$isActive
        ? 'radial-gradient(50.07% 50% at 50% 50%, rgba(255, 143, 143, 0.57) 0%, rgba(255, 146, 146, 0.00) 100%)'
        : 'transparent'};
    border-radius: 8px;
    z-index: -1;
    transition: all 0.3s ease;
    opacity: ${props => props.$isActive ? 1 : 0};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: radial-gradient(50.07% 50% at 50% 50%, rgba(255, 143, 143, 1) 0%, rgba(255, 146, 146, 0) 100%);
    border-radius: 10px;
    z-index: -2;
    opacity: 0;
    filter: blur(8px);
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: #A40000;
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
      background: radial-gradient(50.07% 50% at 50% 50%, rgba(255, 143, 143, 1) 0%, rgba(255, 146, 146, 0) 100%);
    }
    
    &::after {
      opacity: 0.7;
      filter: blur(12px);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #333333;
  text-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333333;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  flex-direction: column;
  padding: 1rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const DesktopNav = styled(Navigation)`
  @media (max-width: 768px) {
    display: none;
  }
`;