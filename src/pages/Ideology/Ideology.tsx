import { useDocumentTitle } from '@/hooks';
import { useTranslation } from '@/lang/LanguageProvider';
import { Card, CardFooter, CardTitle, Container, Grid, IdeologyBackground, ImageBox, IndexBadge, Page, Title } from './Ideology.styled';
import ideologyCover1 from '@/assets/ideology-cover-1.jpg';
import ideologyCover2 from '@/assets/ideology-cover-2.jpg';
import { useNavigate } from 'react-router-dom';
import config from '@/config';
const Ideology = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    useDocumentTitle(`${i18n.t('appName')} | ${i18n.t('navigation.ideology')}`);

    const items: Array<{ key: string, image: string }> = [
        { key: 'nationalIndependence', image: ideologyCover1 },
        { key: 'nationalRevolution', image: ideologyCover2 },
    ];

    return (
        <>
            <IdeologyBackground />
            <Page>
                <Container>
                    <Title>{i18n.t('ideology.title', { defaultValue: 'Nội dung' })}</Title>

                    <Grid>
                        {items.map((item, idx) => (
                            <Card key={item.key} onClick={() => navigate(config.routes.public.ideologyDetail.replace(':key', item.key))}>
                                <ImageBox style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                <CardFooter>
                                    <IndexBadge>{idx + 1}</IndexBadge>
                                    <CardTitle>{i18n.t(`ideology.items.${item.key}`, { defaultValue: item.key })}</CardTitle>
                                </CardFooter>
                            </Card>
                        ))}
                    </Grid>
                </Container>
            </Page>
        </>
    );
};

export default Ideology;