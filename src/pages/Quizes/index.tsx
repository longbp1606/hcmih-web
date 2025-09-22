import { useEffect, useMemo, useState } from "react";
import { Col, Typography, theme, Space, Button } from "antd";
import { Link } from "react-router-dom";
import config from "@/config";
import { useDocumentTitle } from "@/hooks";
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
  useDocumentTitle("Danh sách Quiz");
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
      .catch((e) => setError(e?.message ?? "Failed to load quizes"))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const current = useMemo(() => data.slice(0, 2), [data]);

  return (
    <QuizPage>
      <QuizContainer>
        <QuizHero>
          <QuizTitleGradient level={1} style={{ marginBottom: 8, fontSize: 48 }}>
            Danh sách Quiz
          </QuizTitleGradient>
          <QuizSubtitle style={{ fontSize: 16 }}>
            Chọn một bài kiểm tra ngắn để bắt đầu
          </QuizSubtitle>
        </QuizHero>

        {loading && (
          <div style={{ marginBottom: 12 }}>Đang tải danh sách quiz...</div>
        )}
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}

        <QuizCardsRow gutter={[28, 24]}>
          {current.map((item, idx) => {
            const questionsCount = item.questions?.length ?? 10;
            const estimatedMin = Math.max(3, Math.round(questionsCount * 0.6));
            const excerpt = `Gồm khoảng ${questionsCount} câu hỏi trắc nghiệm về tư tưởng, lịch sử và kiến thức tổng quát. Thời gian dự kiến ${estimatedMin}-${
              estimatedMin + 2
            } phút.`;
            const chips = ["Cơ bản", "Tư tưởng HCM", `${questionsCount} câu`];
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
                              • {questionsCount} câu hỏi • ~{estimatedMin} phút
                            </Text>
                          </div>
                          <QuizCTA aria-hidden>
                            Bắt đầu
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
                              <Button size="small">10 câu ngẫu nhiên</Button>
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
