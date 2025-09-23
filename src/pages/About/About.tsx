import { Typography } from 'antd';
import { useDocumentTitle } from '@/hooks';
import { useTranslation } from '@/lang/LanguageProvider';
import {
    AboutPage,
    AboutPageBackground,
    Body,
    Container,
    ListWrap,
    Section,
    SectionHeading,
    SectionNote,
    Title,
    ValueItem,
    ValueList,
} from './About.styled';

const { Paragraph } = Typography;

const About = () => {
    const { i18n } = useTranslation();
    useDocumentTitle(`${i18n.t('appName')} | ${i18n.t('navigation.about')}`);
    return (
        <>
            <AboutPageBackground />
            <AboutPage>
                <Container>
                    <Title>{i18n.t('about.title', { defaultValue: 'Về Hồ Chí Minh Ideology Hub' })}</Title>

                    <ListWrap style={{ ['--about-start' as any]: 0 }}>
                        <Section>
                            <SectionHeading $index={1}>
                                {i18n.t('about.mission.title', { defaultValue: 'Sứ mệnh' })}
                                <SectionNote>{i18n.t('about.mission.note', { defaultValue: '(sử dụng thông điệp và giá trị bạn đã cung cấp)' })}</SectionNote>
                            </SectionHeading>
                            <Body>{i18n.t('about.mission.body', { defaultValue: 'Mô tả sứ mệnh: xây dựng một cổng học liệu hiện đại, trực quan và đáng tin cậy về tư tưởng Hồ Chí Minh, kết nối học thuật và ứng dụng thực tế.' })}</Body>
                        </Section>

                        <Section>
                            <SectionHeading $index={2}>
                                {i18n.t('about.objective.title', { defaultValue: 'Mục tiêu' })}
                                <SectionNote>{i18n.t('about.objective.note', { defaultValue: '(đối tượng: học sinh, giáo viên, nghiên cứu sinh, công chúng)' })}</SectionNote>
                            </SectionHeading>
                            <Body>{i18n.t('about.objective.body', { defaultValue: 'Cung cấp kiến thức chuẩn xác, có hệ thống; hỗ trợ nghiên cứu, giảng dạy và tự học với trải nghiệm thân thiện.' })}</Body>
                        </Section>

                        <Section>
                            <SectionHeading $index={3}>
                                {i18n.t('about.method.title', { defaultValue: 'Phương pháp' })}
                                <SectionNote>{i18n.t('about.method.note', { defaultValue: '(kết hợp học thuật + công nghệ — mô tả ngắn cách soát xét, kiểm chứng nguồn, duyệt nội dung.)' })}</SectionNote>
                            </SectionHeading>
                            <Body>{i18n.t('about.method.body', { defaultValue: 'Tiếp cận dựa trên nguồn tài liệu tin cậy, tổng hợp - đối chiếu - kiểm chứng, cùng quy trình biên tập rõ ràng. Ứng dụng công nghệ để trực quan hóa và tương tác.' })}</Body>
                        </Section>

                        <Section>
                            <SectionHeading $index={4}>
                                {i18n.t('about.value.title', { defaultValue: 'Giá trị thực tiễn' })}
                                <SectionNote>{i18n.t('about.value.note', { defaultValue: '(kết hợp học thuật + công nghệ — mô tả ngắn cách soát xét, kiểm chứng nguồn, duyệt nội dung.)' })}</SectionNote>
                            </SectionHeading>
                            <Body>
                                {i18n.t('about.value.body', { defaultValue: 'Mang lại tri thức dễ tiếp cận; hỗ trợ giảng dạy, học tập; góp phần lan tỏa giá trị tư tưởng Hồ Chí Minh tới cộng đồng.' })}
                            </Body>

                            <ValueList>
                                <ValueItem>
                                    <strong>{i18n.t('about.value.cards.modernUI.title', { defaultValue: 'Giao diện trực quan' })}</strong>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        {i18n.t('about.value.cards.modernUI.desc', { defaultValue: 'Thiết kế hiện đại, dễ đọc, tối ưu trên nhiều thiết bị.' })}
                                    </Paragraph>
                                </ValueItem>
                                <ValueItem>
                                    <strong>{i18n.t('about.value.cards.reliable.title', { defaultValue: 'Nguồn tin cậy' })}</strong>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        {i18n.t('about.value.cards.reliable.desc', { defaultValue: 'Tài liệu được chọn lọc, đối chiếu, có trích dẫn.' })}
                                    </Paragraph>
                                </ValueItem>
                                <ValueItem>
                                    <strong>{i18n.t('about.value.cards.interactive.title', { defaultValue: 'Tương tác & học tập' })}</strong>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        {i18n.t('about.value.cards.interactive.desc', { defaultValue: 'Các hoạt động học như quiz, thực nghiệm, sơ đồ tư duy, v.v.' })}
                                    </Paragraph>
                                </ValueItem>
                                <ValueItem>
                                    <strong>{i18n.t('about.value.cards.community.title', { defaultValue: 'Cộng đồng & lan tỏa' })}</strong>
                                    <Paragraph style={{ marginBottom: 0 }}>
                                        {i18n.t('about.value.cards.community.desc', { defaultValue: 'Kết nối người học, giáo viên, nghiên cứu; thúc đẩy chia sẻ tri thức.' })}
                                    </Paragraph>
                                </ValueItem>
                            </ValueList>
                        </Section>
                    </ListWrap>
                </Container>
            </AboutPage>
        </>
    );
};

export default About;