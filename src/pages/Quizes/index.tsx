import { useEffect, useMemo, useState } from "react";
import { Col, Typography, theme, Space, Button } from "antd";
import { Link } from "react-router-dom";
import config from "@/config";
import { useDocumentTitle } from "@/hooks";
import { useTranslation } from "@/lang/LanguageProvider";
import {
  QuizPage,
  QuizContainer,
  QuizHero,
  QuizTitleGradient,
  QuizSubtitle,
  QuizCardsRow,
  QuizCard,
  QuizBadge,
  QuizCTA,
  QuizArrow,
  QuizChipRow,
  QuizChip,
} from "./Quizes.styled";

type Quiz = {
  id: number;
  title: string;
  questions?: Array<{ id: number }>;
};

const { Text } = Typography;

export default function QuizesPage() {
  const { i18n } = useTranslation();
  useDocumentTitle(i18n.t("quizzes.title"));
  theme.useToken();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Quiz[]>([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/quizes.json")
      .then((r) => r.json())
      .then((json) => {
        if (!mounted) return;
        setData(json.quizes as Quiz[]);
        setError(null);
      })
  .catch((e) => setError(e?.message ?? i18n.t("quizzes.loadError")))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const current = useMemo(() => data.slice(0, 2), [data]);

  return (
    <QuizPage>
      <QuizContainer>
        <div style={{ marginBottom: 8 }}>
          <Link to={config.routes.public.learning + '#quiz'} style={{ fontSize: 13 }}>
            {i18n.t('common.backTo', { target: i18n.t('navigation.learning') })}
          </Link>
        </div>
        <QuizHero>
          <QuizTitleGradient level={1} style={{ marginBottom: 8, fontSize: 48 }}>
            {i18n.t('quizzes.title')}
          </QuizTitleGradient>
          <QuizSubtitle style={{ fontSize: 16 }}>
            {i18n.t('quizzes.subtitle')}
          </QuizSubtitle>
        </QuizHero>

        {loading && (
          <div style={{ marginBottom: 12 }}>{i18n.t('quizzes.loading')}</div>
        )}
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}

        <QuizCardsRow gutter={[28, 24]}>
          {current.map((item, idx) => {
            const questionsCount = item.questions?.length ?? 10;
            const estimatedMin = Math.max(3, Math.round(questionsCount * 0.6));
            const excerpt = i18n.t('quizzes.excerpt', { count: questionsCount, min: estimatedMin, max: estimatedMin + 2 });
            const chips = [
              i18n.t('quizzes.chips.basic'),
              i18n.t('quizzes.chips.hcmThesis'),
              i18n.t('quizzes.chips.questionsCount', { count: questionsCount })
            ];
            return (
              <Col xs={24} key={item.id}>
                <Link
                  to={config.routes.public.quizes + "/" + item.id}
                  state={{ title: item.title }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <QuizCard hoverable styles={{ body: { padding: 28 } }} style={{ background: "#f5e6d3" }}>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 20 }}
                    >
                      <QuizBadge aria-hidden>{idx + 1}</QuizBadge>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 12,
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: 12,
                              flexWrap: "wrap",
                            }}
                          >
                            <Text
                              strong
                              style={{ fontSize: 22, color: "#5a3b2e" }}
                            >
                              {item.title}
                            </Text>
                            <Text type="secondary" style={{ fontSize: 14 }}>
                              {i18n.t('quizzes.meta', { count: questionsCount, minutes: estimatedMin })}
                            </Text>
                          </div>
                          <QuizCTA aria-hidden>
                            {i18n.t('quizzes.start')}
                            <QuizArrow>➔</QuizArrow>
                          </QuizCTA>
                        </div>
                        <div style={{ marginTop: 8 }}>
                          <Text type="secondary" style={{ fontSize: 15 }}>
                            {excerpt}
                          </Text>
                        </div>
                        <QuizChipRow>
                          {chips.map((c) => (
                            <QuizChip key={c}>{c}</QuizChip>
                          ))}
                        </QuizChipRow>
                        <div style={{ marginTop: 16 }}>
                          <Space size={8} wrap>
                            <Link
                              to={
                                config.routes.public.quizes +
                                "/" +
                                item.id +
                                "?mode=random10"
                              }
                              state={{ title: item.title }}
                              style={{ textDecoration: "none" }}
                            >
                              <Button size="small">{i18n.t('quizzes.random10Button', { count: 10 })}</Button>
                            </Link>
                          </Space>
                        </div>
                      </div>
                    </div>
                  </QuizCard>
                </Link>
              </Col>
            );
          })}
        </QuizCardsRow>
      </QuizContainer>
    </QuizPage>
  );
}
