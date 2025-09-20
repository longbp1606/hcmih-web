import { useEffect, useMemo, useState } from 'react';
import { Card, Col, Pagination, Row, Typography, theme } from 'antd';
import { Link } from 'react-router-dom';
import config from '@/config';
import { useDocumentTitle } from '@/hooks';

type Quiz = {
    id: number;
    title: string;
};

const { Title, Text } = Typography;

const PAGE_SIZE_OPTIONS = [8, 10, 12] as const;

export default function QuizesPage() {
    useDocumentTitle('Danh sách Quiz');
    theme.useToken();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<number>(PAGE_SIZE_OPTIONS[0]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<Quiz[]>([]);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        fetch('/quizes.json')
            .then((r) => r.json())
            .then((json) => {
                if (!mounted) return;
                setData(json.quizes as Quiz[]);
                setError(null);
            })
            .catch((e) => setError(e?.message ?? 'Failed to load quizes'))
            .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, []);

    const filtered = useMemo(() => data, [data]);

    const start = (page - 1) * pageSize;
    const current = filtered.slice(start, start + pageSize);

    return (
        <div style={{ padding: '32px 24px', background: '#f7f2e7' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <Title level={1} style={{ textAlign: 'center', marginBottom: 24, color: '#7b2e20' }}>
                    Danh sách Quiz
                </Title>

                {/* level filter removed */}

                {loading && (
                    <div style={{ marginBottom: 12 }}>Đang tải danh sách quiz...</div>
                )}
                {error && (
                    <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>
                )}

                <Row gutter={[24, 24]}>
                    {current.map((item) => (
                                    <Col xs={24} sm={12} md={12} lg={8} xl={6} key={item.id}>
                                        <Card
                                hoverable
                                styles={{ body: { padding: 16 } }}
                                style={{
                                    background: '#f5e6d3',
                                    borderRadius: 14,
                                    border: 'none',
                                    boxShadow: '0 2px 0 rgba(0,0,0,0.02)',
                                }}
                            >
                                            <Link
                                                to={config.routes.public.quizes + '/' + item.id}
                                                state={{ title: item.title }}
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                                <div>
                                                    <Text strong style={{ fontSize: 16 }}>
                                                        {item.title}
                                                    </Text>
                                                </div>
                                            </div>
                                            </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 24,
                    }}
                >
                    <Text type="secondary">Total {filtered.length} items</Text>
                    <Pagination
                        current={page}
                        total={filtered.length}
                        pageSize={pageSize}
                        showSizeChanger
                        pageSizeOptions={PAGE_SIZE_OPTIONS.map(String)}
                        onChange={(p, ps) => {
                            setPage(p);
                            setPageSize(ps);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}