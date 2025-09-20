import { useState } from 'react';
import {
    HeaderContainer,
    Logo,
    DesktopNav,
    NavItem,
    MobileMenuButton,
    MobileMenu,
    HeaderActions
} from './Header.styled';
import { Image } from 'antd';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../../lang/LanguageProvider';
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import logo from '../../../assets/logo.png';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const { i18n } = useTranslation();

    // Define nav items and any alias/redirect paths that should count as active
    const navItems: Array<{
        label: string;
        href: string;
        matchers?: string[]; // additional path prefixes that should activate this item
    }> = [
        { label: i18n.t('navigation.home'), href: '/', matchers: ['/'] },
        { label: i18n.t('navigation.about'), href: '/gioi-thieu' },
        { label: i18n.t('navigation.search'), href: '/tra-cuu' },
        { label: i18n.t('navigation.ideology'), href: '/he-thong-tu-tuong' },
        // Consider both /quizes and a possible redirected alias /hoc-tuong-tac as active
        { label: i18n.t('navigation.learning'), href: '/quizes', matchers: ['/quizes', '/hoc-tuong-tac'] }
    ];

    // Active logic that supports redirects/aliases and nested routes
    const isActivePath = (currentPath: string, itemHref: string, extraMatchers?: string[]) => {
        // Normalize: ensure path has no trailing slash (except root)
        const normalize = (p: string) => (p !== '/' && p.endsWith('/') ? p.slice(0, -1) : p);
        const path = normalize(currentPath);

        const prefixes = [itemHref, ...(extraMatchers || [])];

        return prefixes.some((prefix) => {
            const p = normalize(prefix);
            if (p === '/') return path === '/';
            return path === p || path.startsWith(p + '/');
        });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <HeaderContainer>
            <Logo>
                <Image src={logo} alt="Logo" preview={false} width={120} />
            </Logo>

            <DesktopNav>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        $isActive={isActivePath(pathname, item.href, item.matchers)}
                    >
                        {item.label}
                    </NavItem>
                ))}
            </DesktopNav>

            <HeaderActions>
                <LanguageSwitcher />
                <MobileMenuButton onClick={toggleMobileMenu}>
                    ☰
                </MobileMenuButton>
            </HeaderActions>

            <MobileMenu $isOpen={isMobileMenuOpen}>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        $isActive={isActivePath(pathname, item.href, item.matchers)}
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