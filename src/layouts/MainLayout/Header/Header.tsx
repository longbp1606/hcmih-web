import { useEffect, useState } from 'react';
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
import config from '@/config';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const { i18n } = useTranslation();

    // Define nav items and any alias/redirect paths that should count as active
    const navItems: Array<{
        label: string;
        href: string;
        matchers?: string[]; // additional path prefixes that should activate this item
        onClick?: () => void; // custom behavior
    }> = [
            { label: i18n.t('navigation.home'), href: config.routes.public.home, matchers: ['/'] },
            { label: i18n.t('navigation.about'), href: config.routes.public.about },
            { label: i18n.t('navigation.search'), href: '/search', matchers: ['/search', '/tra-cuu'] },
            { label: i18n.t('navigation.ideology'), href: config.routes.public.ideology },
            // Learning: go to the dedicated page; quizzes live in its #quiz section
            {
                label: i18n.t('navigation.learning'),
                href: config.routes.public.learning,
                matchers: [config.routes.public.learning, '/quizes'],
            }
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

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <HeaderContainer $scrolled={scrolled}>
            <Logo>
                <Image src={logo} alt="Logo" preview={false} width={120} />
            </Logo>

            <DesktopNav>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        href={item.href}
                        onClick={(e: React.MouseEvent) => {
                            // default navigation via anchor; if we ever need custom behavior, use navigate
                            if (item.onClick) {
                                e.preventDefault();
                                item.onClick();
                            }
                        }}
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
                        onClick={(e: React.MouseEvent) => {
                            setIsMobileMenuOpen(false);
                            if (item.onClick) {
                                e.preventDefault();
                                item.onClick();
                            }
                        }}
                    >
                        {item.label}
                    </NavItem>
                ))}
            </MobileMenu>
        </HeaderContainer>
    );
};

export default Header;