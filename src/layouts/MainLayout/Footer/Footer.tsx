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
import logoImage from '../../../assets/logo.png';
import { useTranslation } from '../../../lang/LanguageProvider';
import config from '@/config';

const Footer = () => {
  const { i18n } = useTranslation();
  
  const navItems = [
    { label: i18n.t('navigation.home'), href: config.routes.public.home },
    { label: i18n.t('navigation.about'), href: config.routes.public.about },
    { label: i18n.t('navigation.search'), href: config.routes.public.search },
    { label: i18n.t('navigation.ideology'), href: config.routes.public.ideology },
    { label: i18n.t('navigation.learning'), href: config.routes.public.learning }
  ];

  return (
    <FooterContainer>
      <BackgroundOverlay />
      <LeftArchitecture />
      <RightArchitecture />
      
      <FooterContent>
        <CommunistSymbol>
          <img src={logoImage} alt="HCMIH Logo" />
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
          {i18n.t('footer.copyright')}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;