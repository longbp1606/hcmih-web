import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from '@/lang/LanguageProvider';
import { useDocumentTitle } from '@/hooks';
import { BackButton, Card, CardTitle, Container, Desc, Grid, Image, Page, PageBg, Title, ViewDetail } from './IdeologyDetail.styled';
import config from '@/config';

const IdeologyDetail = () => {
    const { key = '' } = useParams<{ key: string }>();
    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const pageTitle = i18n.t(`ideology.items.${key}`);
    useDocumentTitle(`${i18n.t('appName')} | ${pageTitle}`);

    const contents = (() => {
        const raw = i18n.t(`ideology.contents.${key}`) as any;
        return Array.isArray(raw) ? raw : [];
    })();

    const handleBack = () => {
        navigate(config.routes.public.ideology);
    };

    return (
        <>
            <PageBg />
            <Page>
                <Container>
                    <div style={{ marginBottom: 8 }}>
                        <BackButton type="button" onClick={handleBack} aria-label={i18n.t('common.back')}>
                            {i18n.t('common.back')}
                        </BackButton>
                    </div>
                    <Title>{pageTitle}</Title>
                    <Grid>
                        {contents.map((c: any, idx: number) => (
                            <Card key={idx} onClick={() => navigate(config.routes.public.ideologyContent.replace(':key', key).replace(':index', String(idx)))} style={{ cursor: 'pointer' }}>
                                <Image style={c?.image ? { backgroundImage: `url(${c.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined} />
                                <CardTitle>{c?.title}</CardTitle>
                                <Desc>{c?.desc}</Desc>
                                <ViewDetail
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); navigate(config.routes.public.ideologyContent.replace(':key', key).replace(':index', String(idx))); }}
                                    aria-label={i18n.t('common.viewDetail', { defaultValue: 'View detail' })}
                                >
                                    {i18n.t('common.viewDetail', { defaultValue: 'View detail' })}
                                </ViewDetail>
                            </Card>
                        ))}
                    </Grid>
                </Container>
            </Page>
        </>
    );
};

export default IdeologyDetail;