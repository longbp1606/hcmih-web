import { useEffect, useMemo, useState } from 'react';
import { Button, Card, Col, Row, Typography, Space } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks';

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

  const Badge = ({ letter }: { letter: string }) => (
    <div
      style={{
        width: 32,
        height: 32,
        background: '#f3c14b',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 800,
        marginRight: 12,
      }}
    >
      {letter}
    </div>
  );

  return (
    <div style={{ padding: 24, background: '#f7f2e7', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Button type="primary" ghost icon={<LeftOutlined />} onClick={() => navigate(-1)}>
          Back
        </Button>

        <Title level={1} style={{ textAlign: 'center', margin: '24px 0', color: '#7b2e20' }}>
          Quiz: {quizTitle}
        </Title>

        <div
          style={{
            background: '#e9dcc5',
            padding: 24,
            borderRadius: 12,
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
          }}
        >
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
            style={{ background: '#8f2216', border: 'none', borderRadius: 12, marginBottom: 24 }}
          >
            <div style={{ color: 'white', opacity: 0.9, fontWeight: 600, marginBottom: 4 }}>
              Câu hỏi {question.order}:
            </div>
            <Title level={4} style={{ color: 'white', margin: 0, textAlign: 'center' }}>
              {question.text}
            </Title>
          </Card>

          <Row gutter={[24, 24]}>
            {question.answers.map((a) => {
              const isActive = selected === a.key;
              return (
                <Col xs={24} md={12} key={a.key}>
                  <Card
                    hoverable
                    onClick={() => !submitted && setSelected(a.key)}
                    styles={{ body: { padding: 16 } }}
                    style={{
                      background: submitted
                        ? a.key === correctKey
                          ? '#e6fffb'
                          : a.key === selected
                            ? '#fff1f0'
                            : '#f7e9d6'
                        : '#f7e9d6',
                      border: 'none',
                      borderRadius: 14,
                      boxShadow: submitted
                        ? a.key === correctKey
                          ? '0 0 0 2px #13c2c2 inset'
                          : a.key === selected
                            ? '0 0 0 2px #ff4d4f inset'
                            : '0 1px 0 rgba(0,0,0,0.02)'
                        : isActive
                          ? '0 0 0 2px #a73a2a inset'
                          : '0 1px 0 rgba(0,0,0,0.02)',
                      cursor: 'pointer',
                    }}
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

          <Space style={{ marginTop: 16 }}>
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
                <Text>
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
