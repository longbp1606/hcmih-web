import { useParams, useNavigate } from "react-router-dom";

// Dữ liệu mẫu, bạn có thể thay bằng API hoặc context
const mockNews = [
  {
    id: 1,
    title: "Tin tức 1",
    desc: "Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh",
    img: "https://via.placeholder.com/150",
    source: "Nguồn: ABC",
  },
  {
    id: 2,
    title: "Tin tức 2",
    desc: "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    img: "https://via.placeholder.com/150",
    source: "Nguồn: ABC",
  },
  // ... thêm các tin khác nếu muốn
];

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = mockNews.find((n) => n.id === Number(id));

  if (!news) return <div style={{ padding: 32 }}>Không tìm thấy tin tức!</div>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #f7e7c6 0%, #d2b48c 100%)",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: 950,
          margin: "0 auto",
          background: "#ffe4c4",
          borderRadius: 16,
          padding: "40px 32px 32px 32px",
          position: "relative",
          minHeight: 500,
          boxSizing: "border-box",
        }}
      >
        {/* Nút back ở góc trái trên */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            left: 32,
            top: 32,
            background: "none",
            border: "none",
            fontSize: "2rem",
            color: "#b8860b",
            cursor: "pointer",
            padding: 0,
          }}
          aria-label="Quay lại"
        >
          &#8592;
        </button>

        {/* Tiêu đề ở giữa */}
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2.2rem",
            color: "#b8860b",
            margin: "0 0 32px 0",
            paddingTop: "8px",
          }}
        >
          {news.title}
        </h1>

        {/* Nguồn ở góc phải trên */}
        <span
          style={{
            position: "absolute",
            right: 32,
            top: 40,
            color: "#b8860b",
            fontWeight: 500,
            fontSize: "1.1rem",
          }}
        >
          {news.source}
        </span>

        {/* Mô tả ở bên trái, dưới tiêu đề */}
        <div
          style={{
            marginBottom: 24,
            color: "#b8860b",
            fontWeight: 500,
            fontSize: "1.1rem",
            textAlign: "left",
            lineHeight: 1.4,
          }}
        >
          {news.desc}
        </div>

        {/* Hình ảnh ở bên trái, dưới mô tả */}
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: 16,
            display: "inline-block",
            marginTop: 8,
          }}
        >
          <img
            src={news.img}
            alt={news.title}
            style={{
              width: 200,
              height: 140,
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}
