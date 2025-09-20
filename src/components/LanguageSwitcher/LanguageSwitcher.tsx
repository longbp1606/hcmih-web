import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../lang/LanguageProvider';
import {
  LanguageSwitcherContainer,
  DropdownButton,
  FlagImage,
  FlagContainer,
  LanguageText,
  DropdownIcon,
  DropdownMenu,
  DropdownItem
} from './LanguageSwitcher.styled';
import vietnameFlag from '../../assets/vietnam.png';
import usaFlag from '../../assets/united-states-of-america.png';
import japaneseFlag from '../../assets/japan.png';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, locale, switchLanguage } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { 
      code: 'vi', 
      flag: '', 
      flagImage: vietnameFlag,
      symbol: '⭐', 
      name: i18n.t('language.vietnamese'),
      color: '#da020e' 
    },
    { 
      code: 'en', 
      flag: '', 
      flagImage: usaFlag,
      symbol: '🦅', 
      name: i18n.t('language.english'),
      color: '#002868' 
    },
    { 
      code: 'ja', 
      flag: '', 
      flagImage: japaneseFlag,
      symbol: '🌸', 
      name: i18n.t('language.japanese'),
      color: '#BC002D' 
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode: 'vi' | 'en' | 'ja') => {
    switchLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <LanguageSwitcherContainer ref={dropdownRef}>
      <DropdownButton 
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`${i18n.t('language.switchTo')} ${currentLanguage.name}`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FlagContainer>
            <FlagImage src={currentLanguage.flagImage} alt={`${currentLanguage.name} flag`} />
          </FlagContainer>
          <LanguageText>{currentLanguage.code.toUpperCase()}</LanguageText>
        </div>
        <DropdownIcon $isOpen={isOpen}>▼</DropdownIcon>
      </DropdownButton>

      <DropdownMenu $isOpen={isOpen} role="listbox">
        {languages.map((language) => (
          <DropdownItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code as 'vi' | 'en' | 'ja')}
            $isActive={locale === language.code}
            role="option"
            aria-selected={locale === language.code}
          >
            <FlagContainer>
              <FlagImage src={language.flagImage} alt={`${language.name} flag`} />
            </FlagContainer>
            <LanguageText>{language.name}</LanguageText>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;