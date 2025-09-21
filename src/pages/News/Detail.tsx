import { useParams, useNavigate } from "react-router-dom";
import { mockNews } from "../../data/news/mockNews";

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
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          background: "#ffe4c4",
          borderRadius: 20,
          boxShadow: "0 20px 60px rgba(184, 134, 11, 0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #d2b48c 0%, #b8860b 100%)",
            padding: "40px 50px 30px",
            position: "relative",
          }}
        >
          {/* Nút back */}
          <button
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              left: 30,
              top: 30,
              background: "rgba(255, 228, 196, 0.3)",
              border: "none",
              borderRadius: "50%",
              width: 50,
              height: 50,
              fontSize: "1.5rem",
              color: "#8b4513",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 228, 196, 0.5)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 228, 196, 0.3)";
              e.currentTarget.style.transform = "scale(1)";
            }}
            aria-label="Quay lại"
          >
            &#8592;
          </button>

          {/* Nguồn */}
          <div
            style={{
              position: "absolute",
              right: 30,
              top: 30,
              background: "rgba(255, 228, 196, 0.3)",
              padding: "8px 16px",
              borderRadius: 20,
              color: "#8b4513",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {news.source}
          </div>

          {/* Tiêu đề */}
          <h1
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: "2.5rem",
              color: "#8b4513",
              margin: "40px 0 20px 0",
              lineHeight: 1.2,
              textShadow: "0 2px 10px rgba(255, 228, 196, 0.5)",
            }}
          >
            {news.title}
          </h1>

          {/* Ngày đăng */}
          {news.date && (
            <div
              style={{
                textAlign: "center",
                color: "#a0522d",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {news.date}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div style={{ padding: "50px" }}>
          {/* Mô tả chính */}
          <div
            style={{
              background: "linear-gradient(135deg, #daa520 0%, #b8860b 100%)",
              color: "#ffffff",
              padding: "25px 30px",
              borderRadius: 15,
              marginBottom: 40,
              fontSize: "1.2rem",
              lineHeight: 1.6,
              fontWeight: 500,
              boxShadow: "0 10px 30px rgba(218, 165, 32, 0.3)",
            }}
          >
            {news.desc}
          </div>

          {/* Hình ảnh */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                background: "#fff8dc",
                borderRadius: 15,
                padding: 20,
                boxShadow: "0 15px 35px rgba(184, 134, 11, 0.2)",
                border: "2px solid #daa520",
              }}
            >
              <img
                src={news.img}
                alt={news.title}
                style={{
                  width: 450,
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>

          {/* Nội dung chi tiết */}
          {news.content && (
            <div
              style={{
                background: "#fff8dc",
                padding: "35px 40px",
                borderRadius: 15,
                marginBottom: 30,
                border: "2px solid #daa520",
              }}
            >
              <h3
                style={{
                  color: "#8b4513",
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  marginBottom: 20,
                  borderBottom: "2px solid #b8860b",
                  paddingBottom: 10,
                }}
              >
                Nội dung chi tiết
              </h3>
              <div
                style={{
                  color: "#8b7355",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  whiteSpace: "pre-line",
                }}
              >
                {news.content}
              </div>
            </div>
          )}

          {/* Link nguồn */}
          {news.url && (
            <div
              style={{
                textAlign: "center",
                marginTop: 40,
              }}
            >
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #daa520 0%, #b8860b 100%)",
                  color: "#ffffff",
                  padding: "15px 30px",
                  borderRadius: 25,
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  boxShadow: "0 10px 25px rgba(218, 165, 32, 0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(218, 165, 32, 0.6)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(218, 165, 32, 0.4)";
                }}
              >
                📖 Xem bài viết gốc
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
