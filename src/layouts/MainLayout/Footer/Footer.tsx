import {
  FooterContainer,
  FooterContent,
  CommunistSymbol,
  FooterNavigation,
  FooterNavItem,
  Copyright,
  LeftArchitecture,
  RightArchitecture,
  BackgroundOverlay
} from './Footer.styled';

const Footer = () => {
  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Tra cứu', href: '/tra-cuu' },
    { label: 'Hệ thống tư tưởng', href: '/he-thong-tu-tuong' },
    { label: 'Học & Tương tác', href: '/hoc-tuong-tac' }
  ];

  return (
    <FooterContainer>
      <BackgroundOverlay />
      <LeftArchitecture />
      <RightArchitecture />
      
      <FooterContent>
        <CommunistSymbol>
          <img src="/src/assets/logo.png" alt="HCMIH Logo" />
        </CommunistSymbol>
        
        <FooterNavigation>
          {navItems.map((item, index) => (
            <FooterNavItem 
              key={index}
              href={item.href}
            >
              {item.label}
            </FooterNavItem>
          ))}
        </FooterNavigation>
        
        <Copyright>
          Copyright © 2025 HCMIH. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;