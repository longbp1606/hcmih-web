import { HomeWrapper, HeroSection, HeroTitle, FilmStrip, HeaderBackground, SummarySection, SectionTitle, TopicsGrid, TopicCard, TopicIndex, TopicTitle, TopicDesc, ResearchSection, ResearchInner, ResearchTitle, SearchBar, SearchInput, SearchButton, TagsWrap, Tag, TimelineSection, TimelineTitle, TimelineWrap, TimelineList, TimelineRow, ImageCircle, TextBox, PeriodRange, PeriodDesc, AxisDot, ExploreSection, ExploreTitle, ExploreGrid, ExploreCard, ExploreImage, ExploreLabel } from './Home.styled'
import { useDocumentTitle } from '@/hooks'
import { useTranslation } from '@/lang/LanguageProvider';
import historyFilmImage from '../../assets/history-film.png';
import hochiminhImg from '../../assets/hochiminh.png';
import vietnamImg from '../../assets/vietnam.png';
import japanImg from '../../assets/japan.png';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { i18n } = useTranslation();
    // Compose title from translations so it updates when locale changes
    useDocumentTitle(`${i18n.t('appName')} | ${i18n.t('navigation.home')}`);

    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [scrollY, setScrollY] = useState(0);
    const tags = useMemo(() => {
        const t = i18n.t('research.tags');
        return Array.isArray(t) ? t : [];
    }, [i18n.locale]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const q = query.trim();
        if (!q) return;
        // If a search page exists later, navigate to it with query param. Fallback: alert or no-op.
        try {
            navigate(`/search?q=${encodeURIComponent(q)}`);
        } catch {
            // No search route; safely ignore for now.
        }
    };

    const onTagClick = (tag: string) => {
        setQuery(tag);
    };

    // Parallax for FilmStrip: bottom moves from 100px to -350px as user scrolls ~800px
    useEffect(() => {
        const handle = () => setScrollY(window.scrollY || window.pageYOffset || 0);
        handle();
        window.addEventListener('scroll', handle, { passive: true });
        return () => window.removeEventListener('scroll', handle as EventListener);
    }, []);

    const filmBottom = useMemo(() => {
        const start = 100; // px
        const end = -350; // px
        const distance = end - start; // -450
        const progress = Math.min(1, Math.max(0, scrollY / 800));
        return start + distance * progress;
    }, [scrollY]);

    return (
        <>
            <HomeWrapper>
                <HeaderBackground />
                <HeroSection>
                    <HeroTitle>
                        {i18n.t('home.heroTitle', { defaultValue: 'Hệ tri thức Hồ Chí Minh' })}
                    </HeroTitle>
                </HeroSection>
                <FilmStrip src={historyFilmImage} alt="History Film" style={{ bottom: `${filmBottom}px` }} />

                <SummarySection>
                    <SectionTitle>
                        {i18n.t('home.featuredTitle', { defaultValue: 'Các chủ đề nổi bật' })}
                    </SectionTitle>
                    <TopicsGrid>
                        {[
                            { key: 'history' },
                            { key: 'ideology' },
                            { key: 'quotes' },
                            { key: 'timeline' },
                            { key: 'works' },
                            { key: 'learning' },
                        ].map((topic, idx) => (
                            <TopicCard key={topic.key}>
                                <TopicIndex>{String(idx + 1).padStart(2, '0')}</TopicIndex>
                                <TopicTitle>{i18n.t(`home.topics.${topic.key}.title`)}</TopicTitle>
                                <TopicDesc>{i18n.t(`home.topics.${topic.key}.desc`)}</TopicDesc>
                            </TopicCard>
                        ))}
                    </TopicsGrid>
                </SummarySection>

                <ResearchSection>
                    <ResearchInner>
                        <ResearchTitle>
                            {i18n.t('research.title', { defaultValue: 'Tra cứu nhanh' })}
                        </ResearchTitle>
                        <SearchBar onSubmit={handleSearch} role="search" aria-label={i18n.t('research.title')}>
                            <SearchInput
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={i18n.t('research.searchPlaceholder') as string}
                                aria-label={i18n.t('research.searchPlaceholder') as string}
                            />
                            <SearchButton type="submit">{i18n.t('research.searchButton')}</SearchButton>
                        </SearchBar>
                        {tags.length > 0 && (
                            <TagsWrap>
                                {tags.map((t) => (
                                    <Tag key={t} onClick={() => onTagClick(t)} aria-label={t}>
                                        #{t}
                                    </Tag>
                                ))}
                            </TagsWrap>
                        )}
                    </ResearchInner>
                </ResearchSection>

                <TimelineSection>
                    <TimelineTitle>{i18n.t('timeline.title', { defaultValue: 'Lược sử' })}</TimelineTitle>
                    <TimelineWrap>
                        <TimelineList>
                            {(
                                (i18n.t('timeline.periods') as unknown as Array<{ range: string; desc: string }>)
                            ).map((p, idx) => {
                                const side = idx % 2 === 0 ? 'left' : 'right';
                                return (
                                    <TimelineRow key={p.range} side={side}>
                                        {side === 'left' ? (
                                            <>
                                                <TextBox side={side}>
                                                    <PeriodRange>{p.range}</PeriodRange>
                                                    <PeriodDesc>{p.desc}</PeriodDesc>
                                                </TextBox>
                                                <ImageCircle style={{ backgroundImage: `url(${hochiminhImg})` }} />
                                            </>
                                        ) : (
                                            <>
                                                <ImageCircle style={{ backgroundImage: `url(${hochiminhImg})` }} />
                                                <TextBox side={side}>
                                                    <PeriodRange>{p.range}</PeriodRange>
                                                    <PeriodDesc>{p.desc}</PeriodDesc>
                                                </TextBox>
                                            </>
                                        )}
                                        <AxisDot />
                                    </TimelineRow>
                                );
                            })}
                        </TimelineList>
                    </TimelineWrap>

                    <ExploreSection>
                        <ExploreTitle>{i18n.t('timeline.explore.title', { defaultValue: 'Bắt đầu khám phá' })}</ExploreTitle>
                        <ExploreGrid>
                            <ExploreCard>
                                <ExploreImage src={vietnamImg} alt="content"/>
                                <ExploreLabel>{i18n.t('timeline.explore.items.content')}</ExploreLabel>
                            </ExploreCard>
                            <ExploreCard>
                                <ExploreImage src={hochiminhImg} alt="news"/>
                                <ExploreLabel>{i18n.t('timeline.explore.items.news')}</ExploreLabel>
                            </ExploreCard>
                            <ExploreCard>
                                <ExploreImage src={japanImg} alt="quiz"/>
                                <ExploreLabel>{i18n.t('timeline.explore.items.quiz')}</ExploreLabel>
                            </ExploreCard>
                        </ExploreGrid>
                    </ExploreSection>
                </TimelineSection>
            </HomeWrapper>
        </>
    )
}

export default Home;