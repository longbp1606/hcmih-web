import { useEffect, useMemo, useState } from "react";
import { Card, Col, Row, Typography, theme, Space, Button } from "antd";
import { Link } from "react-router-dom";
import config from "@/config";
import { useDocumentTitle } from "@/hooks";
import styles from "./Quizes.module.css";

type Quiz = {
  id: number;
  title: string;
  questions?: Array<{ id: number }>;
};

const { Title, Text } = Typography;

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
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <Title
            level={1}
            className={styles.title}
            style={{ marginBottom: 8, fontSize: 48 }}
          >
            Danh sách Quiz
          </Title>
          <Text className={styles.subtitle} style={{ fontSize: 16 }}>
            Chọn một bài kiểm tra ngắn để bắt đầu
          </Text>
        </div>

        {loading && (
          <div style={{ marginBottom: 12 }}>Đang tải danh sách quiz...</div>
        )}
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}

        <Row gutter={[28, 24]} className={styles.cardsRow}>
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
                  <Card
                    hoverable
                    className={styles.card}
                    styles={{ body: { padding: 28 } }}
                    style={{ background: "#f5e6d3" }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 20 }}
                    >
                      <div className={styles.badge} aria-hidden>
                        {idx + 1}
                      </div>
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
                          <div className={styles.cta} aria-hidden>
                            Bắt đầu
                            <span className={styles.arrow}>➔</span>
                          </div>
                        </div>
                        <div style={{ marginTop: 8 }}>
                          <Text type="secondary" style={{ fontSize: 15 }}>
                            {excerpt}
                          </Text>
                        </div>
                        <div className={styles.chipRow}>
                          {chips.map((c) => (
                            <span className={styles.chip} key={c}>
                              {c}
                            </span>
                          ))}
                        </div>
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
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
