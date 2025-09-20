import styled from 'styled-components';

export const LanguageSwitcherContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: #333333;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  min-width: 150px;
  justify-content: space-between;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.3);
  }
`;

export const FlagIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;

export const FlagImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const SymbolFlag = styled.span<{ $color?: string }>`
  font-size: 1.1rem;
  line-height: 1;
  color: ${props => props.$color || '#333333'};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin-right: 0.25rem;
`;

export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
`;

export const LanguageText = styled.span`
  font-weight: 500;
`;

export const DropdownIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  margin-top: 0.25rem;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.3s ease;
`;

export const DropdownItem = styled.button<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${props => props.$isActive ? 'rgba(255, 107, 107, 0.1)' : 'transparent'};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;
  color: #333333;
  
  &:first-child {
    border-radius: 6px 6px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 6px 6px;
  }
  
  &:only-child {
    border-radius: 6px;
  }
  
  &:hover {
    background: rgba(255, 107, 107, 0.1);
  }
  
  &:focus {
    outline: none;
    background: rgba(255, 107, 107, 0.15);
  }
`;