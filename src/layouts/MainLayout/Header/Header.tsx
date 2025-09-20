import { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  DesktopNav,
  NavItem,
  MobileMenuButton,
  MobileMenu
} from './Header.styled';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Trang chủ', href: '/', isActive: true },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Tra cứu', href: '/tra-cuu' },
    { label: 'Hệ thống tư tưởng', href: '/he-thong-tu-tuong' },
    { label: 'Học & Tương tác', href: '/hoc-tuong-tac' }
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
            $isActive={item.isActive}
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
            $isActive={item.isActive}
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