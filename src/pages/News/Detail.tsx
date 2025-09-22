import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "../../lang/LanguageProvider";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
import { getLocalizedNews, getLocalizedNewsById } from "../../data/news/newsUtils";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n, locale } = useTranslation();
  const news = getLocalizedNewsById(Number(id), locale);

  if (!news) return <div style={{ padding: 32 }}>{i18n.t("news.noNewsFound")}</div>;

  // Lấy tin tức liên quan (loại trừ tin hiện tại)
  const allNews = getLocalizedNews(locale);
  const relatedNews = allNews.filter(n => n.id !== news.id).slice(0, 3);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #f7e7c6 0%, #d2b48c 100%)",
        padding: "20px",
      }}
    >
      {/* Language Switcher */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <LanguageSwitcher />
      </div>
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
            aria-label={i18n.t("news.backToNews")}
            title={i18n.t("news.backToNews")}
          >
            &#8592;
          </button>

          {/* Nguồn */}
          {news.url ? (
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 228, 196, 0.6)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 228, 196, 0.3)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              📖 {news.source}
            </a>
          ) : (
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
          )}

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
                maxWidth: "100%",
              }}
            >
              <img
                src={news.img}
                alt={news.title}
                style={{
                  width: "100%",
                  height: "400px",
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
                {i18n.t("news.content")}
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


          {/* Tin tức liên quan */}
          <div style={{ marginTop: 20, borderTop: "2px solid #daa520", paddingTop: 32 }}>
            <h3
              style={{
                color: "#8b4513",
                fontSize: "1.4rem",
                fontWeight: "600",
                marginBottom: 24,
                textAlign: "center",
              }}
            >
              {i18n.t("news.relatedNews")}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {relatedNews.map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  onClick={() => (window.location.href = `/news/${relatedItem.id}`)}
                  style={{
                    border: "2px solid #daa520",
                    borderRadius: 15,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    background: "#fff8dc",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(184, 134, 11, 0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={relatedItem.img}
                    alt={relatedItem.title}
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: 16 }}>
                    <h4
                      style={{
                        margin: "0 0 8px 0",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#8b4513",
                        lineHeight: 1.3,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {relatedItem.title}
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.85rem",
                        color: "#a97c2f",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {relatedItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
