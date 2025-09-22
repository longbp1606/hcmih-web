import { useEffect, useMemo, useState, useCallback } from "react";
import { Button, Col, Row, Typography, Space, Tag, Tooltip } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import {
  useNavigate,
  useParams,
  useLocation,
  Location,
} from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import { useTranslation } from "@/lang/LanguageProvider";
import {
  QuizDetailPageWrap,
  QuizDetailContainer,
  QuizDetailHeader,
  QuizDetailTitleGradient,
  QuizDetailProgressWrap,
  QuizDetailProgressBar,
  QuizDetailProgressInner,
  QuizDetailProgressText,
  QuizDetailShell,
  QuestionCard,
  AnswerBadge,
  AnswerCard,
  QuizDetailActions,
  QuizDetailFeedback,
} from "./Quizes.styled";

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
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [subset, setSubset] = useState<number[] | null>(null); // holds question indexes when in random10 mode
  const [shuffledAll, setShuffledAll] = useState<number[] | null>(null); // holds shuffled order for full mode

  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode");
  const isRandom10 = mode === "random10";

  const quizTitle = quiz?.title ?? location.state?.title ?? "Quiz";
  useDocumentTitle(i18n.t('quizDetail.docTitle', { title: quizTitle }));

  const [selected, setSelected] = useState<Answer["key"] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0); // current question index
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

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
          setError(i18n.t('quizDetail.notFound'));
        } else {
          setQuiz(found);
          setError(null);
        }
      })
      .catch((e) => setError(e?.message ?? i18n.t('quizDetail.loadError')))
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
    setCorrectCount(0);
    setFinished(false);
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

  // Shuffle answers per question (stable for current question index)
  const shuffledAnswers = useMemo(() => {
    if (!question) return [] as Answer[];
    const arr = [...question.answers];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
    // Re-shuffle when question id changes (index already tied to specific question choice set)
  }, [question?.id]);

  const onSubmit = () => {
    if (!question || selected === null) return;
    setSubmitted(true);
    if (selected === correctKey) {
      setCorrectCount((c) => c + 1);
    }
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
    if (next >= length) {
      setFinished(true);
    }
  };

  const total = subset
    ? subset.length
    : shuffledAll
    ? shuffledAll.length
    : quiz?.questions.length ?? 0;
  const completed = Math.min(index + (submitted ? 1 : 0), total);
  const progressPct = total ? Math.round((completed / total) * 100) : 0;

  const Badge = ({ label }: { label: string | number }) => (
    <AnswerBadge>{label}</AnswerBadge>
  );

  return (
    <QuizDetailPageWrap>
      <QuizDetailContainer>
        <QuizDetailHeader>
          <Button
            type="primary"
            ghost
            icon={<LeftOutlined />}
            onClick={() => navigate(-1)}
          >
            {i18n.t('common.back')}
          </Button>
        </QuizDetailHeader>

        <QuizDetailTitleGradient level={1}>
          {i18n.t('quizDetail.docTitle', { title: quizTitle })}
        </QuizDetailTitleGradient>
        {isRandom10 && (
          <div style={{ marginBottom: 16 }}>
            <Space>
              <Tag color="blue">{i18n.t('quizDetail.random10Tag')}</Tag>
              <Tooltip title={i18n.t('quizDetail.regenerateTooltip')}>
                <Button size="small" onClick={buildSubset}>
                  {i18n.t('quizDetail.regenerateBtn')}
                </Button>
              </Tooltip>
              <Button size="small" onClick={() => navigate(location.pathname)}>
                {i18n.t('quizDetail.switchToFullMode')}
              </Button>
            </Space>
          </div>
        )}

        <QuizDetailProgressWrap>
          <QuizDetailProgressBar>
            <QuizDetailProgressInner style={{ width: `${progressPct}%` }} />
          </QuizDetailProgressBar>
          <QuizDetailProgressText>
            {i18n.t('quizDetail.progressText', { completed, total })}
          </QuizDetailProgressText>
        </QuizDetailProgressWrap>

        <QuizDetailShell>
          {loading && <div style={{ marginBottom: 12 }}>{i18n.t('quizDetail.loading')}</div>}
          {error && (
            <div style={{ color: "red", marginBottom: 12 }}>{error}</div>
          )}
          {finished ? (
            <QuestionCard style={{ background: "#f7e9d6", border: "none" }}>
              <Space direction="vertical" style={{ width: "100%" }} size={16}>
                <Title
                  level={3}
                  style={{ margin: 0, textAlign: "center", color: "#5a3b2e" }}
                >
                  {i18n.t('quizDetail.completedTitle')}
                </Title>
                <Text style={{ fontSize: 16 }}>
                  {i18n.t('quizDetail.score', { correct: correctCount, total, percent: total ? Math.round((correctCount / total) * 100) : 0 })}
                </Text>
                <Space wrap>
                  <Button type="primary" onClick={buildSubset}>
                    {i18n.t('quizDetail.retry')}
                  </Button>
                  {isRandom10 ? (
                    <Button onClick={buildSubset}>{i18n.t('quizDetail.regenerateBtn')}</Button>
                  ) : (
                    <Button
                      onClick={() =>
                        navigate(location.pathname + "?mode=random10")
                      }
                    >
                      {i18n.t('quizDetail.switchToRandom10')}
                    </Button>
                  )}
                  <Button onClick={() => navigate(-1)}>
                    {i18n.t('quizDetail.backToList')}
                  </Button>
                </Space>
              </Space>
            </QuestionCard>
          ) : !question ? (
            <QuestionCard style={{ background: "#f7e9d6", border: "none" }}>
              <Text>{i18n.t('quizDetail.noQuestions')}</Text>
            </QuestionCard>
          ) : (
            <>
              <QuestionCard styles={{ body: { padding: 16 } }}>
                <Title
                  level={4}
                  style={{ color: "white", margin: 0, textAlign: "center" }}
                >
                  {question.text}
                </Title>
              </QuestionCard>

              <Row gutter={[24, 24]}>
                {shuffledAnswers.map((a, i) => {
                  const isActive = selected === a.key;
                  const isCorrect = submitted && a.key === correctKey;
                  const isWrong =
                    submitted && a.key === selected && a.key !== correctKey;

                  return (
                    <Col xs={24} md={12} key={a.key}>
                      <AnswerCard
                        hoverable
                        onClick={() => !submitted && setSelected(a.key)}
                        styles={{ body: { padding: 16 } }}
                        $selected={!submitted && isActive}
                        $correct={isCorrect}
                        $wrong={isWrong}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Badge label={i + 1} />
                          <Text style={{ fontSize: 16 }}> {a.text} </Text>
                        </div>
                      </AnswerCard>
                    </Col>
                  );
                })}
              </Row>

              <QuizDetailActions>
                <Space>
                {!submitted ? (
                  <Button
                    type="primary"
                    disabled={!selected}
                    onClick={onSubmit}
                  >
                    {i18n.t('quizDetail.submit')}
                  </Button>
                ) : (
                  <>
                    <QuizDetailFeedback>
                      {selected === correctKey ? i18n.t('quizDetail.correct') : i18n.t('quizDetail.incorrect')}
                    </QuizDetailFeedback>
                    <Button type="primary" onClick={onNext}>
                      {index + 1 >= total ? i18n.t('quizDetail.finish') : i18n.t('quizDetail.nextQuestion')}
                    </Button>
                  </>
                )}
                </Space>
              </QuizDetailActions>
            </>
          )}
        </QuizDetailShell>
      </QuizDetailContainer>
    </QuizDetailPageWrap>
  );
}
