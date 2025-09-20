import { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  DesktopNav,
  NavItem,
  MobileMenuButton,
  MobileMenu
} from './Header.styled';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Tra cứu', href: '/tra-cuu' },
    { label: 'Hệ thống tư tưởng', href: '/he-thong-tu-tuong' },
    { label: 'Học & Tương tác', href: '/quizes' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        HCMIH
      </Logo>
      
      <DesktopNav>
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            href={item.href}
            $isActive={pathname === item.href}
          >
            {item.label}
          </NavItem>
        ))}
      </DesktopNav>

      <MobileMenuButton onClick={toggleMobileMenu}>
        ☰
      </MobileMenuButton>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            href={item.href}
            $isActive={pathname === item.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavItem>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;