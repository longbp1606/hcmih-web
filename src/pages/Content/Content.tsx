import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import config from '@/config';
import { useDocumentTitle } from '@/hooks';
import { useTranslation } from '@/lang/LanguageProvider';
import { BackButton, Body, Container, ContentCard, HeroImage, Page, PageBg, RelatedGrid, RelatedItem, RelatedTitle, SubTitle, Title } from './Content.styled';
import { getIdeologyContent } from './Content.data';

type Params = { key: string; index: string };

const Content = () => {
    const { key = '', index = '0' } = useParams<Params>();
    const idx = Number.parseInt(index, 10) || 0;
    const navigate = useNavigate();
    const { i18n, locale } = useTranslation();

    const pageTitle = i18n.t(`ideology.items.${key}`);
    useDocumentTitle(`${i18n.t('appName')} | ${pageTitle}`);

    // Prefer rich dataset paragraphs; fallback to i18n list
    const dataset = useMemo(() => getIdeologyContent(locale, key), [locale, key]);
    const i18nList = useMemo(() => {
        const raw = i18n.t(`ideology.contents.${key}`) as any;
        return Array.isArray(raw) ? raw : [];
    }, [i18n, key]);

    const list = dataset.length > 0 ? dataset : i18nList;
    const current = list[idx] ?? null;
    const currentI18n = i18nList[idx] ?? null;
    const related = useMemo(() => list.map((item: any, i: number) => ({ item, i })).filter(e => e.i !== idx), [list, idx]);

    const goBack = () => {
        navigate(config.routes.public.ideologyDetail.replace(':key', key));
    };

    const openItem = (i: number) => {
        navigate(config.routes.public.ideologyContent.replace(':key', key).replace(':index', String(i)));
    };

    return (
        <>
            <PageBg />
            <Page>
                <Container>
                    <div style={{ marginBottom: 8 }}>
                        <BackButton type="button" onClick={goBack} aria-label={i18n.t('common.back')}>
                            {i18n.t('common.back')}
                        </BackButton>
                    </div>
                    <Title>{pageTitle}</Title>

                    {current && (
                        <ContentCard>
                            <HeroImage style={(current as any)?.image || currentI18n?.image ? { backgroundImage: `url(${(current as any)?.image ?? currentI18n?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} />
                            <SubTitle>{(current as any)?.title ?? currentI18n?.title}</SubTitle>
                            <Body>
                                {Array.isArray((current as any)?.paragraphs)
                                    ? (current as any).paragraphs.map((p: string, i: number) => (
                                        <p key={i} style={{ margin: i === 0 ? 0 : '12px 0 0' }}>{p}</p>
                                    ))
                                    : <p style={{ margin: 0 }}>{(current as any)?.desc ?? currentI18n?.desc}</p>}
                            </Body>
                        </ContentCard>
                    )}

                    <RelatedTitle>{i18n.t('content.relatedTitle', { defaultValue: 'Những chủ đề khác trong phần này' })}</RelatedTitle>
                    <RelatedGrid>
                        {related.map((entry: { item: any; i: number }, rIdx: number) => (
                            <RelatedItem key={entry.i} onClick={() => openItem(entry.i)}>
                                {rIdx + 1}. {(entry.item as any)?.title ?? i18nList[entry.i]?.title}
                            </RelatedItem>
                        ))}
                    </RelatedGrid>
                </Container>
            </Page>
        </>
    );
};

export default Content;