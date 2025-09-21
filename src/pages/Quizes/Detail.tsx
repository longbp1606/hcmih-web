import { useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Row, Typography, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks';
import styles from './QuizDetail.module.css';

const { Title, Text } = Typography;

type Answer = {
  key: 'A' | 'B' | 'C' | 'D';
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
    correct?: Answer['key'];
  }>;
};

export default function QuizDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation() as { state?: { title?: string } };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  const quizTitle = quiz?.title ?? location.state?.title ?? 'Quiz';
  useDocumentTitle(`Quiz: ${quizTitle}`);

  const [selected, setSelected] = useState<Answer['key'] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0); // current question index

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('/quizes.json')
      .then((r) => r.json())
      .then((json) => {
        if (!mounted) return;
        const found = (json.quizes as Quiz[]).find((q) => String(q.id) === String(id));
        if (!found) {
          setError('Quiz không tồn tại');
        } else {
          setQuiz(found);
          setError(null);
        }
      })
      .catch((e) => setError(e?.message ?? 'Không thể tải quiz'))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [id]);

  const question = useMemo(() => {
    if (!quiz || !quiz.questions?.length) return null;
    return quiz.questions[index] ?? null;
  }, [quiz, index]);

  const correctKey = question?.correct;

  const onSubmit = () => {
    if (!question || selected === null) return;
    setSubmitted(true);
  };

  const onNext = () => {
    if (!quiz) return;
    const next = index + 1;
    if (next < quiz.questions.length) {
      setIndex(next);
      setSelected(null);
      setSubmitted(false);
    }
  };

  const total = quiz?.questions.length ?? 0;
  const completed = Math.min(index + (submitted ? 1 : 0), total);
  const progressPct = total ? Math.round((completed / total) * 100) : 0;

  const Badge = ({ letter }: { letter: string }) => (
    <div className={styles.answerBadge}>{letter}</div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Button type="primary" ghost icon={<LeftOutlined />} onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>

        <Title level={1} className={styles.title}>
          Quiz: {quizTitle}
        </Title>

        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div className={styles.progressInner} style={{ width: `${progressPct}%` }} />
          </div>
          <div className={styles.progressText}>{completed}/{total} hoàn thành</div>
        </div>

        <div className={styles.quizShell}>
          {loading && <div style={{ marginBottom: 12 }}>Đang tải quiz...</div>}
          {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
          {!question ? (
            <Card style={{ background: '#f7e9d6', border: 'none' }}>
              <Text>Không có câu hỏi.</Text>
            </Card>
          ) : (
          <>
          <Card
            styles={{ body: { padding: 16 } }}
            className={styles.questionCard}
          >
            <div className={styles.questionLabel}>Câu hỏi {question.order}:</div>
            <Title level={4} style={{ color: 'white', margin: 0, textAlign: 'center' }}>
              {question.text}
            </Title>
          </Card>

          <Row gutter={[24, 24]}>
            {question.answers.map((a) => {
              const isActive = selected === a.key;
              const isCorrect = submitted && a.key === correctKey;
              const isWrong = submitted && a.key === selected && a.key !== correctKey;
              const classNames = [styles.answerCard];
              if (isCorrect) classNames.push(styles.correct);
              else if (isWrong) classNames.push(styles.wrong);
              else if (!submitted && isActive) classNames.push(styles.selected);

              return (
                <Col xs={24} md={12} key={a.key}>
                  <Card
                    hoverable
                    onClick={() => !submitted && setSelected(a.key)}
                    styles={{ body: { padding: 16 } }}
                    className={classNames.join(' ')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
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
                  {selected === correctKey ? 'Chính xác! 🎉' : 'Chưa đúng. Hãy thử lại câu sau.'}
                </Text>
                <Button type="primary" onClick={onNext} disabled={index + 1 >= (quiz?.questions.length ?? 0)}>
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
