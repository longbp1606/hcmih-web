import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Col, Row, Typography } from 'antd';
import { useDocumentTitle } from '@/hooks';
import { useTranslation } from '@/lang/LanguageProvider';
import contentImg from '@/assets/noidung.png';
import newsImg from '@/assets/tintuc.png';
import quizImg from '@/assets/caudo.png';
import { PageBg } from './Learning.styled';

const LearningPage: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle(i18n.t('learning.title'));

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  // page background gradient + soft vignette
  const pageStyle: React.CSSProperties = {
    minHeight: 'calc(100vh - 312px)', // account for header+footer
    padding: '48px 24px',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 1200, margin: '0 auto',
  };

  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: 24,
    color: '#7b1e1e',
    textShadow: '0 2px 0 rgba(0,0,0,0.1)',
    letterSpacing: 0.5,
  } as React.CSSProperties;

  const cardStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: 16,
    background: 'rgba(207, 178, 145, 0.65)', // warm beige panel
    boxShadow: '0 8px 18px rgba(0,0,0,0.15)',
  };

  const coverWrap: React.CSSProperties = {
    padding: 16,
    borderRadius: 12,
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    color: '#7b1e1e',
  };

  return (
    <>
      <PageBg />
      <div style={pageStyle}>
        <div style={containerStyle}>
          <Typography.Title level={1} style={titleStyle}>
            {i18n.t('learning.title')}
          </Typography.Title>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card
                hoverable
                style={cardStyle}
                bodyStyle={{ padding: 16 }}
                cover={
                  <div style={coverWrap}>
                    <img src={contentImg} alt={i18n.t('learning.alt.content')} style={imgStyle} />
                  </div>
                }
                onClick={() => navigate('/noi-dung')}
              >
                <Typography.Text strong style={labelStyle}>
                  {i18n.t('learning.content')}
                </Typography.Text>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                hoverable
                style={cardStyle}
                bodyStyle={{ padding: 16 }}
                cover={
                  <div style={coverWrap}>
                    <img src={newsImg} alt={i18n.t('learning.alt.news')} style={imgStyle} />
                  </div>
                }
                onClick={() => navigate('/news')}
              >
                <Typography.Text strong style={labelStyle}>
                  {i18n.t('learning.news')}
                </Typography.Text>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card
                hoverable
                style={cardStyle}
                bodyStyle={{ padding: 16 }}
                cover={
                  <div style={coverWrap}>
                    <img src={quizImg} alt={i18n.t('learning.alt.quiz')} style={imgStyle} />
                  </div>
                }
                onClick={() => navigate('/quizes')}
              >
                <Typography.Text strong style={labelStyle}>
                  {i18n.t('learning.quiz')}
                </Typography.Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default LearningPage;
