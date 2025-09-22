import { useEffect, useMemo, useState, useCallback } from "react";
import { Button, Card, Col, Row, Typography, Space, Tag, Tooltip } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import {
  useNavigate,
  useParams,
  useLocation,
  Location,
} from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import styles from "./QuizDetail.module.css";

const { Title, Text } = Typography;

type Answer = {
  key: "A" | "B" | "C" | "D";
  text: string;
};

type Quiz = {
  id: number;
  title: string;
  questions: Array<{
    id: number;
    order: number;
    text: string;
    answers: Answer[];
    correct?: Answer["key"];
  }>;
};

export default function QuizDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation() as Location & { state?: { title?: string } };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [subset, setSubset] = useState<number[] | null>(null); // holds question indexes when in random10 mode
  const [shuffledAll, setShuffledAll] = useState<number[] | null>(null); // holds shuffled order for full mode

  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode");
  const isRandom10 = mode === "random10";

  const quizTitle = quiz?.title ?? location.state?.title ?? "Quiz";
  useDocumentTitle(`Quiz: ${quizTitle}`);

  const [selected, setSelected] = useState<Answer["key"] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0); // current question index

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/quizes.json")
      .then((r) => r.json())
      .then((json) => {
        if (!mounted) return;
        const found = (json.quizes as Quiz[]).find(
          (q) => String(q.id) === String(id)
        );
        if (!found) {
          setError("Quiz không tồn tại");
        } else {
          setQuiz(found);
          setError(null);
        }
      })
      .catch((e) => setError(e?.message ?? "Không thể tải quiz"))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  // Build subset when random10 mode or quiz changes
  const buildSubset = useCallback(() => {
    if (!quiz) return;
    const total = quiz.questions.length;
    const indexes = Array.from({ length: total }, (_, i) => i);
    for (let i = indexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    if (isRandom10) {
      const count = Math.min(10, total);
      setSubset(indexes.slice(0, count));
      setShuffledAll(null);
    } else {
      setSubset(null);
      setShuffledAll(indexes); // full shuffled order
    }
    setIndex(0);
    setSelected(null);
    setSubmitted(false);
  }, [quiz, isRandom10]);

  useEffect(() => {
    buildSubset();
  }, [buildSubset]);

  const question = useMemo(() => {
    if (!quiz || !quiz.questions?.length) return null;
    if (subset) {
      const realIdx = subset[index];
      return quiz.questions[realIdx] ?? null;
    }
    if (shuffledAll) {
      const realIdx = shuffledAll[index];
      return quiz.questions[realIdx] ?? null;
    }
    return quiz.questions[index] ?? null;
  }, [quiz, index, subset, shuffledAll]);

  const correctKey = question?.correct;

  const onSubmit = () => {
    if (!question || selected === null) return;
    setSubmitted(true);
  };

  const onNext = () => {
    if (!quiz) return;
    const length = subset
      ? subset.length
      : shuffledAll
      ? shuffledAll.length
      : quiz.questions.length;
    const next = index + 1;
    if (next < length) {
      setIndex(next);
      setSelected(null);
      setSubmitted(false);
    }
  };

  const total = subset
    ? subset.length
    : shuffledAll
    ? shuffledAll.length
    : quiz?.questions.length ?? 0;
  const completed = Math.min(index + (submitted ? 1 : 0), total);
  const progressPct = total ? Math.round((completed / total) * 100) : 0;

  const Badge = ({ letter }: { letter: string }) => (
    <div className={styles.answerBadge}>{letter}</div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button
            type="primary"
            ghost
            icon={<LeftOutlined />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>

        <Title level={1} className={styles.title}>
          Quiz: {quizTitle}
        </Title>
        {isRandom10 && (
          <div style={{ marginBottom: 16 }}>
            <Space>
              <Tag color="blue">Chế độ 10 câu ngẫu nhiên</Tag>
              <Tooltip title="Lấy lại 10 câu hỏi khác">
                <Button size="small" onClick={buildSubset}>
                  Đổi bộ câu hỏi
                </Button>
              </Tooltip>
              <Button size="small" onClick={() => navigate(location.pathname)}>
                Chuyển sang chế độ đầy đủ
              </Button>
            </Space>
          </div>
        )}

        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressInner}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className={styles.progressText}>
            {completed}/{total} hoàn thành
          </div>
        </div>

        <div className={styles.quizShell}>
          {loading && <div style={{ marginBottom: 12 }}>Đang tải quiz...</div>}
          {error && (
            <div style={{ color: "red", marginBottom: 12 }}>{error}</div>
          )}
          {!question ? (
            <Card style={{ background: "#f7e9d6", border: "none" }}>
              <Text>Không có câu hỏi.</Text>
            </Card>
          ) : (
            <>
              <Card
                styles={{ body: { padding: 16 } }}
                className={styles.questionCard}
              >
                <Title
                  level={4}
                  style={{ color: "white", margin: 0, textAlign: "center" }}
                >
                  {question.text}
                </Title>
              </Card>

              <Row gutter={[24, 24]}>
                {question.answers.map((a) => {
                  const isActive = selected === a.key;
                  const isCorrect = submitted && a.key === correctKey;
                  const isWrong =
                    submitted && a.key === selected && a.key !== correctKey;
                  const classNames = [styles.answerCard];
                  if (isCorrect) classNames.push(styles.correct);
                  else if (isWrong) classNames.push(styles.wrong);
                  else if (!submitted && isActive)
                    classNames.push(styles.selected);

                  return (
                    <Col xs={24} md={12} key={a.key}>
                      <Card
                        hoverable
                        onClick={() => !submitted && setSelected(a.key)}
                        styles={{ body: { padding: 16 } }}
                        className={classNames.join(" ")}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Badge letter={a.key} />
                          <Text style={{ fontSize: 16 }}> {a.text} </Text>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>

              <Space className={styles.actions}>
                {!submitted ? (
                  <Button
                    type="primary"
                    disabled={!selected}
                    onClick={onSubmit}
                  >
                    Nộp bài
                  </Button>
                ) : (
                  <>
                    <Text className={styles.feedback}>
                      {selected === correctKey
                        ? "Chính xác! 🎉"
                        : "Chưa đúng. Hãy thử lại câu sau."}
                    </Text>
                    <Button
                      type="primary"
                      onClick={onNext}
                      disabled={index + 1 >= total}
                    >
                      Câu tiếp theo
                    </Button>
                  </>
                )}
              </Space>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
